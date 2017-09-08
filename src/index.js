import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './views/layout';
import registerServiceWorker from './registerServiceWorker';

import './application.css'

ReactDOM.render(<Layout />, document.getElementById('root'));
registerServiceWorker();
