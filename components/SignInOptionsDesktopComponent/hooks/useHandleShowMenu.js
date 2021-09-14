import gsap from "gsap";
import { useCallback, useEffect, useState } from "react";

const useHandleShowMenu = (ref, refMenu) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); //Guarda el estado del menu desplegado, si esta desplegado o no.

    /*Desplega la lista de opciones o las culta para un menu cualquiera, haciendo uso de ref para hacer referencia a un menu. */
    const handleOpenMenu = (ref) => {
        if (isMenuOpen) {
            //Se hace uso de gsap para agregar una ligera animacion al desplegar el menu, ref: https://greensock.com/docs/v3/GSAP.
            gsap.to(ref,{
                duration: 0.5,
                opacity: 0,
            })
            setIsMenuOpen(false)
        } else {
            setIsMenuOpen(true);
            gsap.to(ref,{
                duration: 0.5,
                opacity: 1,
            })
        }
    }

    //Cuando se escucha el evento mousedown en la pagina, esta funcion cierra el menu desplegado.
    const handleOnClickOutSideMenu = useCallback((e) => {
        if (ref && !ref.contains(e.target)) {
            setIsMenuOpen(false)
            gsap.to(refMenu,{
                duration: 0.5,
                opacity: 0,
            })
        }
    },[ref, refMenu])

    //Escuchando el evento mousedown...
    useEffect(() => {
        document.addEventListener('mousedown', handleOnClickOutSideMenu);

        return () => {
            document.removeEventListener('mousedown', handleOnClickOutSideMenu)
        }

    },[handleOnClickOutSideMenu]);

    return [isMenuOpen, handleOpenMenu]
}

export default useHandleShowMenu;