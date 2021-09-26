//Componentes
import Navbar from '../NavbarComponent/Navbar';
import Footer from '../FooterComponent/Footer';

import { 
    MaakLayoutContainer, 
    Header, 
    MaakLayoutRelativeContainer, 
    MaakLayoutFooter } from './LayoutStyles/MaakLayoutStyles';

const MaakLayout = ({children}) => {
    return (
        <MaakLayoutContainer>
            <Header>
                <Navbar/>
            </Header>
            <MaakLayoutRelativeContainer>
                <main>
                    {children}
                </main>
                <MaakLayoutFooter>
                    <Footer/>
                </MaakLayoutFooter>
            </MaakLayoutRelativeContainer>
        </MaakLayoutContainer>
    )
}

export default MaakLayout;