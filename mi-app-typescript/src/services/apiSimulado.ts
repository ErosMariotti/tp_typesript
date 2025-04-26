// Ejercicio 9
export function obtenerDatos(): Promise<{ dato: string }[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          { dato: 'A' },
          { dato: 'B' },
          { dato: 'C' },
        ]);
      }, 3000);
    });
  }
  
  (async () => {
    const datos = await obtenerDatos();
    console.log('Datos simulados:', datos);
  })();
  