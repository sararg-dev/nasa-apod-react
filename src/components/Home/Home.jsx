import { useState, useEffect } from "react";
import * as API from "../../services/api";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import RandomButton from "../RandomButton/RandomButton";
import PictureCard from "../PictureCard/PictureCard";
import "./home.css";

import enUS from "date-fns/locale/en-US";

const Home = () => {
  const [pictureData, setPictureData] = useState(null);
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await API.getPODbyDate(date);
        setPictureData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [date]);

  const onDateChange = (newDate) => {
    setDate(newDate);
  };

  // Definimos el rango de fechas permitidas en el calendario
  const minDate = new Date("1995-06-16");
  const maxDate = new Date();

  return (
    <main className="container-fluid">
      <div className="row justify-content-center m-5">
        <div className="col-lg-8 col-md-7">
          <PictureCard pictureData={pictureData} loading={loading} />
        </div>
        <div className="col-lg-4 col-md-5">
          <div className="calendar-container mt-5">
            <Calendar
              className="react-calendar mb-3"
              onChange={onDateChange}
              value={date}
              minDate={minDate}
              maxDate={maxDate}
              locale={enUS} 
            />
            <RandomButton setPictureData={setPictureData} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
