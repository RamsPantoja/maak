import {
    FooterCard,
    FooterContainer,
    FooterList,
    FooterListItem,
} from './FooterComponentStyles/FooterStyles';
import Link from 'next/link';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterCard>
                <p>Compañia</p>
                <FooterList>
                    <FooterListItem>
                        <Link href='/home'>Inicio</Link>
                    </FooterListItem>
                    <FooterListItem>
                        <Link href='/blog'>Blog</Link>
                    </FooterListItem>
                    <FooterListItem>
                        <Link href='/about_us'>Sobre nosotros</Link>
                    </FooterListItem>
                    <FooterListItem>
                        <Link href='/pricing'>Precio</Link>
                    </FooterListItem>
                    <FooterListItem>
                        <Link href='/security'>Seguridad</Link>
                    </FooterListItem>
                    <FooterListItem>
                        <Link href='/partners'>Partners</Link>
                    </FooterListItem>
                    <FooterListItem>
                        <Link href='/contact'>Contacto</Link>
                    </FooterListItem>

                </FooterList>
            </FooterCard>
            <FooterCard>
                <p>Recursos</p>
                <FooterList>
                    <FooterListItem>
                        <Link href='/resources/help_center'>Centro de ayuda</Link>
                    </FooterListItem>
                    <FooterListItem>
                        <Link href='/resources/suggestions'>Sugerencias</Link>
                    </FooterListItem>
                    <FooterListItem>
                        <Link href='/resources/docs'>Documentación</Link>
                    </FooterListItem>
                    <FooterListItem>
                        <Link href='/resources/guides'>Guías de usuario</Link>
                    </FooterListItem>
                    <FooterListItem>
                        <Link href='/resources/integrations'>Integraciones</Link>
                    </FooterListItem>
                </FooterList>
            </FooterCard>
        </FooterContainer>
    )
}


export default Footer;