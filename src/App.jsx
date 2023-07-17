import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import SuccessMessage from './pages/SuccessMessage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/success-message',
		element: <SuccessMessage />
	}
]);


const App = () =>	<RouterProvider router={router} />;

export default App;
