import { useState } from "react";

//Componentes
import ProjectsSection from '../ProjectsSection';
import AccountSection from '../AccountSection';
import NotificationsSection from '../NotificationsSection';
import MessagesSection from '../MessagesSection';

const useHandleSidebarSections = (handleShowSidebarMenu) => {
    const [whichSection, setWhichSection] = useState('projects'); //Guarda en el estado cual section en el sidebar debe mostrar.
    let section;

    /*Obtiene del evento onClick, el valor para actualizar whichSection y asi mostrar
    la seccion seleccionada por el usuario, en el sidebar para moviles.*/
    const handleSidebarSection = (e, section) => {
        e.preventDefault();
        setWhichSection(section);
    }

    //Guarda en la variable section el componente asignado para el tipo de seccion selecionada. 
    switch (whichSection) {
        case 'projects':
            section = <ProjectsSection handleShowSidebarMenu={handleShowSidebarMenu}/>
            break;
        case 'account':
            section = <AccountSection/>
            break;
        case 'notifications':
            section = <NotificationsSection/>
            break;
        case 'messages':
            section = <MessagesSection/>
            break;
        default:
            section = <ProjectsSection/>
    }

    return {handleSidebarSection, section, whichSection}
}

export default useHandleSidebarSections;