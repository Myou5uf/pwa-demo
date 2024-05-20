import React from 'react';

const SunIcon = ({variant, className}) => {

  if (variant === 'dark') {
    return (
      <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_360_8349)">
          <path d="M5.33398 8.00001C5.33398 8.70725 5.61494 9.38553 6.11503 9.88563C6.61513 10.3857 7.29341 10.6667 8.00065 10.6667C8.7079 10.6667 9.38617 10.3857 9.88627 9.88563C10.3864 9.38553 10.6673 8.70725 10.6673 8.00001C10.6673 7.29277 10.3864 6.61449 9.88627 6.11439C9.38617 5.61429 8.7079 5.33334 8.00065 5.33334C7.29341 5.33334 6.61513 5.61429 6.11503 6.11439C5.61494 6.61449 5.33398 7.29277 5.33398 8.00001Z" fill="#101214" stroke="#101214" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 8H2.66667M8 2V2.66667M13.3333 8H14M8 13.3333V14M3.73333 3.73333L4.2 4.2M12.2667 3.73333L11.8 4.2M11.8 11.8L12.2667 12.2667M4.2 11.8L3.73333 12.2667" stroke="#101214" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_360_8349">
            <rect width="16" height="16" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    )
  }

  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_42_4753)">
        <path d="M5.33301 8.00016C5.33301 8.70741 5.61396 9.38568 6.11406 9.88578C6.61415 10.3859 7.29243 10.6668 7.99967 10.6668C8.70692 10.6668 9.3852 10.3859 9.88529 9.88578C10.3854 9.38568 10.6663 8.70741 10.6663 8.00016C10.6663 7.29292 10.3854 6.61464 9.88529 6.11454C9.3852 5.61445 8.70692 5.3335 7.99967 5.3335C7.29243 5.3335 6.61415 5.61445 6.11406 6.11454C5.61396 6.61464 5.33301 7.29292 5.33301 8.00016Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 8H2.66667M8 2V2.66667M13.3333 8H14M8 13.3333V14M3.73333 3.73333L4.2 4.2M12.2667 3.73333L11.8 4.2M11.8 11.8L12.2667 12.2667M4.2 11.8L3.73333 12.2667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_42_4753">
          <rect width="16" height="16" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default SunIcon;
