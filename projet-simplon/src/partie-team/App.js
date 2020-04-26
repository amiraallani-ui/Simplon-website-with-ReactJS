import React from "react";
import "./App.css";
/*import Nav from "./navbar/navbar";*/
import Team from "./team/team";
/*import AppSimplon from "./main/main";*/
import Tof1 from "./tof1.jpeg";
import Tof2 from "./tof2.jpg";
import Tof3 from "./tof3.jpeg";

const teamSimplon = [
  { name: "Mouna Ayari", poste: "Gérante", photo: Tof1 },
  { name: "Mohamed Hamza", poste: "Formateur", photo: Tof2 },
  { name: "Syrine Amy Auguste", poste: "Chef de fabrique", photo: Tof3 },
];
function App() {
  return (
    <div className="App">
      <Team tab={teamSimplon} />
    </div>
  );
}

export default App;
