import React, {useState} from 'react';
import colorData from '../../data/color-data.json';
import ColorList from './ColorList';

function Chapter6Index1() {
  // const [colors] = useState(colorData.colors);
	const [colors, setColors] = useState(colorData.colors);
	return (
		<>
		<ColorList colors={colors} 
			onRemoveColor={(id) => {
				const newColors = colors.filter(color => color.id !== id);
				setColors(newColors);
			}}
			onRateColor={(id, rating) => {
				const newColors = colors.map(color => color.id === id? {...color, rating} : color);
				setColors(newColors);
			}}
		/>
		{/* <StarRating /> */}
		</>
	);
}

export default Chapter6Index1;
