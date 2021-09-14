import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../../store/StoreProvider";

const useHandleSwitchIconProfile = () => {
    const [iconProfile, setIconProfile] = useState('/account');
    const [store] = useContext(StoreContext)

    useEffect(() => {
        const profile = localStorage.getItem('profile');

        switch (profile) {
            case 'MIR3D':
                setIconProfile('/seleccionar-mir3d.svg');
                break;
            case 'MAKER':
                setIconProfile('/seleccionar-creador.svg');
                break;
            case 'MANUFACTURER':
                setIconProfile('/seleccionar-fabricar.svg');
                break;
            default:
                setIconProfile('/placeholder-profile-icon.png');
                break;
        }
    }, [store?.profile])

    return {
        iconProfile
    }
}

export default useHandleSwitchIconProfile;