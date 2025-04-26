import { Usuario } from '../models/usuario';

// Ejercicio 3

export class UsuarioClass implements Usuario {
  constructor(
    public id: number,
    public nombre: string,
    public edad: number,
    public email: string,
    public activo: boolean
  ) {}

  toggleActivo(): void {
    this.activo = !this.activo;
  }
}

const u1 = new UsuarioClass(1, 'Ana', 28, 'ana@mail.com', true);
const u2 = new UsuarioClass(2, 'Luis', 35, 'luis@mail.com', false);
console.log(u1, u2);
u1.toggleActivo();
console.log('Después toggle:', u1);
