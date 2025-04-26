import { fetchUsuariosAPI } from './services/apiReal';
import './data/usuarios'; 
import './data/productos';              
import './Classes/UsuarioClass';    
import './Classes/AdminUsuario';  
import './models/usuario';
import './utils/genericos';
import './services/apiSimulado';
import './services/apiReal';

const btn = document.getElementById('btn-cargar') as HTMLButtonElement;
const ul = document.getElementById('lista-usuarios') as HTMLUListElement;

btn.addEventListener('click', async () => {
  const usuarios: any[] = await fetchUsuariosAPI();
  ul.innerHTML = usuarios
    .map(u => `<li>${u.name} – ${u.email}</li>`)
    .join('');
});
