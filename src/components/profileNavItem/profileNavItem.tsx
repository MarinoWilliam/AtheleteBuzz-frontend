import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsCollapse } from '../../store/page/page.selector';
import './profileNavItem.css'

const ProfileNavItem = () => {
  const isCollapsed = useSelector(selectIsCollapse);

  return (
    <div className="profileNavContainer">

      <Link to="/" className='text-sm mt-2 flex'>
        {isCollapsed ? ('') : (<span className='pr-4'> Marino William </span>)}
        <img src="/myPic.jpg" alt="Profile" className="w-8 h-8 rounded-full object-cover " />
      </Link>
    </div>
  );
};

export default ProfileNavItem;
