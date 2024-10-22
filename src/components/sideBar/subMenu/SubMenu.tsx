'use client'
import React, { useState } from 'react'
import styles from './subMenu.module.css'
import { SidebarItem } from '../subBarData';


  
  interface SubMenuProps {
    item: SidebarItem;
  }

  

const SubMenu: React.FC<SubMenuProps> = ({ item }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);
    return (
        <div>SubMenu</div>
    )
}

export default SubMenu