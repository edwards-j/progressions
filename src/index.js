import React from 'react';
import ReactDOM from 'react-dom';
import Progressions from './Progressions';
import { BrowserRouter as Router } from "react-router-dom"
import 'bulma/css/bulma.css'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <Progressions />
    </Router>, document.getElementById('root'));
registerServiceWorker();
