import {useContext, useState} from 'react';
import {AlertContext} from '../context/alert/alertContext';
import {GithubContext} from '../context/github/githubContext';

function Search () {

	const [value, setValue] = useState('');

	const alertState = useContext(AlertContext);

	const github = useContext(GithubContext);

	const onSubmit = (event) => {
		if (event.key ==='Enter') {
			if (value.trim()) {
				alertState.hide();
				github.search(value.trim());
			} else {
				github.clearUsers();
				alertState.show('Введите данные пользователя!')
			}
		}
 	}

	return (
		<div className = 'form-group'>
			<input
				type ='text'
				className = 'form-control'
				placeholder = 'Введите ник пользователя...'
				onKeyPress = {onSubmit}
				onChange = {(event) => setValue(event.target.value)} 
			/>
		</div>
	)
}

export default Search;
