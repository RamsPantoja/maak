import styles from './styles/LayoutModalCard.module.css';

import MainButtonProfile from "../ButtonsComponent/MainButtonProfile"

const LayoutModalCard = ({children, title, idForm, isLoadingRequest, handleShowModal, handleOnSubmit}) => {
    return (
        <div className={styles.layoutModalCard}>
            <div className={styles.layoutModalCard_header}>
                <h4>{title}</h4>
                <span onClick={() => {handleShowModal('noModal')}} className="material-icons-round">close</span>
            </div>
            {children}
            <div className={styles.layoutModalCard_footer}>
                <div className={styles.layoutModalCard_footer_button_container}>
                    <div onClick={handleOnSubmit} className={styles.layoutModalCard_footer_button}>
                        <MainButtonProfile isLoadingRequest={isLoadingRequest} name={'Guardar'} formId={idForm}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LayoutModalCard;