// FaIcons: Font Awesome
// AiIcons: Ant Design Icons
// IoIcons: Ionicons
// RiIcons: Remix Icons

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

// define type
interface SubNavItem {
    title: string;
    path: string;
    icon: React.ComponentType;
    cName?: string;
}

interface SidebarItem {
    title: string;
    path: string;
    icon: React.ComponentType;
    iconClosed?: React.ComponentType;
    iconOpened?: React.ComponentType;
    subNav?: SubNavItem[];
}

export const SidebarData: SidebarItem[] = [
    {
        title: 'Overview',
        path: '/overview',
        icon: AiIcons.AiFillHome,  // Using component references
        iconClosed: RiIcons.RiArrowDownSFill,  // Using component references
        iconOpened: RiIcons.RiArrowUpSFill,    // Using component references
        subNav: [
            {
                title: 'Users',
                path: '/overview/users',
                icon: IoIcons.IoIosPaper,  // Using component references
            },
            {
                title: 'Revenue',
                path: '/overview/revenue',
                icon: IoIcons.IoIosPaper,  // Using component references
            },
        ],
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: IoIcons.IoIosPaper,  // Using component references
        iconClosed: RiIcons.RiArrowDownSFill,  // Using component references
        iconOpened: RiIcons.RiArrowUpSFill,    // Using component references
        subNav: [
            {
                title: 'Reports',
                path: '/reports/reports1',
                icon: IoIcons.IoIosPaper,  // Using component references
                cName: 'sub-nav',
            },
            {
                title: 'Reports 2',
                path: '/reports/reports2',
                icon: IoIcons.IoIosPaper,  // Using component references
                cName: 'sub-nav',
            },
            {
                title: 'Reports 3',
                path: '/reports/reports3',
                icon: IoIcons.IoIosPaper,  // Using component references
            },
        ],
    },
    {
        title: 'Products',
        path: '/products',
        icon: FaIcons.FaCartPlus,  // Using component references
    },
    {
        title: 'Team',
        path: '/team',
        icon: IoIcons.IoMdPeople,  // Using component references
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: FaIcons.FaEnvelopeOpenText,  // Using component references
        iconClosed: RiIcons.RiArrowDownSFill,  // Using component references
        iconOpened: RiIcons.RiArrowUpSFill,    // Using component references
        subNav: [
            {
                title: 'Message 1',
                path: '/messages/message1',
                icon: IoIcons.IoIosPaper,  // Using component references
            },
            {
                title: 'Message 2',
                path: '/messages/message2',
                icon: IoIcons.IoIosPaper,  // Using component references
            },
        ],
    },
    {
        title: 'Support',
        path: '/support',
        icon: IoIcons.IoMdHelpCircle,  // Using component references
    },
];
