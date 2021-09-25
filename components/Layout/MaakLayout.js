import styles from './styles/MaakLayout.module.css';

//Componentes
import Navbar from '../NavbarComponent/Navbar';

const MaakLayout = ({children}) => {
    return (
        <div className={styles.maakLayout}>
            <header className={styles.maakLayout_header}>
                <Navbar/>
            </header>
            <div className={styles.maakLayout_relativeContainer}>
                <main className={styles.maakLayout_main}>
                    {children}
                </main>
                <footer className={styles.maakLayout_footer}>

                </footer>
            </div>
        </div>
    )
}

export default MaakLayout;