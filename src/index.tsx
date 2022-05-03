import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bulma/css/bulma.css';
import './variables.scss';
import './index.scss';
// import 'bulma/sass/grid/_all.sass';
// import 'bulma/sass/elements/_all.sass';
import App from './App';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
