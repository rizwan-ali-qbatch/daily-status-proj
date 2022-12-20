import React from 'react';
import '../Styles/SidebarStyles.css';
import '@fontsource/lato';

export default function SideBar() {
  return (
    <>
      <div className="sidebar">
        <a href="/" style={{ marginTop: '95px' }}>
          &#127968; Dashboard
        </a>
        <a href="/">
          <svg
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.66683 6.66666V5.33333H3.66683V3.33333L0.333496 5.99999L3.66683 8.66666V6.66666H9.66683Z"
              fill="#ADB4D2"
            />
            <path
              d="M12.3333 0H6.33333C5.598 0 5 0.598 5 1.33333V4H6.33333V1.33333H12.3333V10.6667H6.33333V8H5V10.6667C5 11.402 5.598 12 6.33333 12H12.3333C13.0687 12 13.6667 11.402 13.6667 10.6667V1.33333C13.6667 0.598 13.0687 0 12.3333 0Z"
              fill="#ADB4D2"
            />
          </svg>
          &nbsp;Logout
        </a>
      </div>
    </>
  );
}
