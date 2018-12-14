import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home/Home';
import CharacterList from './components/characters/CharacterList';
import CharacterDetail from './components/characters/CharacterDetail';
import AuthComponent from './components/auth/AuthComponent';
import Profile from './components/home/Profile';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/characters" component={CharacterList} />
        <Route path="/characters/:id" component={CharacterDetail} />
        <Route path="/signup" component={AuthComponent} />
        <Route path="/login" component={AuthComponent} />
        <Route path="/profile" component={Profile} />
    </Switch>
)

export default Routes