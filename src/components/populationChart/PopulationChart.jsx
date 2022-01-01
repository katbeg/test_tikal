import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Chart from "./Chart";
import Bar from "./Bar";

export default function PopulationChart(){
    const [planets, setPlanets] = useState();
    const itemWidth = 40;

  // Distance between each bar
    const itemMargin = 5

    useEffect(() => {
        fetch('https://swapi.dev/api/planets/', {method: 'GET'})
            .then(response => response.json())
            .then(response => setPlanets(response.results))

    }, []);
    
    return(
        <>
            <Chart width={'500'} height='300'>
                {
                    planets && planets.map((p, index) => {
                        if(p.name === 'Tatooine' || p.name === 'Alderaan' || p.name === 'Naboo' || p.name === 'Bespin' || p.name === 'Endor') {
                            let height = p.population/10000000;
                            return <Bar
                                    key={p.name}
                                    name={p.name}
                                    population = {p.population}
                                    y={300 - height}
                                    x={index * (itemWidth + itemMargin)}
                                    y={0}
                                    width={itemWidth}
                                    height={height}
                                    />
                        }
                    })
                }
            </Chart>
        </>

     )
 }

