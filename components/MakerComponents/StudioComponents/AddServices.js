import SelectTable from "./SelectTable";

const AddServices = ({handleShowModal}) => {
    const inputs = [
        {
            label: 'Dibujo',
            field: 'dibujo',
        },
        {
            label: 'Dibujo técnico',
            field: 'dibujoTecnico',
        },
        {
            label: 'Diseño de indumentaria',
            field: 'disenoIndumentaria',
        },
        {
            label: 'Diseño de moda',
            field: 'disenoModa',
        },
        {
            label: 'Diseño de producto',
            field: 'disenoProducto',
        },
        {
            label: 'Diseño gráfico',
            field: 'disenoGrafico',
        },
        {
            label: 'Diseño Industrial',
            field: 'disenoIndustrial',
        },
        {
            label: 'Ingeniería eléctrica',
            field: 'ingenieriaElectrica',
        },
        {
            label: 'Ingeniería mecánica',
            field: 'ingenieriaMecanica',
        },
        {
            label: 'Ingeniería mecatrónica',
            field: 'ingenieriaMecatronica',
        },
        {
            label: 'Ingeniería química',
            field: 'ingenieriaQuimica',
        },
        {
            label: 'Modelado 3D',
            field: 'modelado3D',
        },
        {
            label: 'Planos de producción',
            field: 'planosProduccion',
        },
        {
            label: 'Prototipado',
            field: 'prototipado',
        },
        {
            label: 'Renderizado',
            field: 'renderizado',
        },
        {
            label: 'Simulación',
            field: 'simulacion',
        },
        {
            label: 'Visualización',
            field: 'visualizacion',
        },
    ];

    return (
        <SelectTable
        title={'AGREGAR SERVICIOS'}
        handleShowModal={handleShowModal}
        inputs={inputs}
        description={'Selecciona los servicios profesionales a ofrecer'}/>
    )
}

export default AddServices;