import { useState } from "react"

//Hook para desplazar los menus de la seccion Cuenta en el sidebar movil.
const useHandleAccountSectionMenu = () => {
    const [distanceX, setDistanceX] = useState(0);

    const handleSectionDistanceX = (section) => {
        switch (section) {
            case 'accountMenu':
                setDistanceX(0)
                break;
            case 'profileMenu':
                setDistanceX(-100)
                break;
            default:
                setDistanceX(0)
                break;
        }
    }

    return [distanceX, handleSectionDistanceX];
}

export default useHandleAccountSectionMenu;