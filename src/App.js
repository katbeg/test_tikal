import './App.css';
import { useEffect,
         useState } from 'react';
import PopulationTable from './components/populationTable/PopulationTable';
import PopulationChart from './components/populationChart/PopulationChart'
import '../src/components/populationTable/PopulationTable.scss'

function App() {
  const [vehicles, setVehicles] = useState([]);
  const [biggest, setBiggest] = useState('');

  async function fetchRes(url) {
    let res = await fetch(url)
    let data = await res.json();
    data.results.map((v) => {
      if(v.pilots.length !== 0){
        setVehicles(vehicles.push({name:`${v.name}`, pilots: v.pilots}))
      }
    })
    if(data.next) fetchRes(data.next);
    countPopulation();
    // let temp = vehicles;
    // // console.log(temp);
    // biggest = temp.reduce((acc, curr) => acc.sum > curr.sum ? acc : curr);
    // // setBiggest(max);
    // console.log(biggest)
}

function countPopulation(){
    vehicles.map((v) => {
      let vehSum = 0;
      v.pilots.map((p) => {
        fetch(p)
          .then(response => response.json())
          .then(response => fetch(response.homeworld))
          .then(response => response.json())
          .then(response => setVehicles(v.sum = vehSum+= Number(response.population)))
          .then(setBiggest(vehicles.reduce((acc, curr) => acc.sum > curr.sum ? acc : curr)));
      })
    })
}

  useEffect(() => {
    fetchRes('https://swapi.dev/api/vehicles');
    }, [])

  return (
    <div className="App">
      {
        biggest&& <PopulationTable name={biggest.name} pilots={biggest.pilots} sum={biggest.sum}/>
      }

      <PopulationChart/>
    </div>
  );
}

export default App;


