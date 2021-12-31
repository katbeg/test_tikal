import React from "react";
import { useState } from "react";

export default function PopulationTable(props){
    const [vehicleName, setVehicleName] = useState('vehicleName');
    // const [vehicleName, setVehicleName] = useState(props);
    // const [vehicleName, setVehicleName] = useState(props);

    
    return(
        <>
            <table>
                <tbody>
                    <tr>
                        <td>Vehicle name with the largest sum</td>
                        <td>{vehicleName}</td>
                    </tr>
                    <tr>
                        <td>Related home planets and their respective population</td>
                        <td>planets</td>
                    </tr>
                    <tr>
                        <td>Related pilot names</td>
                        <td>pilot</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}