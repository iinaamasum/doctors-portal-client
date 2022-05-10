import React from 'react';

const HeroCard = ({ info }) => {
  const { image, bg, title, subTitle } = info;
  return (
    <div
      style={{ minHeight: '150px' }}
      className={`shadow-xl flex justify-between items-center ${bg} rounded-lg
     px-6 text-white`}
    >
      <div>
        <img src={image} alt="" />
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-gray-200">{subTitle}</p>
      </div>
    </div>
  );
};

export default HeroCard;
