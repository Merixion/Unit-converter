import { useState } from "react";
import styles from "./Selecting-a-size.module.css"
import Temperature from "../Temperature.jsx"
import Distant from "../distanse.jsx";
import Mass from "./Mass.jsx";
function SelectingASize(){
  const [value, setValue] = useState();

  return (
		<div>
			<h1 className={styles.choice}>Выберите величину:</h1>
			<select
				value={value}
				onChange={e => setValue(e.target.value)}
				className={styles.size}
			>
				<option>Температура</option>
				<option>Расстояние</option>
				<option>Масса</option>
			</select>
			{value === 'Температура' ? (
				<Temperature/>
			) : value === 'Расстояние' ? (
				<Distant/>
			) : (
				<Mass/>
			)}
		</div>
	);
}

export default SelectingASize;