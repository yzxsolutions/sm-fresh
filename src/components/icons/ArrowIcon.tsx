import * as React from "react";
import type { SVGProps } from "react";
const Component = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16.592 35.571"
    {...props}
  >
    <g xmlns="http://www.w3.org/2000/svg">
      <path
        stroke="#fff"
        strokeWidth={2.679}
        d="M16.592 8.304C16.592 3.718 12.877 0 8.296 0 3.714 0 0 3.718 0 8.304v9.107c0 4.586 3.714 8.303 8.296 8.303s8.296-3.717 8.296-8.303z"
      />
      <path
        fill="#fff"
        d="M9.366 5.357a1.071 1.071 0 1 0-2.141 0v3.214a1.071 1.071 0 1 0 2.141 0z"
      />
      <g fill="#fff">
        <path d="M11.499 32.54a1.072 1.072 0 0 0-1.514-1.515l-2.27 2.273a1.07 1.07 0 0 0 0 1.515 1.07 1.07 0 0 0 1.513 0z" />
        <path d="M5.306 32.54a1.072 1.072 0 0 1 1.514-1.515l2.271 2.273a1.072 1.072 0 0 1-1.514 1.515z" />
      </g>
    </g>
  </svg>
);
export default Component;
