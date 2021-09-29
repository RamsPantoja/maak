import { 
  About,
  AboutInf,
  AboutWidthView,
  CreateXSell,
  CreateXSellGrid,
  CreateXSellGridItem,
  CreateXSellWidthView,
  Slogan,
} from '../pagesStyles/index';

//Componentes
import BackgroundAnimation from '../components/BackgroundAnimationComponent/BackgroundAnimation';
import MaakLayout from '../components/Layout/MaakLayout';
import Image from 'next/image';
import { useContext } from 'react';
import { StoreContext } from '../store/StoreProvider';
import { useEffect } from 'react';
import { types } from '../store/storeReducer';

const Home = () => {
  const [store, dispatch] = useContext(StoreContext);

  useEffect(() => {
    dispatch({
      type: types.onChangeTheme,
      payload: localStorage.getItem('theme')
    })
  },[store.theme]);

  return (
    <MaakLayout>
        <BackgroundAnimation>
          <Slogan theme={store.theme}>
            <h1>Maak</h1>
            <p>Redescubre la manera de crear, vender & compartir el cripto-arte</p>
            <span>La primera plataforma NFT en México</span>
          </Slogan>
        </BackgroundAnimation>
        <About theme={store.theme}>
          <AboutWidthView>
            <AboutInf theme={store.theme}>
              <h2>¿Que es Maak?</h2>
              <p>
                Es una plataforma digital, la cual te permite vender, 
                compartir, descubrir e incluso crear cripto-arte de forma digital, 
                basándose en contratos inteligentes y la nueva tecnología NFT.
              </p>
            </AboutInf>
            <Image src='/svg/016-coin.svg' width={1000} height={700}/>
          </AboutWidthView>
        </About>
        <CreateXSell theme={store.theme}>
          <CreateXSellWidthView theme={store.theme}> 
            <h2>Crea & vende tus NFTs</h2>
            <CreateXSellGrid>
              <CreateXSellGridItem theme={store.theme}>
                <Image src='/svg/028-wallet.svg' alt='billetera blockchain icono' width={100} height={100}/>
                <p>Configura tu billetera</p>
                <span>Configura la billetera de tu elección, con ella puedes hacer y recibir transacciones sobre tus NFTs.</span>
                <span>Una vez configurada, conectala a Maak.</span>
              </CreateXSellGridItem>
              <CreateXSellGridItem theme={store.theme}>
                <Image src='/svg/025-tokens.svg' alt='tokens blockchain icono' width={100} height={100}/>
                <p>Crea tu colección</p>
                <span>
                  Configura tu colección. Agrega información general sobre tu colección, imagen, descripción, 
                  blockchain, categorías & más. 
                </span>
              </CreateXSellGridItem>
              <CreateXSellGridItem theme={store.theme}>
                <Image src='/svg/026-file.svg' alt='archivo nft icono' width={100} height={100}/>
                <p>Agrega tus NFTs</p>
                <span>Sube tu arte, pueden ser imágenes, videos, audio e incluso arte 3D.</span>
                <span>Agrega nombre, descripción, y los metadatos que creas necesarios. Puedes personalizar las propiedades de tus NFTs.</span>
              </CreateXSellGridItem>
              <CreateXSellGridItem theme={store.theme}>
                <Image src='/svg/006-coin.svg' alt='coins nft icono' width={100} height={100}/>
                <p>Ponlos en venta</p>
                <span>
                  Una vez configurados tus NFTs, solo es cuestión de que decidas como quieres venderlos, 
                  y nosotros te ayudamos a venderlos.
                </span>
              </CreateXSellGridItem >
            </CreateXSellGrid>
          </CreateXSellWidthView>
        </CreateXSell>
    </MaakLayout>
  )
}

export default Home;