// Form validation utilities
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};

export const validateMinLength = (value: string, minLength: number): boolean => {
  return value.trim().length >= minLength;
};

export const validateMaxLength = (value: string, maxLength: number): boolean => {
  return value.trim().length <= maxLength;
};

// Form field validation with error messages
export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export const validateFormField = (
  value: string,
  rules: {
    required?: boolean;
    email?: boolean;
    phone?: boolean;
    minLength?: number;
    maxLength?: number;
  }
): ValidationResult => {
  if (rules.required && !validateRequired(value)) {
    return { isValid: false, error: 'This field is required' };
  }

  if (value && rules.email && !validateEmail(value)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }

  if (value && rules.phone && !validatePhone(value)) {
    return { isValid: false, error: 'Please enter a valid phone number' };
  }

  if (value && rules.minLength && !validateMinLength(value, rules.minLength)) {
    return { isValid: false, error: `Minimum ${rules.minLength} characters required` };
  }

  if (value && rules.maxLength && !validateMaxLength(value, rules.maxLength)) {
    return { isValid: false, error: `Maximum ${rules.maxLength} characters allowed` };
  }

  return { isValid: true };
};