import MiBoton from "./components/MiBoton"
import UserMensaje from "./components/UserMensaje"
import ListaFrutas from "./components/ListaFrutas"
import BotonState from "./components/BotonState"
const App = () => {
  const titulo = "Mi primer proyecto con React.js"
  const subtitulo = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  const imagen = "https://picsum.photos/600/400"
  const logo = "./src/assets/react.svg"
  const clases = {
    titulo: "text-info text-center",
    subtitulo: "text-info text-center",
    imagenCenter: "rounded d-block mx-auto"
  };

  const user = false

  const frutas1 = ["🍉", "🍌", "🍎"];
  const frutas2 = ["🍐", "🍑", "🍓"];

  return (
    <div className="container">
      <h1 className={clases.titulo}>{titulo}</h1>
      <p className={clases.subtitulo}>{subtitulo}</p>
     
      <img className={clases.imagenCenter} src={logo} />
      <hr />
      <BotonState />
      <hr />
      <img className={clases.imagenCenter} src={imagen} alt={`imagen-${titulo}`} />
      <hr />
      {/*user ? <MensajeOnline /> : <MensajeOffline />*/}
      <UserMensaje usuario={user} />

      <hr />

      <MiBoton text="Boton 1" className="btn btn-light m-3"  />
      <MiBoton text="Boton 2" className="btn btn-danger m-3" />
      <MiBoton text="Boton 3" className="btn btn-warning m-3" />
      <MiBoton text="Boton 4" className="btn btn-success m-3" />

      <hr />
      <ListaFrutas frutas={frutas1}/>
      <ListaFrutas frutas={frutas2}/>
    </div>
  )
}

export default App 