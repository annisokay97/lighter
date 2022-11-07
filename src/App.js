import useAxios from 'axios-hooks'
import { useEffect } from 'react';
import './App.css';
import { Loading } from './components/Loading/Loading.component';
import { Success } from './components/Success/Success.component';
import { Error } from './components/Error/Error.component';

function App() {

  const [{ data, loading, error }, refetch] = useAxios(
    'http://undefinedvariable.ddns.net:8888'
  )

  useEffect(() => {
    refetch()
  }, [])
  return (
    <div className="App">
      {loading && <Loading />}
      {data && <Success />}
      {error && <Error />}
    </div>
  );
}

export default App;
