import ButtonsCard from "./ButtonsCard";
import POLAROID from "../../assets/img/sections-cards/pola.png";
import SQUAREPRINT from '../../assets/img/sections-cards/square.png'


//cargar lista de productos 

const ButtonsContainer = () => {

  return (
    <div className="container mt-4 ">
      <div className="row mt-2 g-4 justify-content-center">

      { /*  hacer el map para mostrar como return el card  */}
        <ButtonsCard text={"POLAROID"} img={pola.png} />

        <ButtonsCard text={"SQUAREPRINT"} img={square.png} />

      </div>
    </div>
  );
};

export default ButtonsContainer;