import { Usuario } from '../models/usuario';

// Ejercicio 2
export const usuarios: Usuario[] = [
  { id: 1, nombre: 'Ana', edad: 28, email: 'ana@mail.com', activo: true },
  { id: 2, nombre: 'Luis', edad: 35, email: 'luis@mail.com', activo: false },
  { id: 3, nombre: 'María', edad: 22, email: 'maria@mail.com', activo: true },
];

const usuariosActivos = usuarios.filter(u => u.activo);
console.log('Activos:', usuariosActivos);
