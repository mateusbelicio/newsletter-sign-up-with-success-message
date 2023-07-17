import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import SuccessMessage from './pages/SuccessMessage';

const baseUrl = '/newsletter-sign-up-with-success-message';

const router = createBrowserRouter([
	{
		path: `${baseUrl}/`,
		element: <Home />
	},
	{
		path: `${baseUrl}/success-message`,
		element: <SuccessMessage />
	},
]);


const App = () =>	<RouterProvider router={router} />;

export default App;
