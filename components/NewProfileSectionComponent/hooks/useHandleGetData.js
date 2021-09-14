import { useState } from "react"

const useHandleGetData = () => {
    const [typeOfProfile, setTypeOfProfile] = useState(''); //Guarda el perfil seleccionado.
    const [imageFile, setImageFile] = useState(null);//Guarda la imagen seleccionada.

    //Obtiene el perfil seleccionado por el usuario.
    const getProfileSelected = (profile) => {
        setTypeOfProfile(profile);
    }

    //Obtiene la imagen seleccionada por el usuario.
    const getImageSelected = (file) => {
        setImageFile(file);
    }

    return {
        typeOfProfile,
        imageFile,
        getProfileSelected,
        getImageSelected,
    }
}

export default useHandleGetData;