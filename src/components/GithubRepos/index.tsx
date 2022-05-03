import React, { useEffect, useState } from 'react';
import './githubrepos.scss';

export default function GithubRepos() {
	const [repos, setRepos] = useState([]);

	useEffect(() => {
		fetch('https://api.github.com/users/ataege/repos')
			.then((res) => res.json())
			.then((d) => {
				let data = d.filter((x: any) => x.language && x.description);
				data = data.sort(
					(a: any, b: any) => b.stargazers_count - a.stargazers_count
				);
				setRepos(data.slice(0, 9));
			});
	});

	return (
		<div>
			<div className="title is-4 has-text-white has-text-centered">
				My repositories
			</div>
			<div className="columns is-multiline">
				{repos.map((repo: Record<string, any>) => (
					<div className="column is-one-third" key={repo.id}>
						<a href={`https://github.com/${repo.full_name}`}>
							<div className="box repoBox">
								<a
									href={`https://github.com/${repo.full_name}`}
									className="title is-4 mb-1"
								>
									<svg
										data-v-164b9d5f=""
										aria-label="Repository"
										viewBox="0 0 16 16"
										version="1.1"
										width="16"
										height="16"
										role="img"
										fill="#fafafa"
										className="octicon octicon-repo flex-shrink-0"
									>
										<path
											data-v-164b9d5f=""
											fill-rule="evenodd"
											d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
										></path>
									</svg>
									&nbsp;{repo.name}
								</a>
								<p className="description">{repo.description}</p>
								<div className="bottom mt-4">
									<div className="level is-mobile">
										<div className="level-left">
											<div className="content lang">
												<i className="'fab fa-' + faLang"></i> {repo.language}
											</div>
										</div>
										<div className="level-right starCount">
											<div className="content"></div>
										</div>

										<div className="level-right starCount">
											<div className="content">
												<i className="fa-solid fa-code-fork"></i>&nbsp;
												{repo.forks_count}
												&nbsp; &nbsp; &nbsp; &nbsp;
												<i className="far fa-star"></i>&nbsp;
												{repo.stargazers_count}
											</div>
										</div>
									</div>
								</div>
							</div>
						</a>
					</div>
				))}
			</div>
		</div>
	);
}
