import React, { useState, useEffect } from 'react';
import Error from './components/Error';
import Form from './components/Form';
import Header from './components/Header';
import Weather from './components/Weather';

const initialSearch = {
  city: '',
  country: '',
};

function App() {
  //States
  const [search, setSearch] = useState(initialSearch);
  const [consult, setConsult] = useState(false);
  const [result, setResult] = useState({});
  const [error, setError] = useState(false);

  //Destructuración
  const { city, country } = search;

  useEffect(() => {
    const getWeather = async () => {
      try {
        if (!consult) return;

        const key = import.meta.env['VITE_APP_KEY'];
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${key}`;

        const res = await fetch(url);

        if (!res.ok) {
          setError(true);
          setConsult(false);

          throw new Error(res.statusText);
        }

        const data = await res.json();

        setError(false);
        setConsult(false);

        setResult(data);
      } catch (error) {
        console.log(error);
      }
    };

    getWeather();
  }, [consult]);

  return (
    <>
      <Header title='Clima React App' />
      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Form
                search={search}
                setSearch={setSearch}
                setConsult={setConsult}
              />
            </div>
            <div className='col m6 s12'>
              <Weather result={result} />

              {error && (
                <Error text={`No se encontraron resultados del clima`} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
