import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 26 26" {...props}>
      <path
        d="M20.13,14.15a1.18,1.18,0,0,1-1.2.07,1.71,1.71,0,0,1-.68-1.61V10.2A2.08,2.08,0,0,0,17,8c-1.32-.38-2.3,1.21-2.68,1.81L12,13.51V9c0-1-.37-1.67-1-1.86C10.54,7,9.89,7.05,9.26,8l-5.2,8.23A9,9,0,1,1,21,12v.05a2.25,2.25,0,0,1-.86,2.1ZM23,12V12a11,11,0,1,0-3.53,8.12,1,1,0,0,0-1.34-1.49h0a9,9,0,0,1-12.57-.32L5.31,18,10,10.57V14c0,1.64.64,2.18,1.19,2.33s1.37.05,2.24-1.34L16,10.86l.23-.35v2.1A3.67,3.67,0,0,0,18,16a3.2,3.2,0,0,0,3.22-.13A4.19,4.19,0,0,0,23,12Z"
        transform="translate(-1 -1)"
      />
    </Svg>
  );
};

export default Icon;
