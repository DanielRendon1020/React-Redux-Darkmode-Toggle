import { createSlice } from "@reduxjs/toolkit";

const mode1 = {
    headerColors: {
        background: '#ffffcc',
        color: '#dddddd'
    },
    darkMode: true,
    color1: '#293132',
    color2: '#474044',
    color3: '#4F5165',
    color4: '#547AA5',
    color5: '#50D8D7',
    photo: 'http://bitly.ws/DCN6'
}

const mode2 = {
    headerColors: {
        background: '#ffffcc',
        color: '#dddddd'
    },

    darkMode: false,
    color1: '#6E44FF',
    color2: '#B892FF',
    color3: '#FFC2E2',
    color4: '#FF90B3',
    color5: '#EF7A85',
    photo: 'https://placekitten.com/200/300'
}

const initialState = mode2

export const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        setDarkMode: () => {
            return mode1
        },
        setLightMode: () => {
            return mode2
        }
    }
})

export const { setDarkMode, setLightMode } = modeSlice.actions

export default modeSlice.reducer