import './App.css';
import { useEffect,
         useState } from 'react';
import PopulationTable from './components/populationTable/PopulationTable';
import PopulationChart from './components/populationChart/PopulationChart'

function App() {
  const [vehicles, setVehicles] = useState([]);

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
      })
    })
}

  useEffect(() => {
    fetchRes('https://swapi.dev/api/vehicles');

    // if(vehicles){
        let temp = vehicles;
        // temp = vehicles;
        console.log(temp)

        let max = vehicles.reduce((acc, curr) => acc.sum > curr.sum ? acc : curr);

        console.log(max)
        // console.log(temp)

        // let maxSum = 0;

        // temp.map(function(obj){     
        //   if (obj.sum > maxSum) maxSum = obj.sum;    
        // });
        // console.log(maxSum)
      // }
    }, [])

  return (
    <div className="App">
      {/* <PopulationTable vehicles={vehicles}/> */}
      {/* <PopulationChart/> */}
      {/* {
        pilots && pilots.map((p) => <h1>{p.name}</h1>)
      } */}
    </div>
  );
}

export default App;


