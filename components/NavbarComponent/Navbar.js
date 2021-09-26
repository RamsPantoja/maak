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
                <Link href='/'><NavbarLink>¿NFT?</NavbarLink></Link>
                <Link href='/'><NavbarLink>Tienda digital</NavbarLink></Link>
                <Link href='/'><NavbarLink>Crear</NavbarLink></Link>
            </NavbarLinks>
            <NavbarSignLinks>
                <Link href='/sign_in'><NavbarLinkSignIn>Iniciar sesión</NavbarLinkSignIn></Link>
                <Link href='/sign_up'><NavbarLinkSignUp>Crea tu cuenta</NavbarLinkSignUp></Link>
            </NavbarSignLinks>
        </NavbarContainer>
    )
}

export default Navbar;