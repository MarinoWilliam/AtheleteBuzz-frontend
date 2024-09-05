
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage, selectIsCollapse } from '../../store/page/page.selector';
import { PAGE_VALUES_TYPE_CLASSES } from '../../store/page/page.types';
import { setPageValue } from '../../store/page/page.action';
import './pageNavigator.css';
import NavElement from '../navElement/navElement';


const PageNavigator: React.FC = () => {
    const dispatch = useDispatch();
    const selectedNav = useSelector(selectPage);
  const isCollapsed = useSelector(selectIsCollapse);


    const handleNavClick = (navType: PAGE_VALUES_TYPE_CLASSES) => {
        dispatch(setPageValue(navType));
    };

    return (
        <nav className={isCollapsed ? "strapSideNavbarContainer" :"Thick_Container"}>
            <ul className={isCollapsed ? "Thin_elements" :"Thick_elements"} >
                <li>
                    <NavElement
                        title={isCollapsed ? "" : "Home"}
                        type={PAGE_VALUES_TYPE_CLASSES.home}
                        selected={selectedNav === PAGE_VALUES_TYPE_CLASSES.home}
                        onClick={() => handleNavClick(PAGE_VALUES_TYPE_CLASSES.home)}
                    />
                </li>
                <li>
                    <NavElement
                        title={isCollapsed ? "" : "News" } 
                        type={PAGE_VALUES_TYPE_CLASSES.news}
                        url="/news"
                        selected={selectedNav === PAGE_VALUES_TYPE_CLASSES.news}
                        onClick={() => handleNavClick(PAGE_VALUES_TYPE_CLASSES.news)}
                    />
                </li>
                <li>
                    <NavElement
        
                        title={isCollapsed ? "" : "Fantasy" } 
                        type={PAGE_VALUES_TYPE_CLASSES.fantasy}
                        url="/fantasy"
                        selected={selectedNav === PAGE_VALUES_TYPE_CLASSES.fantasy}
                        onClick={() => handleNavClick(PAGE_VALUES_TYPE_CLASSES.fantasy)}
                    />
                </li>
            </ul>
        </nav>
    );
};

export default PageNavigator;
