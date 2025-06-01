import { useState } from "react";
import { useEffect } from "react";
import '../styles/menu.css'

function Temperature() {
  const [value, setValue] = useState();
  const [temp, setTemp] = useState("Целсий");
  const [outpat, setOutpat] = useState(0);
  useEffect(() =>{
    if (!value || !temp) return;
    if (temp === 'Целсий') setOutpat((value * 33.8).toFixed(2));
		else setOutpat((value / 33.8).toFixed(2));
  }, [value, temp])
	return (
		<div>
			<select
				value={temp}
				onChange={e => setTemp(e.target.value)}
				className='menu'
			>
				<option>Целсий</option>
				<option>Фаренгейтов</option>
			</select>
			<input
				type='Number'
				value={value}
				onChange={e => setValue(e.target.value)}
				placeholder='Введите число'
				className='menu'
			></input>
			<h1>{outpat}</h1>
		</div>
	);
}

export default Temperature;
