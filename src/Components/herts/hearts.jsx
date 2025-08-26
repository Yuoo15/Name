import './hearts.css'
import React from "react";

const hearts = Array.from({ length: 15 });

export default function BackgroundHearts() {
    return (
        <div className="background-hearts">
            {hearts.map((_, i) => (
                <span key={i} className={`heart heart${i % 5}`}>💗</span>
            ))}
        </div>
    );
}