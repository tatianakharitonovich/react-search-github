import {useContext} from 'react';
import {GithubContext} from '../context/github/githubContext';
import Search from '../components/Search';
import Card from '../components/Card';

function Home () {
	const {loarding, users, results} = useContext(GithubContext)


	return(
		<>
			<Search />
			<br/>
			<div className='row'>
				
				{loarding
					? <p className = 'text-center'>Загрузка...</p>
					: results && users.length === 0
						? <p className = 'text-center'>Пользователи с указанным имененем не найдены</p>
						: users.map(user => {
							return (
								<div className='col-sm-4 mb-4' key={user.id}>
									<Card user = {user}/>
								</div>
							)
					  	})
				}
			</div>
		</>
	)
}

export default Home;