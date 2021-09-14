import styles from './styles/MyStudio.module.css';

import ProfileAdvancedDataLayout from "../../ProfileInformationComponent/ProfileAdvancedDataLayout";
import ViewerSelectedItem from "./ViewerSelectedItems";

const MyStudio = ({handleOnClickShowModal}) => {
    return (
        <ProfileAdvancedDataLayout message={'Agregar categorías y servicios a Mi estudio para obtener proyectos relacionados'}>
            <div className={styles.myStudio}>
                <ViewerSelectedItem
                title={'Categorías'}
                typeOfItem={'categorías'}
                modalName={'addCategorys'}
                handleOnClickShowModal={handleOnClickShowModal}/>
                <ViewerSelectedItem
                title={'Servicios'}
                typeOfItem={'servicios'}
                modalName={'addServices'}
                handleOnClickShowModal={handleOnClickShowModal}/>
            </div>
        </ProfileAdvancedDataLayout>
    )
}

export default MyStudio;