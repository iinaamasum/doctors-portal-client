import React from 'react';

const Button = ({ children }) => {
  return (
    <button className="btn btn-primary bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] outline-none border-0 shadow text-white px-5">
      {children}
    </button>
  );
};

export default Button;
