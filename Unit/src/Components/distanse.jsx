import { useState } from 'react';
import { useEffect } from 'react';
import '../styles/menu.css';

function Distant() {
	const unit=
		{
			м: { м: 1, км: 0.001, Я: 1.09, ми: 0.0006 },
			км: { м: 1000, км: 1, Я: 1093, ми: 0.62 },
			Я: { м: 0.9144, км: 0.0009, Я: 1, ми: 0.0006 },
			ми: { м: 1604.3, км: 1.609, Я: 1760, ми: 1 },
		}

	const [value, setValue] = useState();
	const [dis, setDis] = useState('м');
	const [dis2, setDis2] = useState('м');
	const [outpat, setOutpat] = useState(0);

	function Shift(){
		setDis(dis2);
		setDis2(dis);
	}

	useEffect(() => {
		if (!value || !dis || !dis2) return;
		setOutpat((value * unit[dis][dis2]).toFixed(2));
	}, [value, dis, dis2]);
	return (
		<div>
			<select
				value={dis}
				onChange={e => setDis(e.target.value)}
				className='menu'
			>
				<option>м</option>
				<option>км</option>
				<option>Я</option>
				<option>ми</option>
			</select>
			<input
				type='Number'
				value={value}
				onChange={e => setValue(e.target.value)}
				placeholder='Введите число'
				className='menu'
			></input>
			<select
				value={dis2}
				onChange={e => setDis2(e.target.value)}
				className='menu'
			>
				<option>м</option>
				<option>км</option>
				<option>Я</option>
				<option>ми</option>
			</select>
			<br></br>
			<button className='shift' onClick={Shift}>{'<->'}</button>
			<h1>{outpat} {dis2}</h1>
		</div>
	);
}

export default Distant;
