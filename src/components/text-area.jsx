import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.js'
import { changeFoto, changeInforme, changeName, changeTitulo } from '../redux/informeSlice.js'
import '../styles-sheets/text-area.css'
import { useDispatch } from 'react-redux'

function TextArea () {

    const dispatch = useDispatch()

    const chTitulo = () => {
        dispatch(changeTitulo(document.getElementById('Titulo').value))
    }
    const chNombre = () => {
        dispatch(changeName(document.getElementById('Nombre').value))
    }

    const chFoto = () => {
        dispatch(changeFoto(document.getElementById('Foto').value))
    }

    const chInforme = () => {
        dispatch(changeInforme(document.getElementById('Informe').value))
    }

    const chFa1 = () => {
        document.getElementById('titulo').className='titulo font1'
    }
    const chFa2 = () => {
        document.getElementById('titulo').className='titulo font2'
    }
    const chFa3 = () => {
        document.getElementById('titulo').className='titulo font3'
    }
    const chFa4 = () => {
        document.getElementById('titulo').className='titulo font4'
    }

    const chFb1 = () => {
        document.getElementById('name').className='name font1'
    }
    const chFb2 = () => {
        document.getElementById('name').className='name font2'
    }
    const chFb3 = () => {
        document.getElementById('name').className='name font3'
    }
    const chFb4 = () => {
        document.getElementById('name').className='name font4'
    }

    const chFc1 = () => {
        document.getElementById('informe').className='text-informe font1'
    }
    const chFc2 = () => {
        document.getElementById('informe').className='text-informe font2'
    }
    const chFc3 = () => {
        document.getElementById('informe').className='text-informe font3'
    }
    const chFc4 = () => {
        document.getElementById('informe').className='text-informe font4'
    }


    return (
        <div className='mb-3 text-area contanier'>
            <h4  id='editor'>Editor</h4>
            <div className='editor contaier d-flex'>
                <div className='input-area'>
                    <input id='Titulo' type='text' placeholder='Titulo' onChange={chTitulo}  />
                    <div className='btn-group'>
                    <button type='button' className='btn'>Font</button>
                    <button type='button' className='btn dropdown-toggle dropdown-toggle-split' data-bs-toggle='dropdown' aria-expanded='false'>
                        <span className='visually-hidden'>Toggle Dropdown</span>
                    </button>
                    <ul className='dropdown-menu'>
                        <li onClick={chFa1}  className='font1'>Poetsen One</li>
                        <li onClick={chFa2}  className='font2'>Sedan SC</li>
                        <li onClick={chFa3} className='font3'>Raleway</li>
                        <li onClick={chFa4} className='font4'>Briem Hand</li>
                    </ul>
                    </div>
                </div>
                <div classNameName='input-area container'>
                    <input id='Nombre' type='text' placeholder='Nombre' onChange={chNombre}  />
                    <div className='btn-group'>
                    <button type='button' className='btn'>Font</button>
                    <button type='button' className='btn dropdown-toggle dropdown-toggle-split' data-bs-toggle='dropdown' aria-expanded='false'>
                        <span className='visually-hidden'>Toggle Dropdown</span>
                    </button>
                    <ul className='dropdown-menu'>
                        <li onClick={chFb1} className='font1'>Poetsen One</li>
                        <li onClick={chFb2} className='font2'>Sedan SC</li>
                        <li onClick={chFb3} className='font3'>Raleway</li>
                        <li onClick={chFb4} className='font4'>Briem Hand</li>
                    </ul>
                    </div>
                </div>
                    <input id='Foto' type='text' placeholder='Foto URL' onChange={chFoto}  />
                    
                <div className='input-area container' >
                <textarea id='Informe' type='text' placeholder='Escribe tu informe' onChange={chInforme}/>
                <div className='btn-group'>
                    <button type='button' className='btn'>Font</button>
                    <button type='button' className='btn dropdown-toggle dropdown-toggle-split' data-bs-toggle='dropdown' aria-expanded='false'>
                        <span className='visually-hidden'>Toggle Dropdown</span>
                    </button>
                    <ul className='dropdown-menu'>
                        <li onClick={chFc1} id='c1' className='font1'>Poetsen One</li>
                        <li onClick={chFc2} id='c2' className='font2'>Sedan SC</li>
                        <li onClick={chFc3} id='c3' className='font3'>Raleway</li>
                        <li onClick={chFc4} id='c4' className='font4'>Briem Hand</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextArea