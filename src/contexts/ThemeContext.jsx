import { ThemeProvider as ThemeProv } from 'styled-components';
import { theme } from '../styles/Theme.jsx';

const ThemeProvider = ({ children }) => {
	return (
		<ThemeProv theme={theme}>
			{children}
		</ThemeProv>
	);
};
export default ThemeProvider;