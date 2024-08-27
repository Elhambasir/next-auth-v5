// SuccessMessage.js
import React from 'react';

const SuccessMessage = ({ message }:{message:any}) => {
  if(message==null) return null;
  return (
    <div
      className="border-l-4 p-4 mb-4 mt-4 bg-green-100 border-green-400 text-green-700"
      role="alert"
    >
      <div className="flex items-center">
        <div className="pr-4 text-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <p className="text-xs">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;