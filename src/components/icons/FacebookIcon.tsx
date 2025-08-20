import * as React from "react";
import type { SVGProps } from "react";
const Component = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 30 30"
    {...props}
  >
    <g xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="M30 15.001c0 7.575-5.62 13.839-12.91 14.855a15.1 15.1 0 0 1-4.49-.047C5.45 28.659 0 22.466 0 15.001 0 6.716 6.72 0 15 0s15 6.716 15 15.001"
      />
      <path
        fill="#fff"
        d="M17.09 12.045v3.268h4.04l-.64 4.401h-3.4v10.142a15.1 15.1 0 0 1-4.49-.047V19.714H8.87v-4.401h3.73v-3.999c0-2.48 2.01-4.492 4.49-4.492v.002l.02-.002h4.02v3.807H18.5c-.78 0-1.41.634-1.41 1.415z"
      />
    </g>
  </svg>
);
export default Component;
