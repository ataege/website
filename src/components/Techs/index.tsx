import React from 'react';
import './techs.scss';

export default function Techs() {
	return (
		<div className="box bg-color-secondary min-370px-height techs">
			<p className="heading has-text-centered techs-title">
				Technologies I Use
			</p>
			<br />
			<div className="columns is-multiline">
				<div className="column is-half">
					<div className="box language">
						<i className="fab fa-js-square language-icon"></i>
						<span className="language-text">JavaScript & TypeScript</span>
					</div>
				</div>
				<div className="column is-half">
					<div className="box language">
						<i className="fab fa-node-js language-icon"></i>
						<span className="language-text">Node.js</span>
					</div>
				</div>
				<div className="column is-half">
					<div className="box language">
						<i className="fab fa-golang language-icon"></i>
						<span className="language-text">Golang</span>
					</div>
				</div>
				<div className="column is-half">
					<div className="box language">
						<i className="fab fa-html5 language-icon"></i>
						<span className="language-text">HTML5</span>
					</div>
				</div>
				<div className="column is-half">
					<div className="box language">
						<i className="fab fa-react language-icon"></i>
						<span className="language-text">React</span>
					</div>
				</div>
				<div className="column is-half">
					<div className="box language">
						<i className="fab fa-sass language-icon"></i>
						<span className="language-text">Sass</span>
					</div>
				</div>
			</div>
		</div>
	);
}
