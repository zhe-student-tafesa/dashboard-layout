import React from 'react';
import styles from './sidebarNav.module.css';
import SidebarWrap from '../sidebarWrap/SidebarWrap';
import NavIcon from '../navIcon/NavIcon';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from '../subBarData';
import SubMenu from '../subMenu/SubMenu';

interface SidebarNavProps {
    sidebar: boolean;
    showSidebar: () => void
}

const SidebarNav: React.FC<SidebarNavProps> = ({ sidebar, showSidebar }) => {
    return (
        <nav className={`${styles.sidebarNav} ${sidebar ? styles.active : ''}`}>
            <SidebarWrap>
                <NavIcon href='#'>
                    <AiIcons.AiOutlineClose onClick={showSidebar} />
                </NavIcon>
                {
                    SidebarData.map((item, index) => {
                        return <SubMenu item={item} key={index} />;
                    })
                }
            </SidebarWrap>
        </nav>
    );
};

export default SidebarNav;