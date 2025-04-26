
// Ejercicio 7
export function getRandomItem<T>(arr: T[]): T {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
  }
  
  // Pruebas
  console.log(getRandomItem([1, 2, 3, 4]));
  console.log(getRandomItem(['a', 'b', 'c']));
  console.log(getRandomItem([{ id: 1 }, { id: 2 }]));
  
  // Ejercicio 8
  export interface Caja<T> {
    contenido: T;
  }
  
  export class CajaClass<T> implements Caja<T> {
    constructor(public contenido: T) {}
  }
  
  // Pruebas
  const cajaNum = new CajaClass<number>(123);
  const cajaStr = new CajaClass<string>('hola');
  console.log(cajaNum, cajaStr);
  