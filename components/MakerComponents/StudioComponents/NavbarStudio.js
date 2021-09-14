import styles from './styles/NavbarStudio.module.css';

const NavbarStudio = ({handleOnClickSection, whichSection}) => {
    return (
        <div className={styles.navbarStudio}>
            <p className={ whichSection === 'myStudio' ? styles.navbarStudio_linkActive : styles.navbarStudio_link} 
            onClick={() => {handleOnClickSection('myStudio')}}>Mi estudio</p>
            <p className={ whichSection === 'myPortfolio' ? styles.navbarStudio_linkActive : styles.navbarStudio_link}
            onClick={() => {handleOnClickSection('myPortfolio')}}>Mi portafolio</p>
        </div>
    )
}

export default NavbarStudio;