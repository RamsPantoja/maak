import styles from './styles/Navbar.module.css';
import { useRouter } from 'next/router';

//Componentes 
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const router = useRouter(); //Acceso al router de la app

    return (
        <div className={styles.navbar}>
            <div className={styles.navbar_logo} onClick={() => router.push('/')}>
                <Image src='/logotipo.svg' layout='fill' priority={true} alt='logotipo logotipo maak'/>
            </div>
            <nav className={styles.navbar_links}>
                <Link href='/'><a className={styles.navbar_link}>¿NFT?</a></Link>
                <Link href='/'><a className={styles.navbar_link}>Tienda digital</a></Link>
                <Link href='/'><a className={styles.navbar_link}>Crear</a></Link>
            </nav>
            <div className={styles.navbar_signLinks}>
                <Link href='/sign_in'><a className={styles.navbar_linkSignIn}>Iniciar sesión</a></Link>
                <Link href='/sign_up'><a className={styles.navbar_linkSignUp}>Crea tu cuenta</a></Link>
            </div>
        </div>
    )
}

export default Navbar;