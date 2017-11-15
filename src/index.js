import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom' 

import './index.css';

import App from './components/App/App';


import registerServiceWorker from './registerServiceWorker';

const router = ( 
	<BrowserRouter>
    	<App />
  	</BrowserRouter>
 )

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
