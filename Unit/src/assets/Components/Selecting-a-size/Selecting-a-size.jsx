import { useState } from "react";
import styles from "./Selecting-a-size.module.css"
function SelectingASize(){
  const [value, setValue] = useState();

  return (
		<div>
			<h1>Выберите величину:</h1>
			<select value={value} onChange={e => setValue(e.target.value)} className={styles.size}>
				<option>Температура</option>
				<option>Расстояние</option>
				<option>Масса</option>
			</select>
		</div>
	);
}

export default SelectingASize;