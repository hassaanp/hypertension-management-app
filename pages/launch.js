import { useEffect } from "react";
import FHIR from "fhirclient";

const Launch = () => {
  useEffect(() => {
    FHIR.oauth2.authorize({
      client_id: "my_web_app",
      scope: "launch/patient online_access openid profile patient/*.read",
      fhirServiceUrl: "https://r4.smarthealthit.org",
      redirectUri: "/app",
    });
  });

  return (
    <div>
      <h2>Loading...</h2>
    </div>
  );
};

export default Launch;
