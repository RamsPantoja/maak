import { useState } from "react";

//Manejador para mostrar las diferentes secciones en el apartado "Mis datos" en la pagina /r3d/my_profile, relacionados al perfil myR3d.
const useHandleSection = (firstSection) => {
    const [whichSection, setWhichSection] = useState(firstSection);

    //Funcion para obtener cual seccion mostrar.
    const handleOnClickSection = (section) => {
        setWhichSection(section);
    }

    return {
        handleOnClickSection,
        whichSection
    }
}

export default useHandleSection;