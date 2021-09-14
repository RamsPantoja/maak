import gsap from "gsap"
import { useCallback, useEffect, useState } from "react"
import { ref } from "yup";

const useHandleShowDescription = (expandLess, box) => {
    /*Si es verdadero, mostrara la caja de description para dispositivos moviles.
    Si es verdadero se muestra el icono expandless en el componente Profile, de lo contrario se muestra expandMore */
    const [showDescription, setShowDescription] = useState(false);

    //Nota: se usa ref para hacer referencia a la caja.

    //Oculta la caja de description del perfil especifico para escritorio.
    const handleOnMouseOver = (ref) => {
        gsap.to(ref, {
            opacity: 1,
            duration: 0.2,
            display: 'block'
        })
    }

    //Muestra la caja de descripcion del perfil especifico para escritorio.
    const handleOnMouseLeave = (ref) => {
        gsap.to(ref, {
            opacity: 0,
            duration:0.2,
            display: 'none'
        })
    }

    //Manejador para desplegar la caja de descripcion del perfil especifico para dispositivos moviles.
    const handleOnClick = (ref) => {
        if (showDescription) {
            gsap.to(ref, {
                opacity: 0,
                duration:0.2,
                display: 'none'
            })
            setShowDescription(false)
        } else {
            gsap.to(ref, {
                opacity: 1,
                duration: 0.2,
                display: 'block'
            })
            setShowDescription(true)
        }
    }

    const handleOnClickOutside = useCallback((e) => {
        if (expandLess && !expandLess.contains(e.target)) {
            gsap.to(box, {
                opacity: 0,
                duration:0.2,
                display: 'none'
            })
            setShowDescription(false)
        }
    }, [box, expandLess]);

    //Escuchando el evento mousedown...
    useEffect(() => {
        document.addEventListener('mousedown', handleOnClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleOnClickOutside)
        }

    },[handleOnClickOutside]);
    
    return {handleOnMouseOver, handleOnMouseLeave, handleOnClick, showDescription};
}


export default useHandleShowDescription;