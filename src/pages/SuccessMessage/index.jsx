import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { EmailContext } from '../../contexts/EmailContext';

import * as SMPage from './SuccessMessage.style';
import Button from '../../components/Button';
import successIcon from '../../assets/icon-success.svg';

const SuccessMessage = () => {
	const { email } = useContext(EmailContext);
	const baseUrl = '/newsletter-sign-up-with-success-message/';

	return (
		<SMPage.Main>
			<SMPage.Container>
				<SMPage.Content>
					<img src={successIcon} alt="" />
					<h1>Thanks for subscribing!</h1>
					<p>A confirmation email has been sent to <span>{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
				</SMPage.Content>
				<Button as={Link} to={baseUrl}>Dismiss message</Button>
			</SMPage.Container>
		</SMPage.Main>
	);
};

export default SuccessMessage;
