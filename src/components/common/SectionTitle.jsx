import React from 'react';

const SectionTitle = ({ children }) => {
  return (
    <h2 className="font-mono pt-2 pb-6 lg:text-2xl sm:text-xl font-bold">
      {children}
    </h2>
  );
};

export default SectionTitle;
