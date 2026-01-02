"use client";

import { gsap } from "gsap";
import { ScrollSmoother } from "@/plugins";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins
gsap.registerPlugin(ScrollSmoother);

export default function useScrollSmooth() {
    useGSAP(() => {
        if (typeof window !== "undefined") {
            // Check for smooth-wrapper and smooth-content elements
            const smoothWrapper = document.getElementById("smooth-wrapper");
            const smoothContent = document.getElementById("smooth-content");

            if (smoothWrapper && smoothContent) {
                gsap.config({
                    nullTargetWarn: false, // Disable warnings for null targets
                });

                // Create ScrollSmoother instance
                ScrollSmoother.create({
                    smooth: 0.6,
                    effects: true,
                    smoothTouch: 0.1,
                    normalizeScroll: false,
                    ignoreMobileResize: true,
                });
            }
        }
    }, []);
}
