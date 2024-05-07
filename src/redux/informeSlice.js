import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    titulo:'Aquí ira tu titulo',
    name:'Aquí ira tu nombre',
    foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFv_rUJ2Ru3GR0Jxy2YTNH_jrVzX3_HY-THQ&s',
    informe:'Aquí ira tu informe'
}

export const informeSlice = createSlice({
    name:'informe',
    initialState,
    reducers:{
        changeTitulo:(state, action) => {
            state.titulo = action.payload
        },
        changeName:(state, action) => {
            state.name = action.payload
        },
        changeFoto:(state, action) => {
            state.foto= action.payload
        },
        changeInforme:(state, action) => {
            state.informe= action.payload
        }
    }
    
})

export const {changeTitulo, changeName, changeFoto, changeInforme} = informeSlice.actions
export default informeSlice.reducer