/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import React from 'react';

import './src/styles/tailwind.css';
import './src/styles/global.css';
import './src/styles/fonts.css';

import { Navbar } from './src/components/Navbar';

export const wrapPageElement = ({ element }) => (
  <div className="min-h-screen w-full">
    <Navbar />

    {element}
  </div>
);
