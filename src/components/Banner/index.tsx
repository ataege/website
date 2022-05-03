import './banner.scss';
import Socials from '../Socials';

export default function Navbar() {
	return (
		<div className="banner">
			<div className="columns">
				<div className="column is-3">
					<div className="profile-picture">
						<img
							alt="Ata Ege profile picture."
							src="https://cdn.discordapp.com/avatars/320280473932922893/a_6cdbde3dfc3beae6f0d725cb61efa30c.gif?size=128"
						></img>
					</div>
				</div>
				<div className="column is-6">
					<div className="margin-top: 1.25rem">
						<h1 className="title is-1 has-text-centered-touch name">Ata Ege</h1>
						<h2 className="subtitle is-3 has-text-centered-touch job-title">
							Backend & Discord Developer
						</h2>
						<Socials />
					</div>
				</div>
				<div className="column is-3"></div>
			</div>
		</div>
	);
}
