"use client"
const engineeringBranches = {
  "Mechatronics Engineering": [],
  "Computer Science Engineering": [
    "Data Scientists",
    "Computer Programmers",
    "Systems Analysts",
    "Hardware Engineers",
    "Software Developers",
    "System Engineers",
    "IT Consultants",
    "System Designers",
    "Networking Engineers",
    "Web Developers",
    "Database Administrators",
    "Mobility Testers",
    "E-commerce Specialists",
    "Software Testers",
  ],
  "Civil Engineering": [],
  "Mechanical Engineering": [],
  "Electronics and Communications Engineering (ECE)": [
    "Analog Transmission",
    "Basic Electronics",
    "Microprocessors",
    "Solid-state Devices",
    "Digital and Analog Communication",
    "Satellite Communication",
    "Antennae",
    "Wave Progression",
  ],
  "Electrical Engineering": [
    "Electromagnetism for Energy Transmission",
    "Generation",
    "Storage",
    "Processing",
    "Control",
    "Conversion, etc.",
  ],
  "Aerospace Engineering": [],
  "Chemical Engineering": [],
  "Marine Engineering": [],
  "Automobile Engineering": [],
  "Software Engineering": [],
};

import { useState } from "react";

export default function trial() {
const [branch,setBranch] = useState()
    function handleChange(e){
setBranch(e.target.value)
let g = e.target.value
console.log(engineeringBranches.branch)
    }
// console.log("Branch is ", branch);

    return (
    <>
      <select name="branch" id="branch" onChange={handleChange}>
        <option value="Select" disabled>
          Choose Database Type
        </option>
        <option data-adr="xyz" value="Mechatronics">
          1. Mechatronics Engineering
        </option>
        <option data-adr="fsd" value="cse">
          2. Computer Science Engineering
        </option>
        <option data-adr="sss" value="civil">
          3. Civil Engineering
        </option>
        <option data-adr="sss" value="ec">
          5. Electronics and Communications Engineering (ECE)
        </option>
      </select>
    </>
  );
}


