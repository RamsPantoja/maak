import styles from './styles/ViewerSelectedItem.module.css';

const ViewerSelectedItem = ({title, typeOfItem, modalName, handleOnClickShowModal}) => {
    return (
        <div className={styles.viewerSelectedItem}>
            <p className={styles.viewerSelectedItem_title}>{title}</p>
            <ul className={styles.viewerSelectedItem_list}>
                <li onClick={() => {handleOnClickShowModal(modalName)}} className={styles.viewerSelectedItem_addItem}>Agregar {typeOfItem}</li>
            </ul>
        </div>
    )
}

export default ViewerSelectedItem;