import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.js'
import '../styles-sheets/vistaPrevia.css'
import { useSelector } from 'react-redux'

function VistaPrevia () {
    const informe = useSelector((state) => state.informe) 



    return(
    <>
        <h4 >Vista Previa</h4>
        <div className='vista-previa container shadow-lg '>
            <h2 className='titulo container' id='titulo'>
                "{informe.titulo}"
            </h2>
            <div className='header'>
            <img id='foto' src={informe.foto} alt='Foto' />
            <p className='name' id='name'>
                {informe.name}
            </p>
            </div>
            <div className='informe'>
                <p className='text-informe' id='informe'>
                   {informe.informe}
                </p>
            </div>
        </div>
    </>
    )
}

export default VistaPrevia 