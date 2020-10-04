import React from "react";

export default function Hamburger({ open, onClick }) {
  return (
    <div
      onClick={onClick}
      className="svg-container"
      id="hamburger"
      style={{
        alignItems: "center",
        cursor: "pointer",
        width: 35,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 41 32"
      >
        <defs>
          <style>
            {`
            rect {
              transition: .3s;
            }
            * {
              user-select: none;
            }
            `}
          </style>
        </defs>
        <g id="Group_70" data-name="Group 70" transform="translate(-1826 -72)">
          <rect
            id="top-slice"
            data-name="Top left slice"
            width="20"
            height="6"
            rx="3"
            transform="translate(1826 72)"
            fill="#34d1bf"
            opacity={open ? 0 : 1}
          />
          <rect
            id="bottom-slice"
            data-name="Bottom right slice"
            width="20"
            height="6"
            rx="3"
            transform="translate(1846 98)"
            fill="#34d1bf"
            opacity={open ? 0 : 1}
          />
          <rect
            id="Rectangle_50"
            data-name="Rectangle 50"
            width="40"
            height="6"
            rx="3"
            transform={`translate(1826 85) ${open ? "rotate(-45 20 3)" : ""}`}
            fill="#3454d1"
          />
          <rect
            id="Rectangle_50"
            data-name="Rectangle 50"
            width="40"
            height="6"
            rx="3"
            transform={`translate(1826 85) ${open ? "rotate(45 20 3)" : ""}`}
            fill="#3454d1"
          />
        </g>
      </svg>
    </div>
  );
}
