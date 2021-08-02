import {useReducer} from 'react';
import axios from 'axios';
import {GithubContext} from './githubContext';
import {githubReducer} from './githubReducer';
import {CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING, GET_RESULTS} from '../types';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIEND_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const withCreds = url => {
	return `${url}client_id=${CLIENT_ID}&client_secret=${CLIEND_SECRET}`
}


function GithubState ({children}) {
	const initialState = {
		user: {},
		users: [],
		loading: false,
		results: false,
		repos: []
	}
	const [state, dispatch] = useReducer(githubReducer, initialState);

	const search = async value => {
		setLoading();

		const response = await axios.get(
			withCreds(`https://api.github.com/search/users?q=${value}&`)
		)

		dispatch({
			type: GET_RESULTS
		})

		dispatch({
			type: SEARCH_USERS,
			payload: response.data.items
		})
	}

	const getUser = async name => {
		setLoading();

		const response = await axios.get(
			withCreds(`https://api.github.com/users/${name}?`)		
		)
		
		dispatch({
			type: GET_USER,
			payload: response.data
		})
	}

	const getRepos = async name => {
		setLoading();
		
		const response = await axios.get(
			withCreds(`https://api.github.com/users/${name}/repos?per_page=8&`)		
		)

		dispatch({
			type: GET_REPOS,
			payload: response.data
		})
	}

	const clearUsers = () => dispatch({type: CLEAR_USERS});
	
	const setLoading = () => dispatch({type: SET_LOADING});

	const {user, users, loading, repos, results} = state;
		
	return (
		<GithubContext.Provider value={{
			search, getUser, getRepos, clearUsers, setLoading,
			user, users, loading, repos, results
		}}>
			{children}
		</GithubContext.Provider>
	)
}

export default GithubState;