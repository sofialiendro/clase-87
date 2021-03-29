import "./App.css";
import Tarjeta from "./components/Tarjeta";
import imagenAuto from "./img/Venta_Autos-julio-portada.jpg";  //para q sea una imagen descargada

const App = () => {
  const nombreDeLaProfe = "Malena";

  return (
    <div>
      <Tarjeta
        titulo="Monopatin"
        precio="2000"
        imagen="https://i.blogs.es/98cdc8/voge-500r-1/450_1000.jpg"
      />
      <Tarjeta
        titulo="Moto"
        precio="6000"
        imagen={imagenAuto}
      />
      <Tarjeta
        titulo="Bici"
        precio="1000"
        imagen="https://i.blogs.es/98cdc8/voge-500r-1/450_1000.jpg"
      />
      <Tarjeta
        titulo="Triciclo"
        precio="20880"
        imagen="https://i.blogs.es/98cdc8/voge-500r-1/450_1000.jpg"
      />
      <Tarjeta
        titulo="Auto"
        precio="10000"
        imagen="https://i.blogs.es/98cdc8/voge-500r-1/450_1000.jpg"
      />

      {/* Hola, chicas
    {/* 
    Puedo pasar cualquier dato como parametro de un componente: (props)
    Pero lo ideal es enviar siempre los mismos
    <Tarjeta 
      nombre="Ana" 
      edad={22}
      booleano={true} 
      funcion={() => console.log("hola")} 
      objeto={ {persona: "Hola", edad: 23 } }
      array={[1, 2, 3, 4, 5]}
      comillasMagicas={`Hola`}
      /> */}
      {/* <Tarjeta nombre="Maca" edad="25" nombreProfe={nombreDeLaProfe}/>
    <Tarjeta nombre="Rosy" edad="29"/>
    <Tarjeta nombre="Sol" edad="21" />
    <Tarjeta  /> */}
    </div>
  );
};

export default App;
