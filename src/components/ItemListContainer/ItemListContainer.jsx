import { useEffect , useState }from "react";
import Item from "./Item";
import "./ItemlistStyles.css";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import CatchProductsOfMock from '../../products/mockService';



const ItemListContainer = () => {
  // GUARDAR PRODUCTOS
  const [products, setProduct] = useState([]);
  // MOSTRAR PRODUCTOS
  console.log("%c Intentando renderizar ", "background-color: blue");
  useEffect(() => {
    // FUNTION
      CatchProductsOfMock()
      .then( response => setProduct(response))
      .catch((e) => console.log(e));
    }, []);



  return (
    <MDBContainer fluid className=" container my-5 text-center ">
      <h5 className="mt-4 mb-5">
        <strong>FOTOS</strong>
      </h5>
      <MDBRow>

        {products.map( element => {
        return (
          <Item
          key={element.id}
          imgUrl={element.imgUrl}
          text={element.text}
          title={element.title}
        ></Item>

        )}
      )}
      </MDBRow>
    </MDBContainer>
  );
};

export default ItemListContainer;