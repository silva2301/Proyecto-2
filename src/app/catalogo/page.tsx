"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/Catalogo.css";
import Producto from "./components/Producto";

export default function Catalogo() {
    const [productos, setProducto] = useState();

    useEffect(() => {
        obtenerDataProductos();
    }, []);

    const obtenerDataProductos = () => {
        const respuestaAxios = axios
            .get("http://localhost:8000/api/productos")
            .then((res) => {
                setProducto(res.data);
            })
            .catch(() => {
                console.log("Error al obtener los datos");
            });
    };

    return (
        <div className="container">
            <div className="containerProducts">
                {productos &&
                    productos.map((producto: any) => (
                        <Producto
                            key={producto.id}
                            categorias={producto.Categorias}
                            nombre={producto.Nombre}
                            descripcion={producto.Descripcion}
                            descuento={producto.Descuento}
                            precioDescuento={producto.PrecioDescuento}
                            imagen={producto.Imagen}
                            identificador={producto.Identificador}
                        />
                    ))}
            </div>
        </div>
    );
}
