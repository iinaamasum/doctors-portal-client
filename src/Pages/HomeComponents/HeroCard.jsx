import React from 'react';

const HeroCard = ({ info }) => {
  const { image, bg, title, subTitle } = info;
  return (
    <div
      class={`shadow-xl flex justify-between items-center ${bg} rounded-lg
     px-4 text-white`}
    >
      <div>
        <img src={image} alt="Shoes" />
      </div>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <p className="text-gray-200">{subTitle}</p>
      </div>
    </div>
  );
};

export default HeroCard;
