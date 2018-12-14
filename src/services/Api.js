import axios from 'axios'
const url = 'https://rickandmortyapi.com/api/character'

export const getAllCharacters = () => {
    return axios.get(url)
        .then(characters => characters.data.results)
        .catch(err => err.response)
}

export const getSingleCharacter = (id) => {
    return axios.get(url + `/${id}`)
        .then(character => character.data)
        .catch(err => err.response)
}