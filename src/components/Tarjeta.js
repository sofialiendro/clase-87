import "./Tarjeta.css";


// import Boton from './Boton'
// los componentes de React siempre reciben un tipo de parametro: un objeto
// A este objeto lo llamamos "props". 



// const Tarjeta = (props) => {

  
//     // console.log('props.nombre', props.nombre)
  
//     // EJERCITACION:
//     // Usando los componentes Tarjeta de la clase 86, crear Taretas que representen
//     // productos. Cada una de ellas tiene que recibir por props un "precio" y mostrarlo.
//     // No son necesarias las imagenes 
  
//     return (
//       // <article className="tarjeta">
//       //   <h2>Hola, me llamo {props.nombre} y tengo {props.edad} años</h2>
        
//       //   {/* props drilling: pasar props de un componente a otro  */}
//       //   <Boton mensaje={props.nombre === "Sol" ? "Chau" : "Hola"} nombre={props.nombre}/>
//       // </article>
  
     
//     )
//   }



// EJERCICIO 

// const {titulo, precio, imagen} = props  // esto es desestructurar props

    // console.log(props.titulo) // para acceder a la info de cada titulo de prop, pero si yya la desestructuramos, no necesitamos poner "props." antes
// const Tarjeta = (props) => {  // manera común de hacerlo

// Parametros por defecto, ej titulo, por si el parametro no está definido en el componente
const Tarjeta = ({titulo = "No disponible", precio, imagen}) => {   // manera nueva de hacerlo: desestructuramos props aca mismo - Tarjeta recibe un solo parametro desestructurado

    
  
    return (
  
      <article className="tarjeta">
          <h2>{titulo}</h2>
          <h3>Precio: {precio}</h3>
          <img src={imagen}/>
      </article>
    )
}
  
  export default Tarjeta;
  
  