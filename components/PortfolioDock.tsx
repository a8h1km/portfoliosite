'use client';

import {
    IconBriefcase,
    IconCode,
    IconHome,
    IconMail,
    IconSparkles,
    IconFileCv
} from '@tabler/icons-react';
import { FloatingDock } from '@/components/ui/floating-dock';

const dockItems = [
    {
        title: 'Home',
        icon: <IconHome className="h-full w-full text-neutral-700 dark:text-neutral-300" />,
        href: '#home'
    },
    {
        title: 'Work',
        icon: <IconBriefcase className="h-full w-full text-neutral-700 dark:text-neutral-300" />,
        href: '#work'
    },
    {
        title: 'Projects',
        icon: <IconCode className="h-full w-full text-neutral-700 dark:text-neutral-300" />,
        href: '#projects'
    },
    {
        title: 'Skills',
        icon: <IconSparkles className="h-full w-full text-neutral-700 dark:text-neutral-300" />,
        href: '#skills'
    },
    {
        title: 'Contact',
        icon: <IconMail className="h-full w-full text-neutral-700 dark:text-neutral-300" />,
        href: '#contact'
    },
    {
        title: 'Resume',
        icon: <IconFileCv className="h-full w-full text-neutral-700 dark:text-neutral-300" />,
        href: '/Abhishek_KM_Resume_Apr_26.pdf'
    }
];

export default function PortfolioDock() {
    return (
        <FloatingDock
            items={dockItems}
            desktopClassName="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 border border-zinc-700/60 bg-zinc-100/90 backdrop-blur"
            mobileClassName="fixed bottom-6 right-6 z-50"
        />
    );
}
