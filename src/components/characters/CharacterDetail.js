import React, { Component } from 'react'
import { getSingleCharacter } from '../../services/Api';
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom'

const { Meta } = Card;


class CharacterDetail extends Component {
    state = {
        character: {}
    }

    componentWillMount = () => {
        const { id } = this.props.match.params
        getSingleCharacter(id)
            .then(character => this.setState({ character }))
            .catch(err => console.log(err))
    }

    render() {
        const { character } = this.state
        console.log(character)
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Card
                    style={{ width: 500, margin: 8 }}
                    cover={<img alt="example" src={character.image} />}
                >
                    <Meta
                        title={character.name}
                        description={`Species: ${character.species}`}
                    />
                    <div style={{ margin: 5, padding: 5 }}>
                        <p><strong>Status: </strong> {character.status}</p>
                        <p><strong>Gender: </strong> {character.gender}</p>
                        <p><strong>Type: </strong>{character.type === '' ? 'Not defined' : character.type}</p>
                        <Button type="danger" block><Link to={`/characters`}>return</Link></Button>
                    </div>
                </Card>
            </div>
        )
    }
}

export default CharacterDetail