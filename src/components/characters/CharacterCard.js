import React from 'react'
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom'

const { Meta } = Card;

const CharacterCard = ({ id, image, name, species }) => {
    return (
        <div>
            <Card
                style={{ width: 300, margin: 8 }}
                cover={<img alt="example" src={image} />}
            >
                <Meta
                    title={name}
                    description={`Species: ${species}`}
                />
                <div style={{ margin: 5, padding: 5 }}>
                    <Button type="danger" block><Link to={`/characters/${id}`}>See detail</Link></Button>
                </div>
            </Card>
        </div>
    )
}

export default CharacterCard
