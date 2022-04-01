import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app';

// import { store } from "./store/store";
import './localization/i18n';

ReactDOM.render(
	<React.StrictMode>
		<Suspense fallback={<div>Loading...</div>}>
			{/* <Provider store={store}> */}
			<App />
			{/* </Provider> */}
		</Suspense>
	</React.StrictMode>,
	document.getElementById('root'),
);
