import styles from './styles/index.module.css';

//Componentes
import BackgroundAnimation from '../components/BackgroundAnimationComponent/BackgroundAnimation';
import MaakLayout from '../components/Layout/MaakLayout';
import Image from 'next/image';

const Home = () => {
  return (
    <MaakLayout>
        <BackgroundAnimation>
          <div className={styles.slogan}>
            <h1>Maak</h1>
            <p>Redescubre la manera de crear, vender & compartir el cripto-arte</p>
            <span>La primera plataforma NFT en México</span>
          </div>
        </BackgroundAnimation>
        <div className={styles.about}>
          <div className={styles.about_widthView}>
            <div className={styles.about_inf}>
              <h2>¿Que es Maak?</h2>
              <p>
                Es una plataforma digital, la cual te permite vender, 
                compartir, descubrir e incluso crear cripto-arte de forma digital, 
                basándose en contratos inteligentes y la nueva tecnología NFT.
              </p>
            </div>
            <Image src='/svg/016-coin.svg' width={1000} height={700}/>
          </div>
        </div>
        <div className={styles.createXsell}>
          <div className={styles.createXsell_widthView}>
            <h2>Crea & vende tus NFTs</h2>
            <div className={styles.createXsell_grid}>
              <div className={styles.createXsell_gridItem}>
                <Image src='/svg/028-wallet.svg' width={100} height={100}/>
                <p>Configura tu billetera</p>
                <span>Configura la billetera de tu elección, con ella puedes hacer y recibir transacciones sobre tus NFTs.</span>
                <span>Una vez configurada, conectala a Maak.</span>
              </div>
              <div className={styles.createXsell_gridItem}>
                <Image src='/svg/025-tokens.svg' width={100} height={100}/>
                <p>Crea tu colección</p>
                <span>
                  Configura tu colección. Agrega información general sobre tu colección, imagen, descripción, 
                  blockchain, categorías & más. 
                </span>
              </div>
              <div className={styles.createXsell_gridItem}>
                <Image src='/svg/026-file.svg' width={100} height={100}/>
                <p>Agrega tus NFTs</p>
                <span>Sube tu arte, pueden ser imágenes, videos, audio e incluso arte 3D.</span>
                <span>Agrega nombre, descripción, y los metadatos que creas necesarios. Puedes personalizar las propiedades de tus NFTs.</span>
              </div>
              <div className={styles.createXsell_gridItem}>
                <Image src='/svg/006-coin.svg' width={100} height={100}/>
                <p>Ponlos en venta</p>
                <span>
                  Una vez configurados tus NFTs, solo es cuestión de que decidas como quieres venderlos, 
                  y nosotros te ayudamos a venderlos.
                </span>
              </div>
            </div>
          </div>
        </div>
    </MaakLayout>
  )
}

export default Home;