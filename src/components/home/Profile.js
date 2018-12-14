import React, { Component } from 'react'
import { getProfile, logOut } from '../../services/Api';
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom'

const { Meta } = Card;


export default class Profile extends Component {
    state = {
        user: {}
    }

    componentWillMount() {
        getProfile()
            .then(user => {
                this.setState({ user })
            }).catch(error => {
                console.log(error)
            })
    }

    getLoggedOut = () => {
        logOut().then(user => {
            localStorage.clear()
            this.props.history.push('/')
        }).catch(error => {
            console.log(error)
        })
    }
    render() {
        const { user } = this.state
        const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
        if (!loggedUser) this.props.history.push('/login')
        return (
            <div>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Card
                            style={{ width: 500, margin: 8 }}
                            cover={<img alt="example" src="https://images.thestar.com/LZ_Dgt1HJ1eHQA19NCUBv8cb7e4=/1086x724/smart/filters:cb(1522042446874)/https://www.thestar.com/content/dam/thestar/entertainment/movies/2014/10/16/fury_lets_sgt_brad_pitt_roll_on_as_history_meets_comic_book_review/fury.jpg" />}
                        >
                            <Meta
                                title={user.email}
                            />
                            <div style={{ margin: 5, padding: 5 }}>
                                <Button type="danger" onClick={this.getLoggedOut} block>Logout</Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}
