import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css'
import {AppProvider} from './context_api/context'

ReactDOM.render(
	<AppProvider>
		<React.StrictMode>
    		<App />
  		</React.StrictMode>
	</AppProvider>,
  	document.getElementById('root')
);
