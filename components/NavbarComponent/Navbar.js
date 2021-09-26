import {
    NavbarContainer,
    NavbarLogo,
    NavbarLinks,
    NavbarLink,
    NavbarSignLinks,
    NavbarLinkSignIn,
    NavbarLinkSignUp
} from './StylesComponent/NavbarStyles';

import { useRouter } from 'next/router';

//Componentes 
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const router = useRouter(); //Acceso al router de la app

    return (
        <NavbarContainer>
            <NavbarLogo onClick={() => router.push('/')}>
                <Image src='/logotipo.svg' layout='fill' priority={true} alt='logotipo logotipo maak'/>
            </NavbarLogo>
            <NavbarLinks>
                <Link href='/' passHref><NavbarLink>¿NFT?</NavbarLink></Link>
                <Link href='/' passHref><NavbarLink>Tienda digital</NavbarLink></Link>
                <Link href='/' passHref><NavbarLink>Crear</NavbarLink></Link>
            </NavbarLinks>
            <NavbarSignLinks>
                <Link href='/sign_in' passHref><NavbarLinkSignIn>Iniciar sesión</NavbarLinkSignIn></Link>
                <Link href='/sign_up' passHref><NavbarLinkSignUp>Crea tu cuenta</NavbarLinkSignUp></Link>
            </NavbarSignLinks>
        </NavbarContainer>
    )
}

export default Navbar;