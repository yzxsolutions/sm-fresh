/**
 * WebGL detection and capability utilities
 */

export interface WebGLCapabilities {
  supported: boolean;
  version: string | null;
  renderer: string | null;
  maxTextureSize: number | null;
  maxVertexUniforms: number | null;
}

/**
 * Detect if WebGL is supported in the current browser
 */
export const detectWebGL = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !!(gl && gl instanceof WebGLRenderingContext);
  } catch {
    return false;
  }
};

/**
 * Get detailed WebGL capabilities
 */
export const getWebGLCapabilities = (): WebGLCapabilities => {
  const capabilities: WebGLCapabilities = {
    supported: false,
    version: null,
    renderer: null,
    maxTextureSize: null,
    maxVertexUniforms: null,
  };

  if (typeof window === 'undefined') return capabilities;

  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (gl && gl instanceof WebGLRenderingContext) {
      capabilities.supported = true;
      capabilities.version = gl.getParameter(gl.VERSION);
      
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        capabilities.renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
      }
      
      capabilities.maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
      capabilities.maxVertexUniforms = gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS);
    }
  } catch (error) {
    console.warn('WebGL capability detection failed:', error);
  }

  return capabilities;
};

/**
 * Determine optimal quality settings based on device capabilities
 */
export const getOptimalQualitySettings = () => {
  const capabilities = getWebGLCapabilities();
  
  if (!capabilities.supported) {
    return {
      quality: 'none',
      antialias: false,
      shadows: false,
      maxLights: 0,
    };
  }

  // Basic quality detection based on max texture size
  const maxTextureSize = capabilities.maxTextureSize || 0;
  
  if (maxTextureSize >= 4096) {
    return {
      quality: 'high',
      antialias: true,
      shadows: true,
      maxLights: 4,
    };
  } else if (maxTextureSize >= 2048) {
    return {
      quality: 'medium',
      antialias: true,
      shadows: false,
      maxLights: 2,
    };
  } else {
    return {
      quality: 'low',
      antialias: false,
      shadows: false,
      maxLights: 1,
    };
  }
};

/**
 * Check if device is likely mobile based on user agent and screen size
 */
export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
  const isSmallScreen = window.innerWidth <= 768;
  
  return isMobileUA || isSmallScreen;
};

/**
 * Get performance-optimized settings for the current device
 */
export const getPerformanceSettings = () => {
  if (typeof window === 'undefined') {
    return {
      quality: 'medium',
      antialias: true,
      shadows: false,
      maxLights: 2,
      pixelRatio: 1,
      powerPreference: 'default' as WebGLPowerPreference,
      frameRate: 30,
    };
  }

  const isMobile = isMobileDevice();
  const qualitySettings = getOptimalQualitySettings();
  
  return {
    ...qualitySettings,
    pixelRatio: isMobile ? Math.min(window.devicePixelRatio, 2) : window.devicePixelRatio,
    powerPreference: (isMobile ? 'low-power' : 'high-performance') as WebGLPowerPreference,
    frameRate: isMobile ? 30 : 60,
  };
};