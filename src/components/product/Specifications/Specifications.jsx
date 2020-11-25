import React from 'react';

import { Specification } from './Specification';

const Specifications = ({ specifications }) => (
  <div>
    <h2 className="mb-8 font-replica-pro text-4xl text-center">Specifications</h2>

    <section>
      {specifications.map(({ id, primary, items }) => (
        <Specification key={id} title={primary.specification_category_name.text} items={items} />
      ))}
    </section>
  </div>
);

export { Specifications };
