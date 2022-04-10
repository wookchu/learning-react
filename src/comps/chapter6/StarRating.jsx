import React, { useState } from 'react';
import {FaStar} from 'react-icons/fa';

const Star = ({ selected = false, onSelect = f => f }) => {
	return (
		<FaStar color={selected? "red" : "grey"} onClick={onSelect} />
	);
}

const createArray = length => [...Array(length)];

// 4. 순수 컴포넌트로 전환하기 : 같은 프롭 - 같은 사용자 인터페이스 렌더링
export default function StarRating({ 
	totalStars = 5, 
	selectedStars = 0,
	onRate = f => f }) {
	return (<>
		{createArray(totalStars).map((n, i) => {
			return (
				<Star 
					key={i} 
					selected={selectedStars > i}
					onSelect={() => onRate(i+1)} />
			);
		})}
		<p>{selectedStars} / {totalStars}</p>
	</>);
}


// 3. Hooks로 상태만들기 & 상태 변경하기
// export default function StarRating({ totalStars = 5 }) {
// 	const [selectedStars, setSelectedStars] = useState(0);
// 	return (<>
// 		{createArray(totalStars).map((n, i) => {
// 			return (
// 				<Star 
// 					key={i} 
// 					selected={selectedStars > i} 
// 					onSelect={()=>setSelectedStars(i+1)} />
// 			);
// 		})}
// 		<p>{selectedStars} / {totalStars}</p>
// 	</>);
// }

// 2. 프로퍼티로 별 개수를 property로 받아서 출력
/*
function StarRatingComp({ totalStars = 5 }) {
	return createArray(totalStars).map((n, i) => <Star key={i} />);
}
*/

// 1. 기본 탬플릿, 가이드 만들기
/*
function StarRatingTemp() {
	return [
		<FaStar color="red" />,
		<FaStar color="red" />,
		<FaStar color="red" />,
		<FaStar color="grey" />,
		<FaStar color="grey" />
	];
}
*/