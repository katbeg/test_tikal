import React, { useEffect } from "react";
import { useState } from "react";
import './PopulationTable.scss'

export default function PopulationTable(props){

    const [planetNames, setPlanetNames] = useState([]);
    const [pilotNames, setPilotNames] = useState([]);
    const [flag, setFlag] = useState(false);

    async function fetchPilots(url){
        let res = await fetch(url);
        let data = await res.json();

        let temp = [];

        let tempPlanets = [];

            temp.push(data.name);
            setPilotNames(temp);
            tempPlanets = planetNames;
            fetch(data.homeworld)
                .then(response => response.json())
                .then(response => tempPlanets.push(response))
                .then(setPlanetNames(tempPlanets))
                .then(setFlag(true))
    }

    useEffect(() => {
        props.pilots.map((p) => {
            fetchPilots(p);
        })
    }, [])


    return(
        <>
        { flag ?
            <table>
                <tbody className="popTable">
                    <tr className="popTable__row">
                        <td>Vehicle name with the largest sum</td>
                        <td>{props.name}</td>
                    </tr>
                    <tr className="popTable__row">
                        <td>Related home planets and their respective population</td>
                        <td>
                            {
                                planetNames.map((p, index) => <p key={index}>{p.name} {p.population}</p>)
                            }
                        </td>
                    </tr>
                    <tr className="popTable__row">
                        <td>Related pilot names</td>
                        <td>
                            {
                                pilotNames.map((p, index) => <p key={index}>{p}</p>)
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
            : <p>Loading...</p>
            }
        </>
    )
}