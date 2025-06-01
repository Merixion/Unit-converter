import { useState } from 'react';
import { useEffect } from 'react';
import '../../styles/menu.css';

function Mass() {
  const unit=
    {
      Граммы: { Граммы: 1, Килограммы: 0.001, Унции: 0.035, Фунты: 0.002 },
      Килограммы: { Граммы: 1000, Килограммы: 1, Унции: 35.27, Фунты: 2.21 },
      Унции: { Граммы: 28.35, Килограммы: 0.0284, Унции: 1, Фунты: 0.0625 },
      Фунты: { Граммы: 453.6, Килограммы: 0.454, Унции: 16, Фунты: 1 },
    }

  const [value, setValue] = useState();
  const [mass, setmass] = useState('Граммы');
  const [mass2, setmass2] = useState('Граммы');
  const [outpat, setOutpat] = useState(0);

  useEffect(() => {
    if (!value || !mass || !mass2) return;
    setOutpat((value * unit[mass][mass2]).toFixed(2));
  }, [value, mass, mass2]);
  return (
    <div>
      <select
        value={mass}
        onChange={e => setmass(e.target.value)}
        className='menu'
      >
        <option>Граммы</option>
        <option>Килограммы</option>
        <option>Унции</option>
        <option>Фунты</option>
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
        onChange={e => setmass2(e.target.value)}
        className='menu'
      >
        <option>Граммы</option>
        <option>Килограммы</option>
        <option>Унции</option>
        <option>Фунты</option>
      </select>
      <h1>{outpat}</h1>
    </div>
  );
}

export default Mass;
