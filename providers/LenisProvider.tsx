'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function LenisProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            syncTouch: true
        });

        let animationFrameId = 0;

        const raf = (time: number) => {
            lenis.raf(time);
            animationFrameId = requestAnimationFrame(raf);
        };

        const handleResize = () => {
            lenis.resize();
        };

        const resizeObserver = new ResizeObserver(() => {
            lenis.resize();
        });

        resizeObserver.observe(document.body);

        const handleAnchorClick = (event: MouseEvent) => {
            if (!(event.target instanceof Element)) return;

            const anchor = event.target.closest('a[href^="#"]') as HTMLAnchorElement | null;
            if (!anchor) return;

            const hash = anchor.getAttribute('href');
            if (!hash || hash === '#') return;

            const target = document.querySelector<HTMLElement>(hash);
            if (!target) return;

            event.preventDefault();
            lenis.scrollTo(target);
        };

        animationFrameId = requestAnimationFrame(raf);
        document.addEventListener('click', handleAnchorClick);
        window.addEventListener('resize', handleResize);
        window.addEventListener('orientationchange', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            document.removeEventListener('click', handleAnchorClick);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('orientationchange', handleResize);
            resizeObserver.disconnect();
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
