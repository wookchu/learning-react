import React from 'react';
import StarRating from './StarRating';
import {FaTrash} from 'react-icons/fa';
import { useColors } from "../../context/ColorProvider";

export default function Color({id, title, color, rating}) {
	const {removeColor, rateColor} = useColors();
	return (
		<section>
			<h1>{title}</h1>
			<button onClick={() => removeColor(id)}>
				<FaTrash />
			</button>
			<div style={{height:50, backgroundColor: color}} />
			<StarRating selectedStars={rating} onRate={rating => rateColor(id, rating)}/>
		</section>
	)
}