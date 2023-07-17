import desktopImage from '../../assets/illustration-sign-up-desktop.svg';
import mobileImage from '../../assets/illustration-sign-up-mobile.svg';
import { device } from '../../styles/Theme';

const Home = () => {
	return (
		<main>
			<picture>
				<source media={device.tablet} srcSet={desktopImage} />
				<img src={mobileImage} alt="Hero image" />
			</picture>

			<h1>Stay updated!</h1>
			<p>Join 60,000+ product managers receiving monthly updates on:</p>

			<ul>
				<li>Product discovery and building what matters</li>
				<li>Measuring to ensure updates are a success</li>
				<li>And much more!</li>
			</ul>

			<form>
				<div>
					<label htmlFor="email">Email address</label>
					<input type="email" name="email" id="in-email" />
					<span>Valid email required</span>
				</div>
				<button type="submit">Subscribe to monthly newsletter</button>
			</form>
		</main>
	);
};

export default Home;
