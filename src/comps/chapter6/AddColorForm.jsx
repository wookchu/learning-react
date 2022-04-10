import React, { useRef, useState } from 'react';
import { useInput } from '../../hooks/UseInput';

// 6.5.3 custmo hooks
export default function AddColorForm({ onNewColor = f => f }) {
	const [titleProps, resetTitle] = useInput('');
	const [colorProps, resetColor] = useInput('#000000');
	
	const submit = e => {
		e.preventDefault();
		onNewColor(titleProps.value, colorProps.value);
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

// 6.5.2. 제어되는 컴포넌트
/*export default function AddColorForm({ onNewColor = f => f }) {
	const [title, setTitle] = useState('');
	const [color, setColor] = useState('#000000');
	
	const submit = e => {
		e.preventDefault();
		onNewColor(title, color);
		setTitle('');
		setColor('');
	};

	return (<>
		<form onSubmit={submit}>
			<input 
				value={title}
				type="text" 
				placeholder="color title" 
				onChange={e => setTitle(e.target.value)}
				required />
			<input 
				value={color} 
				type="color" 
				onChange= {e => setColor(e.target.value)}
				required/>
			<button>ADD</button>
		</form>
	</>);
}*/

//6.5.1. 제어되지 않는 컴포넌트
/*export default function AddColorForm({ onNewColor = f => f }) {
	const txtTitle = useRef();
	const hexColor = useRef();
	
	const submit = e => {
		e.preventDefault();

		const title = txtTitle.current.value;
		const color = hexColor.current.value;

		onNewColor(title, color);

		txtTitle.current.value = '';
		hexColor.current.value = '';
	};

	return (<>
		<form onSubmit={submit}>
			<input ref={txtTitle} type="text" placeholder="color title" required/>
			<input ref={hexColor} type="color" required/>
			<button>ADD</button>
		</form>
	</>);
}*/