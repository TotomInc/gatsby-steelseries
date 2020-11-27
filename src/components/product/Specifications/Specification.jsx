import React, { useState } from 'react';

import SpecificationStyles from './Specification.module.css';

const Specification = ({ title, items }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="mb-6">
      <button
        type="button"
        className="block w-full py-4 px-8 rounded-sm text-left bg-gray-200 text-2xl transition-all duration-150 text-gray-700 hover:bg-gray-700 hover:text-gray-200 focus:ring-gray-300 focus:outline-none focus:ring"
        onClick={() => setIsActive(!isActive)}
      >
        {title}
      </button>

      <div
        className={`max-h-0 overflow-hidden transition-all duration-300 ${
          isActive ? SpecificationStyles.activeSpecification : ''
        }`}
      >
        {items.map(({ specification_title, specification_description }) => (
          <div key={specification_title.text} className="lg:flex lg:items-center py-6 mx-12 border-b border-gray-200">
            <p className="lg:w-56 mb-2 lg:mb-0 text-base leading-6">{specification_title.text}</p>

            <div className="text-base leading-6" dangerouslySetInnerHTML={{ __html: specification_description.html }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { Specification };
