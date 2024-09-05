import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsCollapse } from '../../store/page/page.selector';
import { toggleisCollapsed } from '../../store/page/page.action';

import PageNavigator from '../pageNavigator/pageNavigator';
import ProfileNavItem from '../profileNavItem/profileNavItem';
import './sideNavbar.css';

const SideNavbar = () => {
    const dispatch = useDispatch();
    const isCollapsed = useSelector(selectIsCollapse);


    const toggleSidebar = () => {
        dispatch(toggleisCollapsed(!isCollapsed));
    };

    return (
        <div className={`sideNavbarContainer`}>
            {isCollapsed ? (
                <>
                    <button className="collapseButton" onClick={toggleSidebar}>
                        <span className='arrow' >&#129171;</span>
                    </button>
                </>
            ) : (
                <>
                    <button className="collapseButton" onClick={toggleSidebar}>
                        <span className='arrow' >&#129168;</span>
                    </button>
                </>
            )}
            <ProfileNavItem/>
            <PageNavigator/>
        </div>
    );
};

export default SideNavbar;
