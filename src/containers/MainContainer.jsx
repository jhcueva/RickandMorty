import React from "react";

function MainContainer ({ children}) {
    return (
        <section className="dark:bg-slate-900 transition duration-300">
            {children}
        </section>
    )
}

export { MainContainer }