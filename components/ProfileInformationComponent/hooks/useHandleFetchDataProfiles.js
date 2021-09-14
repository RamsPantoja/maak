import { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axios_instance";

const useHandleFetchDataProfiles = (user) => {
    const [userData, setUserData] = useState({
        perfil: {
            nombre: '',
            descripcion: 'Descripción',
            empresa: '',
            ubicacion: '',
            ocupacion: '',
            imagenPerfil: '/placeholder.png',
            imagenPortada: null,
            enlacesContacto: {
                sitioWeb: '/',
                facebook: '',
                instagram: '',
                twitter: '',
                linkedin: ''
            }
        },
        cuenta: {
            nombre: '',
            apellidos: '',
            rfc: '',
            telefonoCelular: '',
            telefonoFijo: ''
        },
        direcciones: []
    });
    const [isLoadingRequest, setIsLoadingRequest] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsLoadingRequest(true);
        const typeOfProfile = localStorage.getItem('profile');
        const getData = async () => {
            try {
                const res = await axiosInstance.get(`/perfil?usuario=${user}&perfil=${typeOfProfile}`);
                setUserData(res.data.data[0]);
                setIsLoadingRequest(false);
                setError(false)
            } catch (error) {
                setIsLoadingRequest(false);
                if (error) {
                    setError(true);
                }
            }
        }
        getData();
    }, [user]);

    return {
        userData,
        isLoadingRequest,
        error,
    }
}

export default useHandleFetchDataProfiles;