
// Ejercicio 5

export type Producto = {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
  };
  
  export const productos: Producto[] = [
    { id: 1, nombre: 'Camisa', precio: 25, stock: 10 },
    { id: 2, nombre: 'Pantalón', precio: 40, stock: 0 },
    { id: 3, nombre: 'Zapatos', precio: 60, stock: 5 },
  ];
  
  const nombres = productos.map(p => p.nombre);
  const enStock = productos.filter(p => p.stock > 0);
  console.log('Nombres:', nombres);
  console.log('En stock:', enStock);
  
  // Ejercicio 6
  productos.sort((a, b) => a.precio - b.precio);
  console.log('Ordenados por precio:', productos);
  
  productos.push({ id: 4, nombre: 'Gorra', precio: 15, stock: 20 });
  console.log('Tras push:', productos);
  
  productos.pop();
  console.log('Tras pop:', productos);
  