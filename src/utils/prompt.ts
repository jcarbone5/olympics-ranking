//Interfaces
import { CountryAndMedals } from "@/interfaces/olympics";

export const prompt = (data: CountryAndMedals) => {
  return `
    Eres un experto en los Juegos Olímpicos.  

    Analiza el desempeño histórico de ${data.country.name}, teniendo en cuenta la siguiente información obtenida en los ultimos Juegos Olímpicos del 2024:
    
    * Medallas: ${data.medals.gold} de oro, ${data.medals.silver} de plata, ${data.medals.bronze} de bronce.
    * Posición en el medallero: ${data.rank}
    
    Basándote en estos datos, elabora un resumen que incluya:
    
    * Desempeño general: Describe si el país tuvo un buen desempeño en comparación con ediciones anteriores, si superó las expectativas o si quedó por debajo de lo esperado.
    * Deportes destacados: Menciona los deportes en los que el país obtuvo la mayor cantidad de medallas o tuvo actuaciones memorables.
    
    Mantén un tono informativo y atractivo. El resumen debe tener una extensión máxima de 500 palabras.
  `;
};
