import { createContext, useState } from 'react';

export const EmailContext = createContext();

const EmailProvider = ({children}) => {
	const [email, setEmail] = useState('ash@loremcompany.com');

	return (
		<EmailContext.Provider value={{ email, setEmail }}>
			{children}
		</EmailContext.Provider>
	);
};

export default EmailProvider;
