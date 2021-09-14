import { getSession } from 'next-auth/client';

//Componentes
import LayoutR3D from '../components/layout/LayoutR3D';
import ProfileInformation from '../components/ProfileInformationComponent/ProfileInformation';
import useHandleFetchDataProfiles from '../components/ProfileInformationComponent/hooks/useHandleFetchDataProfiles';
import LoadingFeedback from '../components/LoadingComponent/LoadingFeedback';
import Head from 'next/head';

const MyProfile = ({session}) => {
    const {isLoadingRequest, userData, error} = useHandleFetchDataProfiles(session.user.email);

    if (isLoadingRequest) {
        return (
            <LayoutR3D session={session}>
                <Head>
                    <title>R3D - Mi Perfil</title>
                </Head>
                <LoadingFeedback/>
            </LayoutR3D>
        )
    }

    if (error) {
        return (
            <LayoutR3D session={session}>
                <Head>
                    <title>R3D - Mi Perfil</title>
                </Head>
                <p>Error en el recurso solicitado :(</p>
            </LayoutR3D>
        )
    }

    return (
        <LayoutR3D session={session}>
            <Head>
                <title>R3D - Mi Perfil</title>
            </Head>
            <ProfileInformation userData={userData}/>
        </LayoutR3D>
    )
}

export async function getServerSideProps({req, res}) {
    const session = await getSession({req});

    if (!session) {
        return {
            redirect: {
                destination: '/sign_in',
                permanent: false
            }
        }
    }

    return {
        props: {
            session: session,
        }
    }
}

export default MyProfile;