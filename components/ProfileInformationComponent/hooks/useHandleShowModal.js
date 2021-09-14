import { useState } from "react";

//Manejador para mostrar los modales en la pagina /r3d/my_profile relacionados al perfil myR3d.
const useHandleShowModal = () => {
    const [whichModal, setWhichModal] = useState(null);//Variable de estado para saber cual modal mostrar.
    const [showModal, setShowModal] = useState(false);//Variable de estado para saber si hay un modal abierto.

    //Funcion para mostrar el modal.
    //Recibe como parametro cual modal mostrar.
    const handleOnClickShowModal = (modal) => {
        if (showModal) {
            setShowModal(false)
            setWhichModal(modal)

            //Si el modal es cerrado, se activa el scrollbar de toda la pagina.
            let body = document.body;
            body.style.overflowY = 'auto'
        } else {
            setShowModal(true)
            setWhichModal(modal)

            /*Si el modal es abierto, se desactiva el scrollbar de toda la pagina y solo permanece activado
            el scrollbar del modal.*/
            let body = document.body;
            body.style.overflowY = 'hidden'
        }
    }

    return {
        handleOnClickShowModal,
        whichModal
    }
}

export default useHandleShowModal;