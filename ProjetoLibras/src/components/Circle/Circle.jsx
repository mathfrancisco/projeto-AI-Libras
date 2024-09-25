/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Circle = ({ avatar, className }) => {
  return (
    <div
      className={`w-[500px] bg-cover h-[500px] rounded-[300px] bg-[50%_50%] relative ${
        avatar === "two"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-1.png)]"
          : avatar === "three"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-2.png)]"
          : avatar === "four"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-3.png)]"
          : avatar === "five"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-4.png)]"
          : avatar === "six"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-5.png)]"
          : avatar === "seven"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-6.png)]"
          : avatar === "eight"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-7.png)]"
          : avatar === "nine"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-8.png)]"
          : avatar === "ten"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-9.png)]"
          : avatar === "eleven"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-10.png)]"
          : avatar === "twelve"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-11.png)]"
          : avatar === "thirteen"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-12.png)]"
          : avatar === "fourteen"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-13.png)]"
          : avatar === "fifteen"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-14.png)]"
          : avatar === "sixteen"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-15.png)]"
          : avatar === "seventeen"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-16.png)]"
          : avatar === "eighteen"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-17.png)]"
          : avatar === "nineteen"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-18.png)]"
          : avatar === "twenty"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-19.png)]"
          : avatar === "twenty-one"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-20.png)]"
          : avatar === "twenty-two"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-21.png)]"
          : avatar === "twenty-three"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-22.png)]"
          : avatar === "twenty-four"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-23.png)]"
          : avatar === "twenty-five"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-24.png)]"
          : avatar === "twenty-six"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-25.png)]"
          : avatar === "twenty-seven"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-26.png)]"
          : avatar === "twenty-eight"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-27.png)]"
          : avatar === "twenty-nine"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-28.png)]"
          : avatar === "thirty"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-29.png)]"
          : avatar === "thirty-one"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-30.png)]"
          : avatar === "thirty-two"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-31.png)]"
          : avatar === "thirty-three"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-32.png)]"
          : avatar === "thirty-four"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-33.png)]"
          : avatar === "thirty-five"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-34.png)]"
          : avatar === "thirty-six"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-35.png)]"
          : avatar === "thirty-seven"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-36.png)]"
          : avatar === "avatar-77"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-37.png)]"
          : avatar === "avatar-76"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-38.png)]"
          : avatar === "avatar-75"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-39.png)]"
          : avatar === "avatar-74"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-40.png)]"
          : avatar === "avatar-73"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-41.png)]"
          : avatar === "avatar-72"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-42.png)]"
          : avatar === "avatar-71"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-43.png)]"
          : avatar === "avatar-70"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-44.png)]"
          : avatar === "avatar-69"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-45.png)]"
          : avatar === "avatar-68"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-46.png)]"
          : avatar === "avatar-67"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-47.png)]"
          : avatar === "avatar-66"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-48.png)]"
          : avatar === "avatar-65"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-49.png)]"
          : avatar === "avatar-64"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-50.png)]"
          : avatar === "avatar-63"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-51.png)]"
          : avatar === "avatar-62"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-52.png)]"
          : avatar === "avatar-61"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-53.png)]"
          : avatar === "avatar-60"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-54.png)]"
          : avatar === "avatar-59"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-55.png)]"
          : avatar === "avatar-58"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-56.png)]"
          : avatar === "avatar-57"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-57.png)]"
          : avatar === "avatar-56"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-58.png)]"
          : avatar === "avatar-55"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-59.png)]"
          : avatar === "avatar-54"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-60.png)]"
          : avatar === "avatar-53"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-61.png)]"
          : avatar === "avatar-52"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-62.png)]"
          : avatar === "avatar-51"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-63.png)]"
          : avatar === "avatar-50"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-64.png)]"
          : avatar === "avatar-49"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-65.png)]"
          : avatar === "avatar-48"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-66.png)]"
          : avatar === "avatar-47"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-67.png)]"
          : avatar === "avatar-46"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-68.png)]"
          : avatar === "avatar-45"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-69.png)]"
          : avatar === "avatar-44"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-70.png)]"
          : avatar === "avatar-43"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-71.png)]"
          : avatar === "avatar-42"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-72.png)]"
          : avatar === "avatar-41"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-73.png)]"
          : avatar === "avatar-40"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-74.png)]"
          : avatar === "avatar-39"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-75.png)]"
          : avatar === "avatar-38"
          ? "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-76.png)]"
          : "bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image.png)]"
      } ${className}`}
    />
  );
};
