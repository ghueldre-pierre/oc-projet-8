import { LOGEMENT_DATA_URL } from "./AppConfig.js";

/*
    ===========================================================================================
    NOTE :

    J'ai remarqué qu'en indiquant un mauvais nom de fichier (pour provoquer une erreur)
    que la réponse (response) était toujours OK et je recevais cette erreur en console :

    Unexpected token '<', "<!doctype "... is not valid JSON

    Et j'ai compris que la réponse était toujours OK parce qu'elle n'était tout simplement pas
    vide, mais que c'était du code HTML qui était envoyé à la place (par React Router ?)

    En indiquant clairement que l'on s'attend à recevoir des données sous le format JSON,
    on force le navigateur à faire un contrôle sur le type de données reçues et ainsi la réponse
    n'est OK que quand le type de données est du JSON.
    ===========================================================================================
*/

/**
 * Tente de récupérer les données de l'ensemble des logements.
 * 
 * Lance une exception en cas d'échec.
 * 
 * @returns {Object} Un objet contenant les données de tous les logements
 */
async function tryGetAllLogementData() {
    const response = await fetch(LOGEMENT_DATA_URL, {
        // voir la note en début de page
        headers: {"Accept": "application/json"}
    });
    
    if(! response.ok) throw Error(`Échec de récupération des données à cette adresse : ${LOGEMENT_DATA_URL}`);
    
    const data = await response.json();
    
    return data;
}

/**
 * Tente de récupérer les données d'un logement depuis son ID.
 * 
 * Lance une exception en cas d'échec.
 * 
 * @param {Object} params Un objet contenant les paramètres passés au routeur via l'URL.
 * @returns {Object} Un objet contenant les données du logement.
 */
async function tryGetLogementDataById({params}) {
    const { logementID } = params;
    
    const response = await fetch(LOGEMENT_DATA_URL, {
        // voir la note en début de page
        headers: {"Accept": "application/json"}
    });
    
    if(! response.ok) throw Error(`Échec de récupération des données à cette adresse : ${LOGEMENT_DATA_URL}`);

    const allLogementData = await response.json();
    const logementData = allLogementData.find((logement) => {
        return logement["id"] === logementID;
    });

    if(! logementData) throw new Response("Not Found", { status: 404 });
    
    return logementData;
}

export { tryGetAllLogementData, tryGetLogementDataById };