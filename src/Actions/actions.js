import logementsData from "../json-data/logements (1).json";

export const getApartmentById = (id,setActiveApart) => {
    const index = logementsData.findIndex((logement) => id === logement.id)
    setActiveApart(logementsData[index])
};
