// Este es el componente principal de la aplicación
// Aquí se importan los componentes que se desean renderizar
// y se definen las rutas de la aplicación
const Hello = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}
function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
}



const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Avatar/>
      <Hello />
    </div>
  )
}

export default App