import React from 'react';
import Link from 'next/link';
import styles from './navIcon.module.css';

interface NavIconProps {
    href: string;
    children: React.ReactNode
}

const NavIcon: React.FC<NavIconProps> = ({ href, children }) => {
    return (
        <Link href={href} className={styles.navIcon}>
            {children}
        </Link>
    );
};

export default NavIcon;