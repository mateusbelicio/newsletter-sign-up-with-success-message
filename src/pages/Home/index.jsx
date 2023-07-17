import desktopImage from '../../assets/illustration-sign-up-desktop.svg';
import mobileImage from '../../assets/illustration-sign-up-mobile.svg';
import SubscribeForm from '../../components/SubscribeForm';
import { device } from '../../styles/Theme';

const Home = () => {
	return (
		<main>
			<picture>
				<source media={device.tablet} srcSet={desktopImage} />
				<img src={mobileImage} alt="Hero image" />
			</picture>

			<div className="content">
				<h1>Stay updated!</h1>
				<p>Join 60,000+ product managers receiving monthly updates on:</p>

				<ul>
					<li>Product discovery and building what matters</li>
					<li>Measuring to ensure updates are a success</li>
					<li>And much more!</li>
				</ul>

				<SubscribeForm />
			</div>
		</main>
	);
};

export default Home;
