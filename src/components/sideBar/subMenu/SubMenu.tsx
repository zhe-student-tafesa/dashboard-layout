'use client'
import React, { useState } from 'react'
import styles from './subMenu.module.css'
import { SidebarItem } from '../subBarData';
import Link from 'next/link';

interface SubMenuProps {
  item: SidebarItem;
}

const SubMenu: React.FC<SubMenuProps> = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <Link href={"#"} passHref>
        <div className={styles.sidebarLink} onClick={item.subNav ? showSubnav : undefined}>
          <div>
            {item.icon && <item.icon />} {/* make sure icon exist */}
            <span className={styles.sidebarLabel}>{item.title}</span>
          </div>
          <div>
            {item.subNav && subnav
              ? item.iconOpened && <item.iconOpened />
              : item.subNav
                ? item.iconClosed && <item.iconClosed />
                : null}
          </div>
        </div>
      </Link>
      {subnav &&
        item.subNav?.map((subItem, index) => (
          <Link href={subItem.path} key={index} passHref>
            <div className={styles.dropdownLink}>
              {subItem.icon && <subItem.icon />} {/* make sure icon exist */}
              <span className={styles.sidebarLabel}>{subItem.title}</span>
            </div>
          </Link>
        ))}
    </>
  );
}

export default SubMenu