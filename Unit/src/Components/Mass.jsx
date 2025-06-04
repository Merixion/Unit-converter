import { useState } from 'react';
import { useEffect } from 'react';
import '../styles/menu.css';

function Mass() {
  const unit=
    {
      г: { г: 1, кг: 0.001, у: 0.035, ф: 0.002 },
      кг: { г: 1000, кг: 1, у: 35.27, ф: 2.21 },
      у: { г: 28.35, кг: 0.0284, у: 1, ф: 0.0625 },
      ф: { г: 453.6, кг: 0.454, у: 16, ф: 1 },
    }

	const [history, setHistory] =useState(['']);
  const [value, setValue] = useState({});
  const [mass, setMass] = useState('г');
  const [mass2, setMass2] = useState('г');
  const [outpat, setOutpat] = useState(0);
	const [valueH, setValueH] = useState();
	
  function Shift(){
    setMass(mass2);
    setMass2(mass);
  }
  useEffect(() => {
    if (!value || !mass || !mass2) return;
    setOutpat((value * unit[mass][mass2]).toFixed(2));
  }, [value, mass, mass2, unit]);

	useEffect(() => {
		if (!isNaN(value))
			setHistory([...history, { value: `${mass} -> ${mass2}: ${value}` }]);
	}, [value, history, mass, mass2]);

	useEffect(() => {
		if (valueH !== '') setOutpat('2');
	}, [valueH]);
  return (
		<div>
			<select value={valueH} onChange={e => setValueH(e.target.value)}>
				{history.map(el => (
					<option>{el.value}</option>
				))}
			</select>
			<select
				value={mass}
				onChange={e => setMass(e.target.value)}
				className='menu'
			>
				<option>г</option>
				<option>кг</option>
				<option>у</option>
				<option>ф</option>
			</select>
			<input
				type='Number'
				value={value}
				onChange={e => setValue(e.target.value)}
				placeholder='Введите число'
				className='menu'
			></input>
			<select
				value={mass2}
				onChange={e => setMass2(e.target.value)}
				className='menu'
			>
				<option>г</option>
				<option>кг</option>
				<option>у</option>
				<option>ф</option>
			</select>
			<br></br>
			<button onClick={Shift} className='shift'>
				{'<->'}
			</button>
			<h1>
				{outpat} {mass2}
			</h1>
		</div>
	);
}

export default Mass;
