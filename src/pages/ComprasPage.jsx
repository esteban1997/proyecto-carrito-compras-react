import React, { useContext } from 'react'
import { Card } from '../components/Card'
import { ProductosContext } from '../context/ProductosContext'
import { CarritoContext } from '../context/CarritoContext'

export const ComprasPage = () => {
 
  const {productos} = useContext(ProductosContext)

  const {listaCompras,agregarCompra,aumentarCantidad,disminuirCantidad,eliminarCompra} = useContext(CarritoContext)

  const handleAgregar = (compra) =>{
    console.log('agregar')
    agregarCompra(compra)
  }
  const handleQuitar = (id) =>{
    eliminarCompra(id)
  }
  const handleAumentar = (id) =>{

  }
  const handleDisminuir = (id) =>{

  }

  return (
    <><h1/>Compras:
      <hr/>
      {productos.map(producto=>(
          <Card key={producto.id}
          imagen={producto.image} titulo={producto.title} descripcion={producto.description} precio={producto.price}
          handleAgregar={()=>handleAgregar(producto)} handleQuitar={()=>handleQuitar(producto.id)}
          ></Card>
        ))}
    </>
  )
}