import './App.css';
import { useEffect,
         useState } from 'react';
import PopulationTable from './components/populationTable/PopulationTable';
import PopulationChart from './components/populationChart/PopulationChart'

function App() {
//   let temp = [];
//   const [pilots, setPilots] = useState([]);

//   async function fetchRes(url) {
//     let res = await fetch(url)
//     let data = await res.json();
//     if(data.next){
//       // setPilots([...pilots], [...data.results])
//       // setPilots(pilots.flat)
//       // setPilots([...pilots, ...data.results]);
//       // setPilots(pilots.push(data.results));  
//       temp.map((arr, i) => arr.concat(data.results[i]));
//       // temp.push(data.results);
//       // temp = unit;
      
//       fetchRes(data.next);
//      } 
//      //else {
//     //   setPilots
//     //   // setPilots(...pilots);
//     // }
//     // setPilots([...pilots, ...data.results]);
//     // setPilots(data.results);
// }
  
//   useEffect(() => {
//     fetchRes('https://swapi.dev/api/people')
//       // .then(temp.map((arr, i) => arr.concat(test1[i]))
//       .then(setPilots(temp));
//   }, [])



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
      <PopulationChart/>
    </div>
  );
}

export default App;


