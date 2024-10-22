import React from 'react'
import styles from "./sidebarWrap.module.css";

const SidebarWrap = ({ children}: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <div className={styles.container}>
        {children}
    </div>
  )
}

export default SidebarWrap