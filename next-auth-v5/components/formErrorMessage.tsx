// ErrorMessage.js
import React from 'react';

const ErrorMessage = ({ message }:{message:any}) => {
  if(message==null) return null;
  return (
    <div
      className="border-l-4 p-4 mb-4 mt-4 bg-red-100 border-red-400 text-red-700"
      role="alert"
    >
      <div className="flex items-center">
        <div className="pr-4 text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          {/* <p className="font-bold text-sm">ERROR</p> */}
          <p className="text-xs">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;