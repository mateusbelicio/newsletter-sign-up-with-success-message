import { useContext, useEffect, useId, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { EmailContext } from '../../contexts/EmailContext';

import Button from '../Button';
import InputField from '../InputField';
import Form from './SubscribeForm.style';

const SubscribeForm = () => {
	const id = useId();
	const navigate = useNavigate();
	const { setEmail } = useContext(EmailContext);

	const [value, setValue] = useState('');
	const [isDisabled, setIsDisabled] = useState(true);
	const [error, setError] = useState(false);

	const isValidEmail = (email) => {
		const regexEmail = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
		return regexEmail.test(email.trim());
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!isValidEmail(value)) setError(true);
		else {
			setError(false);
			setEmail(value);
			navigate('/newsletter-sign-up-with-success-message/success-message');
		}
	};

	useEffect(() => {
		setError(false);

		if (!value) setIsDisabled(true);
		else setIsDisabled(false); 
	}, [value]);

	return (
		<Form onSubmit={handleSubmit} noValidate autoComplete='off'>
			<InputField 
				id={id}
				type={'email'}
				name={'email'}
				label={'Email address'}
				value={value}
				handleInput={(e) => setValue(e.target.value)}
				error={error}
				errorMsg={'Valid email required'}
				placeholder={'email@company.com'}
			/>
			<Button type="submit" disabled={isDisabled}>
				Subscribe to monthly newsletter
			</Button>
		</Form>
	);
};

export default SubscribeForm;


					
					