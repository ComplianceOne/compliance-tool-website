"use client";

import { useEffect } from "react";

export default function PitchDeckPage() {
    useEffect(() => {
        // Disable right-click context menu
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
        };

        // Disable keyboard shortcuts for saving/printing
        const handleKeyDown = (e: KeyboardEvent) => {
            if (
                (e.ctrlKey || e.metaKey) &&
                (e.key === "s" || e.key === "p" || e.key === "S" || e.key === "P")
            ) {
                e.preventDefault();
            }
        };

        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
                backgroundColor: "#1a1a1a",
            }}
        >
            <iframe
                src="/assets/ComplianceONE_PitchDeck_HL.pdf#toolbar=0&navpanes=0&scrollbar=1"
                style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                }}
                title="ComplianceONE Pitch Deck"
            />
        </div>
    );
}
