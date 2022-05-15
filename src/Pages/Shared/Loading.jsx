import React from 'react';
import loading from '../../assets/icons/loading.gif';

const Loading = () => {
  return (
    <div>
      <img
        className="flex justify-center items-center h-[100vh]"
        src={loading}
        alt=""
      />
    </div>
  );
};

export default Loading;
