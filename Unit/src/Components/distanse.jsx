import { useState } from 'react';
import { useEffect } from 'react';
import '../styles/menu.css';

function Distant() {
	const unit=
		{
			Метры: { Метры: 1, Километры: 0.001, Ярды: 1.09, Миля: 0.0006 },
			Километры: { Метры: 1000, Километры: 1, Ярды: 1093, Миля: 0.62 },
			Ярды: { Метры: 0.9144, Километры: 0.0009, Ярды: 1, Миля: 0.0006 },
			Миля: { Метры: 1604.3, Километры: 1.609, Ярды: 1760, Миля: 1 },
		}

	const [value, setValue] = useState();
	const [dis, setDis] = useState('Метры');
	const [dis2, setDis2] = useState('Метры');
	const [outpat, setOutpat] = useState(0);

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
				<option>Метры</option>
				<option>Километры</option>
				<option>Ярды</option>
				<option>Миля</option>
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
				<option>Метры</option>
				<option>Километры</option>
				<option>Ярды</option>
				<option>Миля</option>
			</select>
			<h1>{outpat}</h1>
		</div>
	);
}

export default Distant;
