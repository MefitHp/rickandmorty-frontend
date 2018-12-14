import React, { Component, Fragment } from 'react'
import CharacterCard from './CharacterCard';
import { getAllCharacters } from '../../services/Api';


class CharacterList extends Component {
    state = {
        characters: []
    }

    componentWillMount = () => {
        getAllCharacters()
            .then(characters => this.setState({ characters }))
            .catch(err => console.log(err))
    }

    render() {
        const { characters } = this.state
        return (
            <Fragment>
                <h2 style={{ padding: '50px 20px', textAlign: 'center' }}>Rick and Morty character list:</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    {characters.map(character => (
                        <CharacterCard key={character.id} {...character} />
                    ))}
                </div>
            </Fragment>
        )
    }
}

export default CharacterList
