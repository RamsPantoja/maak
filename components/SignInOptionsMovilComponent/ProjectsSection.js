import React from 'react';
import styles from './styles/ProjectsSection.module.css';
import { useRouter } from 'next/router';

const ProjectsSection = ({handleShowSidebarMenu}) => {
    const router = useRouter();//Accede al router de la app.

    //Envia al usuario a la ruta especificada cuanda da click en algunos de los links de abajo.
    const handleOnClickLinks = (path) => {
        handleShowSidebarMenu();
        setTimeout(() => {
            router.push(path);
        }, 200)
    }

    return (
        <div className={styles.projectsSection_container}>
            <div className={styles.projectsSection_container_actions} onClick={() => {handleOnClickLinks('/r3d/new_project')}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g id="Grupo_11246" data-name="Grupo 11246" transform="translate(-1573 -1880)">
                        <circle id="Elipse_786" data-name="Elipse 786" cx="12" cy="12" r="12" transform="translate(1573 1880)" fill="#fff"/>
                        <path id="Trazado_8693" data-name="Trazado 8693" d="M3,11.933v1.878a.306.306,0,0,0,.309.309H5.187a.29.29,0,0,0,.216-.093L12.15,7.287,9.833,4.97,3.093,11.71A.3.3,0,0,0,3,11.933ZM13.942,5.5a.615.615,0,0,0,0-.871L12.5,3.178a.615.615,0,0,0-.871,0L10.494,4.309l2.317,2.317L13.942,5.5Z" transform="translate(1576.324 1883.039)"/>
                    </g>
                </svg>
                <span>Iniciar Proyecto</span>
            </div>
            <div className={styles.projectsSection_container_actions} onClick={() => {handleOnClickLinks('/r3d/my_projects')}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g id="Grupo_11245" data-name="Grupo 11245" transform="translate(-1606 -1880)">
                        <circle id="Elipse_787" data-name="Elipse 787" cx="12" cy="12" r="12" transform="translate(1606 1880)" fill="#fff"/>
                        <g id="Grupo_11237" data-name="Grupo 11237" transform="translate(1612.222 1887.091)">
                        <g id="Rectángulo_3443" data-name="Rectángulo 3443" transform="translate(-1.422)" fill="#fff" stroke="#000" strokeWidth="1">
                            <rect width="6.589" height="1.55" rx="0.775" stroke="none"/>
                            <rect x="0.5" y="0.5" width="5.589" height="0.55" rx="0.275" fill="none"/>
                        </g>
                        <g id="Rectángulo_3444" data-name="Rectángulo 3444" transform="translate(-1.422 4.134)" fill="#fff" stroke="#000" strokeWidth="1">
                            <rect width="6.589" height="1.55" rx="0.775" stroke="none"/>
                            <rect x="0.5" y="0.5" width="5.589" height="0.55" rx="0.275" fill="none"/>
                        </g>
                        <g id="Rectángulo_3445" data-name="Rectángulo 3445" transform="translate(-1.422 8.268)" fill="#fff" stroke="#000" strokeWidth="1">
                            <rect width="6.589" height="1.55" rx="0.775" stroke="none"/>
                            <rect x="0.5" y="0.5" width="5.589" height="0.55" rx="0.275" fill="none"/>
                        </g>
                        <path id="Trazado_8694" data-name="Trazado 8694" d="M-11581.821-5615.319l1.467,1.362,3.355-3.119.209-.195" transform="translate(11589.77 5620.523)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                        </g>
                    </g>
                </svg>
                <span>Mis Proyectos</span>
            </div>
        </div>
    )
}

export default ProjectsSection;