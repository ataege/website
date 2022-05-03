import './whoamibox.scss';

export default function WhoAmIBox() {
	return (
		<div className="box bg-color-secondary min-370px-height who-am-i  ">
			<p className="heading has-text-centered">Who am I?</p>
			<br />
			<p className="whoami-text">
				I'm a high school student from Turkey who enjoys coding. I create
				programs that are both secure and simple to use. I primarily work on
				backend and Discord bots. I'm attempting to learn as much as possible.
				In most of my projects, I utilize discord.js and Nest.js.
			</p>
		</div>
	);
}
