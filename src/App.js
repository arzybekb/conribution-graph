import { useEffect, useState } from "react";
import "./App.css";
import Calendar from "./components/Calendar/Calendar";
import axios from "axios";
import { TransformData } from "./utils/helpers";

function App() {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    axios
      .get("https://dpg.gg/test/calendar.json")
      .then((response) => {
        const transformedData = TransformData(response.data);
        setContributions(transformedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
      
  }, []);

  return <Calendar data={contributions} />;
}

export default App;
