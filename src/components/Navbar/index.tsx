import './navbar.scss';
import React from 'react';

export default function Navbar() {
	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="container">
				<div className="navbar-brand">
					<a className="navbar-item" href="/">
						ataege.dev
					</a>
					{
						// eslint-disable-next-line jsx-a11y/anchor-is-valid
					}<a
						role="button"
						className="navbar-burger"
						aria-label="menu"
						aria-expanded="false"
						data-target="navbarBasicExample"
					>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>

				<div className="navbar-end" id="end">
					<div className="navbar-item">
						<a href="/">Home</a>
					</div>
					<div className="navbar-item">
						<a href="/blog">Blog</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
