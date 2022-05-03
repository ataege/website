import './footer.scss';
import Socials from '../Socials';

export default function Footer() {
	return (
		<footer>
			<div className="container">
				<div className="level">
					<div className="level-left">
						<div className="content copyright has-text-centered">
							Copyright <i className="far fa-copyright"></i> Ata Ege
						</div>
					</div>
					<div className="level-right">
						<Socials />
					</div>
				</div>
			</div>
		</footer>
	);
}
