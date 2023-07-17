import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { GlobalStyles } from './styles/Global.jsx';
import ContextProviders from './contexts/index.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ContextProviders>
			<GlobalStyles />
			<App />
		</ContextProviders>
	</React.StrictMode>,
);
