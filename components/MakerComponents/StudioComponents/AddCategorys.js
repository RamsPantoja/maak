import SelectTable from "./SelectTable"

const AddCategorys = ({handleShowModal}) => {
    const inputs = [
        {
            label: 'Accesorios',
            field: 'accesorios',
        },
        {
            label: 'Artesanias',
            field: 'artesanias',
        },
        {
            label: 'Calzado',
            field: 'calzado',
        },
        {
            label: 'Cuidado personal',
            field: 'cuidadoPersonal',
        },
        {
            label: 'Decoración',
            field: 'decoracion',
        },
        {
            label: 'Electrónicos',
            field: 'electronicos',
        },
        {
            label: 'Joyería',
            field: 'joyeria',
        },
        {
            label: 'Juguetes',
            field: 'juguetes',
        },
        {
            label: 'Lamparas',
            field: 'lamparas',
        },
        {
            label: 'Mascotas',
            field: 'mascotas',
        },
        {
            label: 'Mobiliario',
            field: 'mobiliario',
        },
        {
            label: 'Movilidad',
            field: 'movilidad',
        },
        {
            label: 'Objetos inteligentes',
            field: 'objetosInteligentes',
        },
        {
            label: 'Portables',
            field: 'portables',
        },
        {
            label: 'Ropa',
            field: 'ropa',
        },
        {
            label: 'Sustentabilidad',
            field: 'sustentabilidad',
        },
        {
            label: 'Textiles',
            field: 'textiles',
        },
    ];

    return (
        <SelectTable 
        title={'AGREGAR CATEGORÍAS'}
        handleShowModal={handleShowModal}
        inputs={inputs}
        description={'Selecciona las categorías de productos que deseas desarrollar'}/>
    )
}

export default AddCategorys