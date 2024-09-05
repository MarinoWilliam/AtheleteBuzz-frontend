import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsCollapse } from '../../store/page/page.selector';

import { PAGE_VALUES_TYPE_CLASSES } from '../../store/page/page.types';

import { ReactComponent as HomeIcon } from '../../assets/icons/home-icon.svg'
import { ReactComponent as NewsIcon } from '../../assets/icons/news-icon.svg';
import { ReactComponent as FantasyIcon } from '../../assets/icons/fantasy-icon.svg';

import './navElement.css'
import React from 'react';


export type ProfileNavItemProps = {
    title: string;
    type: PAGE_VALUES_TYPE_CLASSES;
    selected: boolean;
    url ?: string;
    onClick: ()=>void;
}

const iconMap = {
    [PAGE_VALUES_TYPE_CLASSES.home]: <HomeIcon />,
    [PAGE_VALUES_TYPE_CLASSES.news]: <NewsIcon />,
    [PAGE_VALUES_TYPE_CLASSES.fantasy]: <FantasyIcon />,
};

const NavElement: FC<ProfileNavItemProps> = ({ title, type, url = '/', selected , onClick}) => {
    const isCollapsed = useSelector(selectIsCollapse)
    return (
        <div className={`navElementContainer ${selected ? 'selectedClass' : ''}`} onClick={onClick}>
            <Link to={url} className='navLinkContainer'>
            {React.cloneElement(iconMap[type], {
                    className: `icon ${isCollapsed ? 'centered' : ''}`,
                })}
                {!isCollapsed && 
                 <span className="navTitle">{title}</span>
                 }
            </Link>
        </div>
    );
};

export default NavElement;


