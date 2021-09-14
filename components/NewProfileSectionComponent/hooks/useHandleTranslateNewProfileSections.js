import { useState } from "react"

const useHandleTranslateNewProfileSections = () => {
    const [distanceX, setDistanceX] = useState(0);//Guarda el estado de la posicion de las secciones.
    const [section, setSection] = useState('selectProfile'); //Guarda la seccion siendo mostrada.

    //Manejdor que decide cual seccion mostrar por medio del parametro "section" pasado.
    const slideSections = (section) => {
        switch (section) {
            case 'selectProfile':
                setSection(section);
                setDistanceX(0)
                break;
            case 'uploadImage':
                setSection(section);
                setDistanceX(-100)
                break;
            case 'contactInf':
                setSection(section);
                setDistanceX(-200);
                break;
            default:
                setSection(section);
                setDistanceX(0);
                break;
        }
    }

    return {
        distanceX,
        slideSections,
        section
    }
}

export default useHandleTranslateNewProfileSections;