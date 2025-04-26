export async function fetchUsuariosAPI() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await resp.json();
    console.log('Usuarios API:', data);
    // ¡te faltaba esto!
    return data;
  }