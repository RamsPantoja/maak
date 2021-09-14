import styles from './styles/SelectTable.module.css';
import { useForm } from 'react-hook-form';

//Componentes
import LayoutModal from "../../layout/LayoutModal";
import LayoutModalCard from "../../layout/LayoutModalCard";
import useHandleAddCategorysRequest from './hooks/useHandleAddCategorysRequest';
import { useSession } from 'next-auth/client';

const SelectTable = ({title, handleShowModal, inputs, description}) => {
    const [session, loading] = useSession();

    /*useForm permite implementar un manejador de formularios para una buena optimizacion de renderizado.
    Este hook viene de la libreria react-hook-form, la cual es muy buena para la administracion de formularios.
    ref: https://react-hook-form.com */
    const {register, handleSubmit, watch} = useForm();

    const { isLoadingRequest, handlerRequest } = useHandleAddCategorysRequest(session.user.email);

    const handleOnSubmit = (data) => {
        handlerRequest(data)
    }

    return (
        <LayoutModal>
            <LayoutModalCard
            title={title}
            handleShowModal={handleShowModal}
            idForm={'selectTable'}>
                <div className={styles.selectTable}>
                    <p>{description}</p>
                    <form id='selectTable' className={styles.selectTable_form} onSubmit={handleSubmit(handleOnSubmit)}>
                        { inputs.map((input, index) => {
                            return (
                                <div className={styles.selectTable_form_item} key={index}>
                                    <input {...register(input.field)} id={input.field} type='checkbox' hidden/>
                                    <label className={ watch(input.field) ? styles.selectTable_form_labelActive : styles.selectTable_form_label} htmlFor={input.field}>
                                        {input.label}
                                    </label>
                                </div>
                            )
                        })}
                    </form>
                </div>
            </LayoutModalCard>
        </LayoutModal>
    )
}

export default SelectTable;