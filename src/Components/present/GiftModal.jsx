import React, { useState } from "react";
import "./GiftModal.css";

export default function GiftModal() {
    const [open, setOpen] = useState(false);

    return (
        <>
        <div className="gift-modal-container">
            <div className="gift-block" onClick={() => setOpen(true)}>
                🎁
                <span className="gift-text">Открыть подарок</span>
            </div>
            {open && (
                <div className="modal-overlay" onClick={() => setOpen(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <h2 className="love-text">Я люблю тебя!</h2>
                    </div>
                </div>
            )}
        </div>
        </>
    );
}