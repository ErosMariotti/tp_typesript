import { UsuarioClass } from './UsuarioClass';

// Ejercicio 4
export class AdminUsuario extends UsuarioClass {
  constructor(
    id: number,
    nombre: string,
    edad: number,
    email: string,
    activo: boolean,
    public permisos: string[]
  ) {
    super(id, nombre, edad, email, activo);
  }
}

const admin = new AdminUsuario(0, 'Admin', 30, 'admin@mail.com', true, ['crear', 'editar']);
console.log('Admin:', admin);
