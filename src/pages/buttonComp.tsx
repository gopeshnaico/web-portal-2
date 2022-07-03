import React from 'react';
import styles from './index.module.scss';

const buttonComp = ({ size, children }) => {
	return (
		<div>
			<div className="text-green-800 font-bold text-center">Test File</div>
			<button className="btn btn-primary">Button</button>
			<button className={` btn btn-primary ${size} `}>{children}</button>
		</div>
	);
};

export default buttonComp;
