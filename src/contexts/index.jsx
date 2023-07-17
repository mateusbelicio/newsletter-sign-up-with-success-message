import ThemeProvider from './ThemeContext.jsx';
import EmailProvider from './EmailContext.jsx';

const ContextProviders = ({ children }) => {
	return (
		<ThemeProvider>
			<EmailProvider>
				{children}
			</EmailProvider>
		</ThemeProvider>
	);
};

export default ContextProviders;
