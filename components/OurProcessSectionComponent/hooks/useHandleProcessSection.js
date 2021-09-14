import { useState } from "react";

//Components
import DevelopmentProcess from "../DevelopmentProcess";
import ManufacturingProcess from "../ManufacturingProcess";
import DeliveryProcess from "../DeliveryProcess";

/*este hook retorna el componente especifico, de acuerdo a la selecion en el navbar del apartado "Nuestro proceso".*/
const useHandleProcessSection = () => {
    const [whichProcess, setWhichProcess] = useState('development'); //Guarda en el estado cual proceso debe mostrar.
    const [distanceX, setDistanceX] = useState(0); //Valor al que debe posicionar el navbar para moviles en el apartado "Nuestro proceso".
    let processSection;

    /*Obtiene del evento onClick, el valor para actualizar whichProcess y asi mostrar
    el proceso seleccionado por el usuario, en el navbar del apartado "Nuestro proceso", en el landing page.*/
    const handleProcessSection = (e, section) => {
        e.preventDefault();
        setWhichProcess(section);

        //Desplaza automaticamente el navbar para moviles de apartado "Nuestro proceso", al seleccionar alguno de los iconos.
        switch (section) {
            case 'development':
                setDistanceX(0)
                break;
            case 'manufacturing':
                setDistanceX(-100)
                break;
            case 'delivery':
                setDistanceX(-200)
                break
            default:
                setDistanceX(0)
                break;
        }
    }

    //Guarda en la variable processSection, el componente asignado para el tipo de proceso selecionado. 
    switch (whichProcess) {
        case 'development':
            processSection = <DevelopmentProcess/>
            break;
        case 'manufacturing':
            processSection = <ManufacturingProcess/>
            break;
        case 'delivery':
            processSection = <DeliveryProcess/>
            break;
        default:
            processSection = <DevelopmentProcess/>
            break;
    }

    return {
        processSection,
        handleProcessSection,
        distanceX
    }
}

export default useHandleProcessSection;