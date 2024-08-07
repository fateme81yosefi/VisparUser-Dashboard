import React from 'react';
import ErrorIcon from "/src/components/Icon/error.svg";

interface MyComponentProps {
  myError: React.ReactElement | string | null;
  bgColor?: string; 
}

const Error: React.FC<MyComponentProps> = ({ myError, bgColor }) => {
  return (
    <>
      <div
        className="flex fixed justify-between items-center p-4 mb-4 text-sm text-white rounded-lg upperLayer"
        style={{ backgroundColor: bgColor || 'rgba(239, 68, 68, 1)' }}
        role="alert"
      >
        <div className='inline-flex'>
          <img src={ErrorIcon} alt="Error Icon" />
          <span className="font-medium ml-10">خطا! </span>
        </div>
        {myError}
      </div>
    </>
  );
};

export default Error;
