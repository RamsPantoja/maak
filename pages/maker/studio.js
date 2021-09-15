import { getSession } from "next-auth/client"
import styles from './styles/studio.module.css';
import Script from 'next/script';

//Componentes
import LayoutR3D from "../../components/layout/LayoutR3D";
import Head from 'next/head';
import useHandleFetchDataProfiles from "../../components/ProfileInformationComponent/hooks/useHandleFetchDataProfiles";
import LoadingFeedback from '../../components/LoadingComponent/LoadingFeedback';
import StudioComponent from "../../components/MakerComponents/StudioComponents/StudioComponent";

const Studio = ({session}) => {
    const {userData, isLoadingRequest, error} = useHandleFetchDataProfiles(session.user.email);
    
    if (isLoadingRequest) {
        return (
            <LayoutR3D session={session}>
                <Head>
                    <title>R3D - Estudio</title>
                </Head>
                <LoadingFeedback/>
            </LayoutR3D>
        )
    }

    return (
        <LayoutR3D session={session}>
            <Head>
                <title>R3D - Estudio</title>
            </Head>
            <Script src='https://documentcloud.adobe.com/view-sdk/main.js' strategy='afterInteractive'/>
            <div className={styles.studio}>
                <StudioComponent userData={userData}/>
            </div>
        </LayoutR3D>
    )
}

export async function getServerSideProps({req, res}) {
    const session = await getSession({req});

    if (!session && req) {
        return {
            redirect: {
                destination: '/sign_in',
                permanent: false
            }
        }
    }

    return {
        props: {
            session
        }
    }
}

export default Studio;