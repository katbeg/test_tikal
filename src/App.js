import './App.css';
import { useEffect,
         useState } from 'react';
import PopulationTable from './components/populationTable/PopulationTable';
import PopulationChart from './components/populationChart/PopulationChart'

function App() {
  let temp = [];
  const [vehicles, setVehicles] = useState([]);

  async function fetchRes(url) {
    let res = await fetch(url)
    let data = await res.json();
    // info_map = {}
    if(data.next){  
        data.results.map((v) => {
          if(v.pilots.length !== 0){
            temp = vehicles;
            //veh_name = vehicles.name
            //tmp_sum=0
            temp.push(v);
            v.pilots.forEach(e => {
              fetch(e)
                .then(response => response.json())
                .then(response => fetch(response.homeworld).then(response => response.json()))
                .then(response => console.log(response))
              //tmp_sum += response.populations  

            });
            setVehicles(temp);
            // info_map[veh_name] = tmp_sum
          }
        })   
      fetchRes(data.next);
    } 
}
  
  useEffect(() => {
    fetchRes('https://swapi.dev/api/vehicles');
    }, [])



  //     .then(response => {
  //       console.log(response)
  //       const data = [];
  //       planets.map((p) => {
  //        if(p.name === 'Tatooine' || p.name === 'Alderaan' || p.name === 'Naboo' || p.name === 'Bespin' || p.name === 'Endor') {
  //            data.push({name: p.name, population: p.population});
  //        }
  //        setPlanetsData(data);
  //        return data;
  //      });
  //     });
 

  return (
    <div className="App">
      {/* <PopulationTable/> */}
      {/* <PopulationChart/> */}
      {/* {
        pilots && pilots.map((p) => <h1>{p.name}</h1>)
      } */}
    </div>
  );
}

export default App;


