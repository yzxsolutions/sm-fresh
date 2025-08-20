import * as React from "react";
import type { SVGProps } from "react";
const Component = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 30 30"
    {...props}
  >
    <defs>
      <linearGradient
        xmlns="http://www.w3.org/2000/svg"
        id="prefix__a"
        x1={4.38}
        x2={25.62}
        y1={25.617}
        y2={4.384}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAAD4F" />
        <stop offset={0.35} stopColor="#DD2A7B" />
        <stop offset={0.62} stopColor="#9537B0" />
        <stop offset={1} stopColor="#515BD4" />
      </linearGradient>
    </defs>
    <g xmlns="http://www.w3.org/2000/svg">
      <path
        fill="url(#prefix__a)"
        d="M15.03 0h-.06C6.7 0 0 6.7 0 14.966v.068C0 23.3 6.7 30 14.97 30h.06C23.3 30 30 23.3 30 15.034v-.068C30 6.7 23.3 0 15.03 0"
      />
      <g fill="#fff">
        <path d="M19.64 6.104h-9.28a4.66 4.66 0 0 0-4.65 4.65v8.493a4.66 4.66 0 0 0 4.65 4.651h9.28c2.57 0 4.65-2.087 4.65-4.651v-8.493c0-2.564-2.08-4.65-4.65-4.65m-12.29 4.65c0-1.659 1.35-3.01 3.01-3.01h9.28c1.66 0 3.01 1.351 3.01 3.01v8.493c0 1.659-1.35 3.01-3.01 3.01h-9.28a3.014 3.014 0 0 1-3.01-3.01z" />
        <path d="M15 19.326c2.38 0 4.33-1.94 4.33-4.326a4.33 4.33 0 0 0-8.66 0A4.33 4.33 0 0 0 15 19.326m0-7.01c1.48 0 2.69 1.204 2.69 2.685A2.69 2.69 0 0 1 15 17.686a2.69 2.69 0 0 1-2.69-2.685A2.69 2.69 0 0 1 15 12.316M19.73 11.372c.64 0 1.16-.522 1.16-1.165a1.166 1.166 0 1 0-1.16 1.165" />
      </g>
    </g>
  </svg>
);
export default Component;
