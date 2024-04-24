import { LOGEMENT_DATA_URL } from "../AppConfig.js";

async function getLogementById({params}) {
    const { logementID } = params;

    try {
        const res = await fetch(LOGEMENT_DATA_URL);
        if(! res.ok) throw Error("Échec lors de la récupération des données à distance");
        const allLogementData = await res.json();
        const logementData = allLogementData.find((logement) => {
            return logement["id"] === logementID;
        });
        if(! logementData) throw new Response("Not Found", { status: 404 });
        return logementData;

    } catch(error) {
        console.error(error);
    }
}

export { getLogementById };