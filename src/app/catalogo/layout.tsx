"use client";

import BotonCarrito from "./components/BotonCarrito";
import React, { useContext } from "react";

// Crear un contexto
export const numProductsContext = React.createContext();

export default function ProductosLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [numProducts, setNumProductsContext] = React.useState("");
    return (
        <>
            <numProductsContext.Provider
                value={[numProducts, setNumProductsContext]}
            >
                <BotonCarrito />
                {children}
            </numProductsContext.Provider>
        </>
    );
}
