import {useState} from 'react';

// custom hook
export const useInput = initialValue => {
	const [value, setValue] = useState(initialValue);
	return [
		{ value, onChange: e => setValue(e.target.value) },
		() => setValue(initialValue),
	];
}