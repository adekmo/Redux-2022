import axios from 'axios';

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";
export const ADD_KONTAK = "ADD_KONTAK";


export const getListKontak = () => {
    console.log('2. masuk action');
    return (dispatch) => {

        //loading
        dispatch({
            type : GET_LIST_KONTAK,
            payload : {
                loading : true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method : 'GET',
            url : 'http://localhost:8000/kontaks',
            timeout : 120000
        })
        .then((response) =>{
            console.log('3. berhasil : ', response);
            //berhasil get API
            dispatch({
                type : GET_LIST_KONTAK,
                payload : {
                    loading : false,
                    data: response.data,
                    errorMessage: false
                }
            })
        })
        .catch((error) => {
            console.log('3. gagal : ', error);
            //gagal get API
            dispatch({
                type : GET_LIST_KONTAK,
                payload : {
                    loading : false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
    }
}

export const addKontak = (data) => {

    return (dispatch) => {

        //loading
        dispatch({
            type : ADD_KONTAK,
            payload : {
                loading : true,
                data: false,
                errorMessage: false
            }
        })

        //post API
        axios({
            method : 'POST',
            url : 'http://localhost:8000/kontaks',
            timeout : 120000,
            data : data
        })
        .then((response) =>{

            //berhasil get API
            dispatch({
                type : ADD_KONTAK,
                payload : {
                    loading : false,
                    data: response.data,
                    errorMessage: false
                }
            })
        })
        .catch((error) => {

            //gagal get API
            dispatch({
                type : ADD_KONTAK,
                payload : {
                    loading : false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
    }
}

