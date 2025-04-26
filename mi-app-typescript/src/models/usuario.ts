// interfaz Usuario
export interface Usuario {
    id: number;
    nombre: string;
    edad: number;
    email: string;
    activo: boolean;
  }
  
  // Type equivalente
  export type UsuarioType = {
    id: number;
    nombre: string;
    edad: number;
    email: string;
    activo: boolean;
  };
  
  /*
    Diferencia:
    - interface: se puede extender e implementar por clases.
    - type: definición de alias, puede unir tipos (uniones, intersecciones).
  */
  