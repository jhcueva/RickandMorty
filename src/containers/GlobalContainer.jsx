import React from "react";

function GlobalContainer ({ children }) {
    return (
        <section className="dark:bg-slate-900 min-h-screen transition duration-300">
            {children}
        </section>
    )
}

export { GlobalContainer }