const products =[{
    "id": 1,
    "imgUrl": "https://awesomefotos.com.ar/wp-content/uploads/2018/04/MINI-POLAROID.jpg",
    "text": "Polaroid 9 11",
    "price": 50
  }, {
    "id": 2,
    "imgUrl": "https://awesomefotos.com.ar/wp-content/uploads/2018/04/MINI-POLAROID.jpg",
    "text": "Polaroid 7 9",
    "price": 45
  }, {
    "id": 3,
    "imgUrl": "https://i0.wp.com/awesomefotos.com.ar/wp-content/uploads/2018/04/SQUARE-1.jpg?fit=595%2C842&ssl=1",
    "text": "Square Print 8",
    "price": 45
  }, {
    "id": 4,
    "imgUrl": "https://i0.wp.com/awesomefotos.com.ar/wp-content/uploads/2018/04/SQUARE-1.jpg?fit=595%2C842&ssl=1",
    "text": "Square Print 11",
    "price": 55
  }, 

  ]

const CatchProductsOfMock = ()=>{
    return (
        // promesa que intentara devolvernos los productos de la base de datos , en este caso el mock
       new Promise((resolve) => { 
        // el setTime emula la demora de la respuesta del Servidor
        setTimeout( () => {
            //el setTime tiene como return la respuesta con los productos del Json
            resolve(products)
            //mje que me avisa que la devolucion esta siendo exitosa
            console.log("%c Devolviendo los productos de forma exitosa ", "background-color: green");
        }, 2000 )
       })
        )
}

export default CatchProductsOfMock;