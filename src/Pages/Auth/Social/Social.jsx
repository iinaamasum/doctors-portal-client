import React from 'react';
import { BsFacebook, BsGithub, BsGoogle } from 'react-icons/bs';

const Social = () => {
  return (
    <div className="text-center">
      <button class="mr-2 hover:text-slate-500">
        <BsGoogle size={30} />
      </button>
      <button class="mr-2 hover:text-slate-500">
        <BsFacebook size={30} />
      </button>
      <button class=" hover:text-slate-500">
        <BsGithub size={30} />
      </button>
    </div>
  );
};

export default Social;
