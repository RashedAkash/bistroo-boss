import React from 'react';

const SectionTitle = ({subHeading,heading}) => {
  return (
    <div>
      <p className=' mb-4 text-[#D99904] text-[20px]'>{subHeading }</p>
      <h2 className=' mb-12 py-2 text-3xl border-y-4 w-1/3 mx-auto'>{heading }</h2>
    </div>
  );
};

export default SectionTitle;