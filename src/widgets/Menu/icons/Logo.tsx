import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  const logoColor = isDark ? "#5959F4" : "#4444C6";
  return (
    <Svg viewBox="0 0 530 128" {...props}>
    <g>
      <path d="M62.5,96.72c0,5.49-3,10-6.63,10s-6.63-4.46-6.63-10,3-10,6.63-10S62.5,91.23,62.5,96.72Z" transform="translate(-6.25 -21.33)" fill="#5959f4"/>
      <path d="M91.25,96.72c0,5.49-3,10-6.63,10S78,102.21,78,96.72s3-10,6.63-10S91.25,91.23,91.25,96.72Z" transform="translate(-6.25 -21.33)" fill="#5959f4"/>
      <path d="M134.24,105.59v.93h-8.9l-8.42,0h-1l0-1a26.56,26.56,0,0,0-1.83-9.3,25.45,25.45,0,0,0-4.73-7.83A26.38,26.38,0,0,0,100,81.8c-7.55-3.24-12.66-6-17.09-9.31A56.13,56.13,0,0,1,70.27,59.42,56.29,56.29,0,0,1,57.64,72.57c-4.44,3.29-9.55,6.07-17.09,9.3a26.57,26.57,0,0,0-9.45,6.69,25.4,25.4,0,0,0-4.73,7.82,26.91,26.91,0,0,0-1.83,9.31l0,1h-1l-8.43,0H6.26v-.92a45.26,45.26,0,0,1,7.51-25.12c5-7.61,11.83-13.25,19.31-15.89A45.46,45.46,0,0,0,42.58,60a45.77,45.77,0,0,0,6.65-5.26,34.79,34.79,0,0,0,5.16-6.08l15.87-27.3L86.1,48.55a34.61,34.61,0,0,0,5.17,6.08,44.5,44.5,0,0,0,6.64,5.26,45,45,0,0,0,9.51,4.69c7.48,2.64,14.34,8.28,19.31,15.89A45.26,45.26,0,0,1,134.24,105.59Z" transform="translate(-6.25 -21.33)" fill="#5959f4"/>
    </g>
    <g>
      <path d="M207.26,67.45a29.21,29.21,0,0,1-1.83,10.73,21.16,21.16,0,0,1-12.79,12.6,29.35,29.35,0,0,1-19.29,0A21.46,21.46,0,0,1,165.69,86a22,22,0,0,1-5.05-7.82,29.21,29.21,0,0,1-1.83-10.73,28.3,28.3,0,0,1,1.87-10.69A21.5,21.5,0,0,1,173.47,44.2,27.09,27.09,0,0,1,183,42.57a27.38,27.38,0,0,1,9.56,1.63,21.43,21.43,0,0,1,12.83,12.56A28.3,28.3,0,0,1,207.26,67.45Zm-12.6,0q0-7.47-3.15-11.23a11.44,11.44,0,0,0-17,0q-3.2,3.77-3.19,11.23t3.15,11.32a11.5,11.5,0,0,0,17,0Q194.66,75,194.66,67.45Z" transform="translate(-6.25 -21.33)" fill={textColor}/>
      <path d="M238.05,88.06a18,18,0,0,1-3.5,1.13,21,21,0,0,1-4.43.42,22.38,22.38,0,0,1-6.65-1A13.94,13.94,0,0,1,218,85.49a15.36,15.36,0,0,1-3.73-5.67,23,23,0,0,1-1.4-8.56,21.56,21.56,0,0,1,1.4-8.09,15.69,15.69,0,0,1,4-5.87,17.16,17.16,0,0,1,6.22-3.57,25.15,25.15,0,0,1,8.05-1.21,26.74,26.74,0,0,1,8,1.13,23.08,23.08,0,0,1,5.64,2.45,8.62,8.62,0,0,1,2.33,2.29,5.71,5.71,0,0,1,.86,3.23V90.94a15.6,15.6,0,0,1-1.48,7,13.56,13.56,0,0,1-4.08,4.86,18.09,18.09,0,0,1-6.11,2.83,28.84,28.84,0,0,1-7.54.94,33.49,33.49,0,0,1-7.27-.7,16.73,16.73,0,0,1-4.86-1.79,5.81,5.81,0,0,1-2.65-5,6.49,6.49,0,0,1,.7-3,5.61,5.61,0,0,1,1.56-2,25,25,0,0,0,5,2.14,19.8,19.8,0,0,0,6,.9,13.34,13.34,0,0,0,6.88-1.52,5.38,5.38,0,0,0,2.53-5Zm-5.83-7.39a10.06,10.06,0,0,0,3.23-.46A9.92,9.92,0,0,0,237.9,79V63c-.63-.26-1.31-.52-2.07-.78a8.74,8.74,0,0,0-2.83-.39,8.16,8.16,0,0,0-6,2.3c-1.53,1.53-2.29,3.92-2.29,7.19a14.42,14.42,0,0,0,.58,4.43,7.7,7.7,0,0,0,1.59,2.88,5.88,5.88,0,0,0,2.37,1.56A9.25,9.25,0,0,0,232.22,80.67Z" transform="translate(-6.25 -21.33)" fill={textColor}/>
      <path d="M268.22,77.33A7.58,7.58,0,0,0,272,82a13.91,13.91,0,0,0,6.3,1.37,20.51,20.51,0,0,0,6.15-.9,21.2,21.2,0,0,0,4.66-2,6.61,6.61,0,0,1,1.95,2,5.11,5.11,0,0,1,.77,2.72,4.75,4.75,0,0,1-1.08,3.11,8.58,8.58,0,0,1-3,2.22,17.55,17.55,0,0,1-4.51,1.32,34.81,34.81,0,0,1-5.71.43A27.07,27.07,0,0,1,269.08,91a18.55,18.55,0,0,1-6.69-3.82A17.32,17.32,0,0,1,258,80.83a22.93,22.93,0,0,1-1.6-9,21.37,21.37,0,0,1,1.6-8.63,17.36,17.36,0,0,1,4.27-6.06,16.89,16.89,0,0,1,6.15-3.54,22.84,22.84,0,0,1,7.11-1.13,20.89,20.89,0,0,1,7.27,1.21,16.69,16.69,0,0,1,5.68,3.38,15.42,15.42,0,0,1,3.7,5.21,16.39,16.39,0,0,1,1.32,6.61,4.89,4.89,0,0,1-1.32,3.73,7,7,0,0,1-3.74,1.64Zm7.39-16a7.87,7.87,0,0,0-5.56,2.06,9,9,0,0,0-2.6,5.95l14.85-2.41a6.19,6.19,0,0,0-6.69-5.6Z" transform="translate(-6.25 -21.33)" fill={textColor}/>
      <path d="M310.45,77.33A7.52,7.52,0,0,0,314.26,82a13.85,13.85,0,0,0,6.3,1.37,20.44,20.44,0,0,0,6.14-.9,21.3,21.3,0,0,0,4.67-2,6.57,6.57,0,0,1,1.94,2,5,5,0,0,1,.78,2.72A4.7,4.7,0,0,1,333,88.29a8.53,8.53,0,0,1-3,2.22,17.67,17.67,0,0,1-4.51,1.32,34.94,34.94,0,0,1-5.72.43A27.12,27.12,0,0,1,311.3,91a18.42,18.42,0,0,1-6.68-3.82,17.46,17.46,0,0,1-4.4-6.33,23.12,23.12,0,0,1-1.59-9,21.55,21.55,0,0,1,1.59-8.63,17.38,17.38,0,0,1,4.28-6.06,16.93,16.93,0,0,1,6.14-3.54,22.9,22.9,0,0,1,7.12-1.13A20.93,20.93,0,0,1,325,53.73a16.79,16.79,0,0,1,5.68,3.38,15.25,15.25,0,0,1,3.69,5.21,16.39,16.39,0,0,1,1.32,6.61,4.89,4.89,0,0,1-1.32,3.73,6.93,6.93,0,0,1-3.73,1.64Zm7.39-16a7.85,7.85,0,0,0-5.56,2.06,9,9,0,0,0-2.61,5.95l14.85-2.41a6.18,6.18,0,0,0-6.68-5.6Z" transform="translate(-6.25 -21.33)" fill={textColor}/>
      <path d="M357.42,82.46c2.75,0,4.7-.48,5.87-1.44A4.33,4.33,0,0,0,365,77.56a3.68,3.68,0,0,0-1.36-3,12.47,12.47,0,0,0-4.08-2l-4-1.24a47.63,47.63,0,0,1-5.91-2.22,17.87,17.87,0,0,1-4.51-2.87,12.07,12.07,0,0,1-2.92-4,13.46,13.46,0,0,1-1-5.56,12.37,12.37,0,0,1,4.93-10.34q4.95-3.81,13.73-3.81a38.29,38.29,0,0,1,6.18.46A18.62,18.62,0,0,1,371,44.47a9.4,9.4,0,0,1,3.19,2.37,5,5,0,0,1,1.17,3.27,5.59,5.59,0,0,1-.9,3.15,9.71,9.71,0,0,1-2.06,2.29,16.7,16.7,0,0,0-4.74-2.1,23.16,23.16,0,0,0-6.46-.85,10.26,10.26,0,0,0-5.52,1.17,3.44,3.44,0,0,0-1.79,2.95A2.7,2.7,0,0,0,355,59.09a15.15,15.15,0,0,0,3.65,1.67l4.2,1.4a45.84,45.84,0,0,1,6.42,2.69,19.71,19.71,0,0,1,4.63,3.26,12.14,12.14,0,0,1,2.8,4.2,14.75,14.75,0,0,1,.93,5.41,13.72,13.72,0,0,1-1.28,6,12.83,12.83,0,0,1-3.81,4.62,18.87,18.87,0,0,1-6.23,3,30.38,30.38,0,0,1-8.51,1.08,34.9,34.9,0,0,1-6.61-.58A20.77,20.77,0,0,1,346,90.16a10.23,10.23,0,0,1-3.5-2.68,5.66,5.66,0,0,1-1.28-3.62,5.18,5.18,0,0,1,1.2-3.5,10.54,10.54,0,0,1,2.69-2.25,21.44,21.44,0,0,0,5.24,3A18.29,18.29,0,0,0,357.42,82.46Z" transform="translate(-6.25 -21.33)" fill={textColor}/>
      <path d="M410.14,68.85q-.69,2.88-1.55,5.91t-1.71,5.91Q406,83.55,405.24,86c-.52,1.61-.93,2.93-1.24,4q-2.1,1.86-6.69,1.86a14,14,0,0,1-4.9-.78,4.58,4.58,0,0,1-2.8-2.33,46.16,46.16,0,0,1-2-5.91c-.78-2.69-1.54-5.65-2.29-8.86s-1.47-6.48-2.14-9.8-1.22-6.22-1.63-8.71a7.68,7.68,0,0,1,2.6-1.75,8.88,8.88,0,0,1,3.62-.74,6.73,6.73,0,0,1,4,1.13,5.43,5.43,0,0,1,1.94,3.85c.52,3.63,1,6.74,1.36,9.33s.74,4.79,1.06,6.61.58,3.28.81,4.39.4,2,.51,2.61h.31c.2-.83.52-2.08.93-3.74s.91-3.53,1.48-5.63L402,64.69c.64-2.41,1.28-4.83,1.9-7.27a11.38,11.38,0,0,1,6.22-1.63,10.05,10.05,0,0,1,4.24.81,3.83,3.83,0,0,1,2.22,2.45c.67,2.34,1.32,4.63,1.94,6.89s1.19,4.34,1.71,6.26,1,3.62,1.36,5.13.69,2.67.9,3.5h.39Q424,74.68,425,68t1.86-13.65a10.32,10.32,0,0,1,2.65-1.05,11.59,11.59,0,0,1,2.79-.35,7.14,7.14,0,0,1,4,1.05,4,4,0,0,1,1.59,3.62,24.65,24.65,0,0,1-.42,3.65q-.44,2.49-1.09,5.6t-1.52,6.57c-.57,2.31-1.14,4.52-1.71,6.65s-1.13,4.07-1.67,5.83-1,3.11-1.36,4.05a6.23,6.23,0,0,1-2.88,1.36,18.28,18.28,0,0,1-4.35.5q-5.91,0-6.93-2.88l-1.32-3.81c-.52-1.5-1-3.15-1.59-4.93s-1.08-3.66-1.6-5.6S410.5,70.72,410.14,68.85Z" transform="translate(-6.25 -21.33)" fill={textColor}/>
      <path d="M459.37,52.52a30.45,30.45,0,0,1,7.35.82,15.9,15.9,0,0,1,5.63,2.52A11.71,11.71,0,0,1,476,60.22a14,14,0,0,1,1.28,6.22V84a4.73,4.73,0,0,1-1.05,3.22,9.79,9.79,0,0,1-2.52,2.06,19.23,19.23,0,0,1-5.91,2.26,36.71,36.71,0,0,1-7.94.78q-8,0-12.75-3.08t-4.74-9.37q0-5.36,3.19-8.16t9.79-3.5l10.35-1.09v-.85a3.93,3.93,0,0,0-2-3.66,11.77,11.77,0,0,0-5.83-1.17,24.4,24.4,0,0,0-5.79.7,35,35,0,0,0-5.09,1.64,4.89,4.89,0,0,1-1.6-1.91,5.92,5.92,0,0,1-.66-2.76q0-3.42,3.58-4.9A24.32,24.32,0,0,1,453.5,53,40.69,40.69,0,0,1,459.37,52.52Zm.46,31a16.81,16.81,0,0,0,3.39-.35,7.55,7.55,0,0,0,2.52-.9V75.15l-6.37.55a9.69,9.69,0,0,0-4,1.12,2.92,2.92,0,0,0-1.51,2.68,3.53,3.53,0,0,0,1.4,3A7.5,7.5,0,0,0,459.83,83.55Z" transform="translate(-6.25 -21.33)" fill={textColor}/>
      <path d="M504.62,92.26a18.91,18.91,0,0,1-3.73-.35,18.13,18.13,0,0,1-3.11-.9v13.92a19.32,19.32,0,0,1-5.29.7q-3.5,0-5.05-1.16T485.88,100V61.54a5.82,5.82,0,0,1,.86-3.3,8.2,8.2,0,0,1,2.41-2.3,21.71,21.71,0,0,1,6-2.45,31.73,31.73,0,0,1,8.08-1,29,29,0,0,1,8.29,1.13A17,17,0,0,1,518,57.19a16.15,16.15,0,0,1,4.24,6.14,23.52,23.52,0,0,1,1.51,8.87,24.47,24.47,0,0,1-1.43,8.67,17.38,17.38,0,0,1-4,6.29A16.76,16.76,0,0,1,512.25,91,22.17,22.17,0,0,1,504.62,92.26Zm-1.78-9.41a8.13,8.13,0,0,0,6.49-2.64q2.3-2.65,2.29-8c0-3.69-.74-6.33-2.21-7.94a8,8,0,0,0-6.19-2.41,10.29,10.29,0,0,0-3.11.43,18.6,18.6,0,0,0-2.41,1V81.53a10,10,0,0,0,5.14,1.32Z" transform="translate(-6.25 -21.33)" fill={textColor}/>
    </g>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);