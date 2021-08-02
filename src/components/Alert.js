import {useContext} from 'react';
import {AlertContext} from '../context/alert/alertContext';

function Alert () {
	const state  = useContext(AlertContext);

	if (!state.alert) return null

	return (
		<div className={`alert alert-${alert.type || 'secondary'} alert-dismissible`} 
			role="alert"
		>
  			{state.alert.text}
 			<button type="button" className="btn-close" aria-label="Close" onClick = {state.hide}></button>
		</div>
	)
}

export default Alert;
