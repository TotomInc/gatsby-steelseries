/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import React from 'react';

import './src/styles/tailwind.css';
import './src/styles/global.css';
import './src/styles/fonts.css';

import { Navbar } from './src/components/Navbar';

export const wrapPageElement = ({ element }) => (
  <div>
    <Navbar />

    {element}
  </div>
);
