import { useEffect, useState } from "react";
import FHIR from "fhirclient";

const Patient = () => {
  const [bpData, setBpData] = useState([]);
  // fetch health card when FHIR client is ready
  useEffect(() => {
    FHIR.oauth2.ready().then(async (client) => {
      fetch(
        `https://launch.smarthealthit.org/v/r4/sim/eyJrIjoiMSIsImoiOiIxIiwiYiI6IjMyY2Q5ZmE0LTdhMzItNGRlMS1iY2UyLTU0OGUzNzE1MTU0MCJ9/fhir/Observation?patient=${client.patient.id}&category=vital-signs`,
        {
          headers: { Authorization: client.getAuthorizationHeader() },
        }
      )
        .then((resp) => resp.json())
        .then((json) => {
          console.log(json);
          const data = json.entry.filter(
            (entry) => entry?.resource?.code?.text === "Blood Pressure"
          );
          console.log(data);
          setBpData(data);
        });
    });
  }, []);

  return (
    <>
      <h1>Readings</h1>
      <ul>
        {bpData.map((entry, index) => (
          <li key={index}>
            <div className="flex flex-row gap-1">
              <p className="">
                diastolic: {entry?.resource?.component[0].valueQuantity.value}
              </p>
              <p>
                systolic: {entry?.resource?.component[1].valueQuantity.value}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Patient;
