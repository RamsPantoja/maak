import styles from './styles/home.module.css';
import { useRouter } from 'next/router';
import backgroundSlogan from '../public/background_slogan.png';

//Componentes
import Sidebar from '../components/SidebarComponent/Sidebar';
import Navbar from '../components/NavbarComponent/Navbar';
import OurProcessSection from '../components/OurProcessSectionComponent/OurProcessSection';
import NavbarProcess from '../components/OurProcessSectionComponent/NavbarProcess';
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'

//Hooks
import useHandleProcessSection from '../components/OurProcessSectionComponent/hooks/useHandleProcessSection';
import { getSession } from 'next-auth/client';
import Footer from '../components/FooterComponent/Footer';

export default function Home({session}) {
  const router = useRouter(); //Accede al objeto router de la app.

  //Este hook permite mostrar las diferentes secciones de el apartado "Nuestro proceso" en el landing page.
  const { processSection, handleProcessSection, distanceX } = useHandleProcessSection();
  
  return (
    <div className={styles.container}>
      <Head>
        <title>R3D</title>
      </Head>
      <header className={styles.header}>
        {/*Navbar para dispositivos mayores a 768px de resolucion. */}
        <Navbar session={session}/>
        {/*Menu para dispositivos menores a 768px de resolucion. */}
        <Sidebar session={session}/>
      </header>
      <main className={styles.main}>
        <div className={styles.slogan_container}>
          <h1>R3D es la plataforma colaborativa para diseñar y fabricar productos bajo pedido.</h1>
          <Image src={backgroundSlogan} placeholder='blur' objectFit='cover' alt='design 3d r3d diseño' layout='fill' quality={100} />
          <div className={styles.slogan}>
            <Image src='/CREAR-NOS-UNE.svg' alt='eslogan r3d crear nos une slogan' width={500} height={100} priority={true}/>
          </div>
        </div>
        <NavbarProcess handleProcessSection={handleProcessSection} distanceX={distanceX}/>
        <OurProcessSection>
          {processSection}
        </OurProcessSection>
        <div className={styles.aboutR3d_container}>
          <div className={styles.aboutR3d_container_grid}>
            <div className={styles.aboutR3d_container_grid_title}>
              <h1>Simplificamos el desarrollo y fabricación de productos bajo demanda</h1>
              <h1>Somos la R3D que te conecta con los mejores creadores y fabricantes</h1>
            </div>
            <div className={styles.aboutR3d_container_img}>
              <Image src='/MAPA-MEX.svg' alt='Conectados r3d' layout='fill' objectFit='contain' priority={true}/>
            </div>
            <div className={styles.aboutR3d_container_grid_text}>
              <p><span className={styles.aboutR3d_container_grid_text_focus}>R3D</span> impulsa tus proyectos</p>
              <div className={styles.aboutR3d_container_grid_text_question}>
                <p>¿Buscas desarrollar un producto desde cero?</p>
                <p>Nuestra <span className={styles.aboutR3d_container_grid_text_focus}>R3D de Creadores</span> convierte tus ideas en conceptos.</p>
              </div>
              <div className={styles.aboutR3d_container_grid_text_question}>
                <p>¿Necesitas mandar a fabricar un producto definido?</p>
                <p>Nuestra <span className={styles.aboutR3d_container_grid_text_focus}>R3D de Fabricantes</span> materializa desde prototipos hasta series de producción.</p>
              </div>
              <p>Conectamos cada proyecto con creadores y fabricantes con base en criterios específicos.</p>
            </div>
          </div>
        </div>
        <div className={styles.sectionToJoinUs}>
          <div className={styles.sectionToJoinUs_description}>
            <p>Únete a la nueva revolución industrial digital</p>
            { session ? <Link href='/r3d/new_project'><a>INICIAR PROYECTO</a></Link>
              : <Link href='/sign_up'><a>REGISTRO</a></Link>
            }
          </div>
        </div>
        <div className={styles.makers_container}>
          <div className={styles.makers_subContainer}>
            <h1>Forma parte de la R3D de creadores y fabricantes que está rediseñando la industria</h1>
            <div className={styles.makers_container_card1} onClick={() => router.push('/about/makers')}>
              <div className={styles.makers_container_card_img}>
                <Image src='/creadores.webp' alt='creadores r3d' title='Creadores' width={200} height={200} objectFit='scale-down' priority={true}/>
              </div>
              <div className={styles.makers_container_card_inf}>
                <h3>CREADORES</h3>
                <div className={styles.makers_container_card_inf_mainIdea}>
                  <p>Materializa tus ideas</p>
                  <span className="material-icons-round">east</span>
                </div>
                <p className={styles.makers_container_card_inf_description}>Desarrolla conceptos y crea productos innovadores.</p>
              </div>
            </div>
            <div className={styles.makers_container_card2} onClick={() => router.push('/about/manufacturers')}>
              <div className={styles.makers_container_card_inf}>
                <h3>FABRICANTES</h3>
                <div className={styles.makers_container_card_inf_mainIdea}>
                  <p className={styles.makers_container_card_inf_mainIdea}>Digitaliza tu fábrica</p>
                  <span className="material-icons-round">east</span>
                </div>
                <p className={styles.makers_container_card_inf_description}>Cotiza y fabrica proyectos a la medida de tu capacidad.</p>
              </div>
              <div className={styles.makers_container_card_img}>
                <Image src='/fabricantes.webp' alt='Fabricantes r3d' title='Fabricantes' width={200} height={200} objectFit='scale-down' priority={true}/>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className={styles.footer_backTop}>
        <Link href='/' scroll={true}><a>Inicio de página</a></Link>
      </div>
      <Footer/>
    </div>
  )
}

export async function getServerSideProps({req, res}) {
  const session = await getSession({req});

  return {
    props: {
      session,
    }
  }
}
