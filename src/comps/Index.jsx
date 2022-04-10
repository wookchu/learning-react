import React from 'react';
import { Link } from 'react-router-dom';

export default function ExampleList() {
	return (<>
		<ul>
			<li>Chapter6
				<ul>
					<li><Link to='chapter6/1'>ColorList1</Link></li>
					<li><Link to='chapter6/2'>ColorList2</Link></li>
					<li><Link to='chapter6/3'>ColorList3</Link></li>
				</ul>
			</li>
		</ul>
	</>);
}