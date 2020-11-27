import React from 'react';

import faqStyles from './faq.module.css';

const FAQ = ({ faq }) => {
  return (
    <div>
      <h2 className="mb-8 font-replica-pro text-4xl text-center">{faq.title.text}</h2>

      <div className="flex flex-col lg:flex-row lg:flex-wrap">
        {faq.faq.map((qa) => (
          <div key={faq.title.text} className={`${faqStyles.faqBlock} w-full p-4 mb-4 bg-white`}>
            <h3 className="mb-4 font-medium text-2xl">{qa.faq_title.text}</h3>

            <div dangerouslySetInnerHTML={{ __html: qa.faq_answer.html }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { FAQ };
