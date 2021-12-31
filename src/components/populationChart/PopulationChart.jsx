import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Chart from "./Chart";
import Bar from "./Bar";

export default function PopulationChart(){
    const [planets, setPlanets] = useState();
    const [data, setData] = useState();
    const itemWidth = 20

  // Distance between each bar
    const itemMargin = 5



    useEffect(() => {
        fetch('https://swapi.dev/api/planets/', {method: 'GET'})
            .then(response => response.json())
            .then(response => setPlanets(response.results))

    }, []);
    
     
    return(
        <>
            <Chart width='500' height='300'>
                {
                    planets && planets.map((p, index) => {
                        if(p.name === 'Tatooine' || p.name === 'Alderaan' || p.name === 'Naboo' || p.name === 'Bespin' || p.name === 'Endor') {
                            return <Bar
                                key={p.name}
                                x={index * (itemWidth + itemMargin)}
                                y={0}
                                width={itemWidth}
                                height={(p.population)}
                            />
                        }
                        <p>{p.name}</p>
                    }

                    )
                }
            </Chart>
        </>

     )
 }

