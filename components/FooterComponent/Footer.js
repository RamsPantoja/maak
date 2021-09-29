import {
    FooterCard,
    FooterContainer,
    FooterList,
    FooterListItem,
} from './FooterComponentStyles/FooterStyles';
import Link from 'next/link';
import { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';

const Footer = () => {
    const [store, dispatch] = useContext(StoreContext);

    return (
        <FooterContainer>
            <FooterCard theme={store.theme}>
                <p>Compañia</p>
                <FooterList>
                    <FooterListItem theme={store.theme}>
                        <Link href='/home'>Inicio</Link>
                    </FooterListItem>
                    <FooterListItem theme={store.theme}>
                        <Link href='/blog'>Blog</Link>
                    </FooterListItem>
                    <FooterListItem theme={store.theme}>
                        <Link href='/about_us'>Sobre nosotros</Link>
                    </FooterListItem>
                    <FooterListItem theme={store.theme}>
                        <Link href='/pricing'>Precio</Link>
                    </FooterListItem>
                    <FooterListItem theme={store.theme}>
                        <Link href='/security'>Seguridad</Link>
                    </FooterListItem>
                    <FooterListItem theme={store.theme}>
                        <Link href='/partners'>Partners</Link>
                    </FooterListItem>
                    <FooterListItem theme={store.theme}>
                        <Link href='/contact'>Contacto</Link>
                    </FooterListItem>

                </FooterList>
            </FooterCard>
            <FooterCard theme={store.theme}>
                <p>Recursos</p>
                <FooterList>
                    <FooterListItem theme={store.theme}>
                        <Link href='/resources/help_center'>Centro de ayuda</Link>
                    </FooterListItem>
                    <FooterListItem theme={store.theme}>
                        <Link href='/resources/suggestions'>Sugerencias</Link>
                    </FooterListItem>
                    <FooterListItem theme={store.theme}>
                        <Link href='/resources/docs'>Documentación</Link>
                    </FooterListItem>
                    <FooterListItem theme={store.theme}>
                        <Link href='/resources/guides'>Guías de usuario</Link>
                    </FooterListItem>
                    <FooterListItem theme={store.theme}>
                        <Link href='/resources/integrations'>Integraciones</Link>
                    </FooterListItem>
                </FooterList>
            </FooterCard>
            <FooterCard theme={store.theme}>
                
            </FooterCard>
        </FooterContainer>
    )
}


export default Footer;