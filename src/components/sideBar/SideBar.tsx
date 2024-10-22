'use client'
import React, { useState } from 'react'
import styles from './sideBar.module.css'
import Nav from './nav/Nav'
import SidebarNav from './sidebarNav/SidebarNav'
import SidebarWrap from './sidebarWrap/SidebarWrap'

const SideBar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <div className={styles.container}>

            <Nav showSidebar={showSidebar}/>
            <SidebarNav sidebar={sidebar} showSidebar={showSidebar}>
            </SidebarNav>
        </div>
    )
}

export default SideBar