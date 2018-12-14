import axios from 'axios'
const urlApi = 'https://rickandmortyapi.com/api/character'
const urlBack = 'http://localhost:3001/api'

export const getAllCharacters = () => {
    return axios.get(urlApi)
        .then(characters => characters.data.results)
        .catch(err => err.response)
}

export const getSingleCharacter = (id) => {
    return axios.get(urlApi + `/${id}`)
        .then(character => character.data)
        .catch(err => err.response)
}

export const loginUser = (user) => {
    return axios.post(urlBack + '/login', user, { withCredentials: true })
        .then(r => r.data)
        .catch(e => e.response)
}

export const signupUser = (user) => {
    return axios.post(urlBack + '/signup', user)
        .then(r => r.data)
        .catch(e => e.response)
}

export const getProfile = () => {
    return axios.get(urlBack + '/profile', { withCredentials: true })
        .then(r => r.data)
        .catch(e => {
            console.log(e)
            return e.response

        })
}

export const logOut = () => {
    return axios.get(urlBack + '/logout', { withCredentials: true })
        .then(r => r.data)
        .catch(e => {
            console.log(e)
            return e.response

        })
}