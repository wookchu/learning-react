import React from 'react';
import { useColors } from "../../context/ColorProvider";
import Color from './ColorWithContext';

export default function ColorList() {
	const {colors} = useColors();

	if(!colors.length) return <div>표시할 색이 없습니다.</div>;
	return (
		<div>
			{colors.map(color => <Color key={color.id} {...color} />)}
		</div>
	)
}