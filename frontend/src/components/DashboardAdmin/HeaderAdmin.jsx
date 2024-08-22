import React from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';

function HeaderAdmin({ OpenSidebar }) {
  return (
    <header className='headerDashboard'>
      <div className='menu-icon'>
        <button className='icon-button' onClick={OpenSidebar}>
          <BsJustify className='icon' />
        </button>
      </div>
      <div className='header-left'>
        <button className='icon-button'>
          <BsSearch className='icon' />
        </button>
      </div>
      <div className='header-right'>
        <button className='icon-button'>
          <BsFillBellFill className='icon' />
        </button>
        <button className='icon-button'>
          <BsFillEnvelopeFill className='icon' />
        </button>
        <button className='icon-button'>
          <BsPersonCircle className='icon' />
        </button>
      </div>
    </header>
  );
}
export default HeaderAdmin;