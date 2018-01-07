import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './components/home';
import Artist from './components/artist';
import ArtistList from './components/artistList'


const App = () =>{
    return(
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/artist/:artistid" component={Artist}/>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));