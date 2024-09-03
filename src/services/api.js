import { formatInTimeZone } from "date-fns-tz";

const API_URL = "https://api.nasa.gov/planetary/apod";
const API_KEY = "w4c0an2Z4m41DcAELeziiVCPVxYkMXDKqABhIE9K";

// Devuelve según una fecha indicada
export async function getPODbyDate(date) {
  try {
    // Configuración de la zona horaria 
    const timeZone = "Europe/Madrid";

    // Convertir y formatear la fecha a la zona horaria
    const formattedDate = formatInTimeZone(date, timeZone, "yyyy-MM-dd");

    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}&date=${formattedDate}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

// Devuelve una imagen aleatoria
export async function getRandomPOD() {
  try {
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}&count=1`
    );
    const data = await response.json();

    return data[0];
  } catch (error) {
    console.log(error);
  }
}