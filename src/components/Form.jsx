import { useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Form = ({ search, setSearch, setConsult }) => {
  //States
  const [error, setError] = useState(false);

  //Extraer keys del estado
  const { city, country } = search;

  const handleChange = e => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    //Validar si los valores no estan vacíos
    for (const key in search) {
      if (search[key].trim() === '') {
        setError(true);
        return;
      }
    }

    //Todo correcto
    setError(false);

    //Validar consulta
    setConsult(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error text='Todos los campos son obligatorios' /> : null}

      <div className='input-field col s12'>
        <input
          type='text'
          name='city'
          id='city'
          value={city}
          onChange={handleChange}
          autoComplete='nope'
        />
        <label htmlFor='city'>Ciudad:</label>
      </div>
      <div className='input-field col s12'>
        <select
          name='country'
          id='country'
          value={country}
          onChange={handleChange}
          autoComplete='nope'>
          <option value=''>Selecciona un país</option>
          <option value='US'>Estados Unidos</option>
          <option value='MX'>México</option>
          <option value='AR'>Argentina</option>
          <option value='CO'>Colombia</option>
          <option value='CR'>Costa Rica</option>
          <option value='ES'>España</option>
          <option value='PE'>Perú</option>
          <option value='VE'>Venezuela</option>
        </select>
        <label htmlFor='country'>Ciudad:</label>
      </div>

      <div className='input-field col s12'>
        <button
          type='submit'
          className='btn-large btn-block waves-effect wave-light yellow black-text accent-4 col s12 '>
          Buscar clima
        </button>
      </div>
    </form>
  );
};

Form.propTypes = {
  search: PropTypes.object.isRequired,
  setSearch: PropTypes.func.isRequired,
  setConsult: PropTypes.func.isRequired,
};

export default Form;
