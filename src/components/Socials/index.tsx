import './socials.scss';
import React from 'react';

export default function Socials() {
	return (
		<div className="socials has-text-centered-mobile">
			<a href="https://github.com/ataege">
				<span className="icon social">
					<i className="fab fa-github"></i>
				</span>
			</a>
			<a href="https://twitter.com/ataegeasilturk">
				<span className="icon social">
					<i className="fab fa-twitter"></i>
				</span>
			</a>
			<a href="https://discord.com/users/320280473932922893">
				<span className="icon social">
					<i className="fab fa-discord"></i>
				</span>
			</a>
			<a href="https://www.linkedin.com/in/ata-ege-asilt%C3%BCrk-767900208/">
				<span className="icon social">
					<i className="fab fa-linkedin"></i>
				</span>
			</a>
		</div>
	);
}
