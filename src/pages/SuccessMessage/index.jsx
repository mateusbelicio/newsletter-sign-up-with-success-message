import { Link } from 'react-router-dom';

const SuccessMessage = () => {
	return (
		<main>
			<h1>Thanks for subscribing!</h1>
			<p>A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription.</p>
			<Link to='/'>Dismiss message</Link>
		</main>
	);
};

export default SuccessMessage;
