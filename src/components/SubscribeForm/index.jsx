import { useEffect, useId, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SubscribeForm = () => {
	const [value, setValue] = useState('');
	const [isDisabled, setIsDisabled] = useState(true);
	const [error, setError] = useState(false);
	const id = useId();
	const navigate = useNavigate();

	const isValidEmail = (email) => {
		const regexEmail = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
		return regexEmail.test(email);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!isValidEmail(value)) setError(true);
		else {
			setError(false);
			navigate('/success-message');
		}
	};

	useEffect(() => {
		setError(false);

		if (!value) setIsDisabled(true);
		else setIsDisabled(false); 
	}, [value]);

	return (
		<form onSubmit={handleSubmit} noValidate>
			<label htmlFor={id}>Email address</label>
			<input 
				type="email" 
				name="email" 
				id={id} 
				value={value} 
				onChange={(e) => setValue(e.target.value)}
				aria-invalid={error}
				aria-errormessage={`error-${id}`}
			/>
			{error && <span id={`error-${id}`}>Valid email required</span>}
			<button type="submit" disabled={isDisabled}>Subscribe to monthly newsletter</button>
		</form>
	);
};

export default SubscribeForm;


					
					