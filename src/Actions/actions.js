import logementsData from "../json-data/logements (1).json"; 

export const getApartmentById = (id,setActiveApart) => {
    const index = logementsData.findIndex((logement) => id === logement.id)
    setActiveApart(logementsData[index]) //pour récupérer les données à partir du fichier JSON et pour créer une fonction qui permet de récupérer un logement spécifique en fonction de son ID
};
