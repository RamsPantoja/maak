import { useSession } from "next-auth/client";
import styles from './styles/DeleteAddressWarning.module.css';

//Componentes
import LayoutModal from "../layout/LayoutModal";
import useHandleDeleteAddressRequest from "./hooks/useHandleDeleteAddressRequest";
import CircularProgress from "@material-ui/core/CircularProgress";

const DeleteAddressWarning = ({handleShowModal, addressId, setAddressData, addressData }) => {
    const [session, loading] = useSession(); //Obtiene la sesion

    //Hook manejador para eliminar una direccion.
    const { isLoadingRequest, handleOnSubmit} = useHandleDeleteAddressRequest(session.user.email, handleShowModal, setAddressData, addressData, addressId);
    
    //Cancela la operacion eliminar
    const handleOnClickCancel = () => {
        handleShowModal('noModal');
    }

    //Ejecuta el metodo para eliminar la direccion.
    const handleOnClickDelete = () => {
        handleOnSubmit();
    }

    return (
        <LayoutModal>
            <div className={styles.deleteAddressWarning}>
                <div className={styles.deleteAddressWarning_header}>
                    <h4>ELIMINAR DIRECCIÓN</h4>
                    <span onClick={() => {handleShowModal('noModal')}} className="material-icons-round">close</span>
                </div>
                <div className={styles.deleteAddressWarning_warningMessage}>
                        <p>Está apunto de eliminar permanentemente esta dirección, y todos sus datos.</p>
                        <p>Si no está seguro, puede cancelar la operación.</p>
                    <div className={styles.deleteAddressWarning_footer}>
                        <div className={styles.deleteAddressWarning_footer_actionButtons}>
                            { isLoadingRequest ? <div className={styles.deleteButton_circularProgress}><CircularProgress size={36} style={{color: '#d32f2f'}}/></div>
                                : <button onClick={handleOnClickDelete} className={styles.deleteAddressWarning_deleteButton}>Eliminar</button>
                            }
                            <button onClick={handleOnClickCancel} className={styles.deleteAddressWarning_cancelButton}>Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutModal>
    )
}

export default DeleteAddressWarning;