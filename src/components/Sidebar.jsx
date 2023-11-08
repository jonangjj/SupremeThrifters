import React, { useEffect, useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";
import Button from "./Button";

const Sidebar = ({ children, onClose }) => {
  return (
    <>
      <div
        className={`absolute top-20 bottom-10 max-md:right-4 rounded-md left-4 flex bg-white z-5 max-w-lg`}
      >
        <div className="relative w-full overflow-scroll ">
          <div className="p-sm w-fit cursor-pointer " onClick={onClose}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.7304 7.78726L18.1607 6.21753L12.9809 11.3973L7.80117 6.21753L6.23145 7.78726L11.4112 12.967L6.23145 18.1468L7.80117 19.7165L12.9809 14.5367L18.1607 19.7165L19.7304 18.1468L14.5507 12.967L19.7304 7.78726Z"
                fill="black"
              />
            </svg>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
