import React from 'react';
import { Link } from 'gatsby';

import Crosshair from '../images/crosshair.svg';
import SteelSeries from '../images/steelseries.svg';

const Navbar = () => (
  <nav className="flex items-center h-12 w-full px-8 bg-black text-white">
    <Link to="/" className="flex items-center no-underline text-white">
      <Crosshair className="w-6 mr-2 fill-current" />
      <SteelSeries className="h-6 fill-current" />
    </Link>
  </nav>
);

export { Navbar };
