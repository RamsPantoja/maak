//Componentes
import Navbar from '../NavbarComponent/Navbar';
import Footer from '../FooterComponent/Footer';

import { 
    MaakLayoutContainer, 
    Header, 
    MaakLayoutRelativeContainer, 
    MaakLayoutFooter,
    MaakLayoutMain} from './LayoutStyles/MaakLayoutStyles';
import { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';

const MaakLayout = ({children}) => {
    const [store, dispatch] = useContext(StoreContext);
    
    return (
        <MaakLayoutContainer>
            <Header theme={store.theme}>
                <Navbar/>
            </Header>
            <MaakLayoutRelativeContainer>
                <MaakLayoutMain theme={store.theme}>
                    {children}
                </MaakLayoutMain>
                <MaakLayoutFooter theme={store.theme}>
                    <Footer/>
                </MaakLayoutFooter>
            </MaakLayoutRelativeContainer>
        </MaakLayoutContainer>
    )
}

export default MaakLayout;