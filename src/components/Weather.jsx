import PropTypes from 'prop-types';

const Weather = ({ result }) => {
  //Validar si el objeto tiene contenido
  if (Object.keys(result).length === 0) return null;

  //Kelvin a Centigrados
  const ktoc = temp => {
    const kelvin = 273.15;

    return (temp - kelvin).toFixed(2);
  };

  const { name, main } = result;
  return (
    <div className='card-panel white col s12'>
      <div className='black-text'>
        <h2>El clima de {name} es:</h2>
        <p className='temperatura'>
          {ktoc(main.temp)} <span>&#x2103;</span>
        </p>
        <div className='more-info'>
          <small>
            Temperatura minima
            <span>{ktoc(main.temp_min)} &#x2103;</span>
          </small>
          <small>
            Temperatura máxima
            <span>{ktoc(main.temp_max)} &#x2103;</span>
          </small>
        </div>
      </div>
    </div>
  );
};

Weather.propTypes = {
  result: PropTypes.object.isRequired,
};

export default Weather;
