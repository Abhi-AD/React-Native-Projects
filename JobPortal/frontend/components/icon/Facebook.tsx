import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg";
const FacebookIcon = (props: SvgProps) => (
  <Svg width={33} height={33} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#1877F2"
        d="M32.5 16.75c0-8.837-7.163-16-16-16s-16 7.163-16 16c0 7.986 5.851 14.605 13.5 15.806V21.375H9.937V16.75H14v-3.525C14 9.215 16.389 7 20.043 7c1.751 0 3.582.313 3.582.313v3.937h-2.017C19.62 11.25 19 12.483 19 13.749v3.001h4.438l-.71 4.625H19v11.18c7.649-1.2 13.5-7.819 13.5-15.805Z"
      />
      <Path
        fill="#fff"
        d="m22.728 21.375.71-4.625H19v-3.001c0-1.266.62-2.499 2.608-2.499h2.017V7.312S21.794 7 20.043 7C16.39 7 14 9.215 14 13.225v3.525H9.937v4.625H14v11.18a16.123 16.123 0 0 0 5 0v-11.18h3.728Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.5.75h32v32H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default FacebookIcon;
