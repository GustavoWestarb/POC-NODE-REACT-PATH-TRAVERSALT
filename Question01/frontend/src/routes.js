import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './pages/Main';
import Download from './pages/Download';

export default function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Main} />
            <Route path="/download" exact component={Download} />
        </BrowserRouter>
    );
}