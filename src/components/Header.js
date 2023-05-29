import React from 'react';
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="py-2">
      <div className="container mx-auto">
      <div className="flex justify-between items-center min-h-[7vh] lg:min-h-[7vh]">
  <a href="#">
    <img src={Logo} alt="Logo" style={{ height: '2rem' }} /> {/* Adjust the height using inline styles */}
  </a>
  {/* <button className='btn btn-sm cursor-pointer'>More about me</button> */}
</div>

      </div>
    </header>
  );
};

export default Header;
