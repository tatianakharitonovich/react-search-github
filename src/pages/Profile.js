import {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {GithubContext} from '../context/github/githubContext';
import Repos from '../components/Repos';

function Profile ({match}) {
	const {getUser, getRepos, loarding, user, repos} = useContext(GithubContext);
	const urlName = match.params.name;

	useEffect(()=> {
		getUser(urlName);
		getRepos(urlName)
		// eslint-disable-next-line
	}, []);

	if (loarding) {
		return <p className='text-center'>Загрузка...</p>
	}

	const {
		name, company, avatar_url,
		location, bio, blog, login, 
		html_url, followers, following,
		public_repos, public_gists  
	} = user

	return(
		<>
			<Link to = '/' className = 'btn btn-link'>На главную</Link>
			<div className='card mb-4'>
				<div className = 'card-body'>
					<div className='row'>
						<div className='col-sm-3 text-center'>
							<img src={avatar_url} alt={name} width='150' />
							<h3>{name}</h3>
							{location && <p>Место положения: {location}</p>}
						</div>
						<div className='col'>
							{
								bio && <>
									<h3>BIO</h3>
									<p>{bio}</p>
								</>
							}
							<a 
								href={html_url}
								target='_blank'
								rel="noreferrer"
								className='btn btn-dark'
							>Открыть профиль</a>
							<ul>
								{login && <li>
									<strong>Username: </strong> {login}
								</li>}
								{company && <li>
									<strong>Компания: </strong> {company}
								</li>}
								{blog && <li>
									<strong>Website: </strong> {blog}
								</li>}
							</ul>
							<div className='badge bg-primary'>Подписчики: {followers}</div>
							<div className='badge bg-success'>Подписан: {following}</div>
							<div className='badge bg-info'>Репозитории: {public_repos}</div>
							<div className='badge bg-dark'>Gists: {public_gists}</div>
						</div>
					</div>
				</div>
			</div>
			<Repos repos={repos} />
		</>
	)
}

export default Profile;
