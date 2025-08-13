import { fetchGetCarData } from "../../api/getCars";
import { CarModel } from "./props"

export const loadCarData = async(
    id: number,
    setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
    try {
        await fetchGetCarData(id, setCarData);
    } catch (error) {
        console.error("Erro ao buscar dados da api:", error);
    }
}

export const handlePreviousItem = async() => {

}

export const handleNextItem = async() => {
    
}