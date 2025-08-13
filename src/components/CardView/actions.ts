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

export const handlePreviousItem = async(
    carData: CarModel | null,
    setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
    let response = null;

    try {
        if (carData && carData?.id > 1) {
            response = await fetchGetCarData(carData.id - 1, setCarData);
        }

        if (response) {
            setCarData(response);
        }

    } catch (error) {
        console.log("erro ao chamar api", error)
        setCarData(null);
    }
}

export const handleNextItem = async(
    carData: CarModel | null,
    setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
    let response = null;

    try {
        if (carData && carData?.id < 10) {
            response = await fetchGetCarData(carData.id + 1, setCarData);
        }

        if (response) {
            setCarData(response);
        }

    } catch (error) {
        console.log("erro ao chamar api", error)
        setCarData(null);
    }
}