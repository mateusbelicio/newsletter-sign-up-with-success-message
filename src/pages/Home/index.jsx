import desktopImage from '../../assets/illustration-sign-up-desktop.svg';
import mobileImage from '../../assets/illustration-sign-up-mobile.svg';
import SubscribeForm from '../../components/SubscribeForm';
import * as HomePage from './Home.styled';
import { device } from '../../styles/Theme';

const Home = () => {
	return (
		<HomePage.Main>
			<HomePage.Container>
				<HomePage.Picture>
					<source media={device.tablet} srcSet={desktopImage} />
					<img src={mobileImage} alt="Hero image" />
				</HomePage.Picture>
	
				<HomePage.Content>
					<h1>Stay updated!</h1>
					<p>Join 60,000+ product managers receiving monthly updates on:</p>
					<HomePage.List>
						<li><span>Product discovery and building what matters</span></li>
						<li><span>Measuring to ensure updates are a success</span></li>
						<li><span>And much more!</span></li>
					</HomePage.List>
					<SubscribeForm />
				</HomePage.Content>
			</HomePage.Container>
		</HomePage.Main>
	);
};

export default Home;
