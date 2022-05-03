import './index.scss';
import React from 'react';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import WhoAmIBox from './components/WhoAmIBox';
import Techs from './components/Techs';

function App() {
	return (
		<>
			<Navbar />
			<div className="container">
				<Banner />
				<div className="columns">
					<div className="column">
						<WhoAmIBox />
					</div>
					<div className="column">
						<Techs />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
