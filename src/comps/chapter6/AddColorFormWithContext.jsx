import React from 'react';
import { useColors } from "../../context/ColorProvider";
import { useInput } from '../../hooks/UseInput';

// with context
export default function AddColorForm() {
	const [titleProps, resetTitle] = useInput('');
	const [colorProps, resetColor] = useInput('#000000');
	const {addColor} = useColors();
	
	const submit = e => {
		e.preventDefault();
		addColor(titleProps.value, colorProps.value);
		resetTitle();
		resetColor();
	};

	return (<>
		<form onSubmit={submit}>
			<input 
				{...titleProps}
				type="text" 
				placeholder="color title" 
				required />
			<input 
				{...colorProps}
				type="color" 
				required/>
			<button>ADD</button>
		</form>
	</>);
}