"use strict";
var fs = require("fs");

//list of hotel&restaurant from relais chateaux
const hotelInfo = [
 {
  "Hotel": "La Bonne Étape",
  "Departement": " (Alpes-de-Haute-Provence)",
  "NumberOfRooms": " 19Rooms",
  "Price": 158,
  "Lien": " https://www.relaischateaux.com/us/france/bonneetape-alpes-de-haute-provence-chateau-arnoux "
 },
 {
  "Hotel": "Georges Blanc Parc & Spa",
  "Departement": " (Ain)",
  "NumberOfRooms": " 42Rooms",
  "Price": 250,
  "Lien": " https://www.relaischateaux.com/us/france/blanc-ain-vonnas "
 },
 {
  "Hotel": "Le Château de Beaulieu",
  "Departement": " (Pas-de-Calais)",
  "NumberOfRooms": " 20Rooms",
  "Price": 170,
  "Lien": " https://www.relaischateaux.com/us/france/chateaubeaulieu-pas-de-calais-busnes "
 },
 {
  "Hotel": "Château de La Chèvre d’Or",
  "Departement": " (Alpes-Maritimes)",
  "NumberOfRooms": " 40Rooms",
  "Price": 237,
  "Lien": " https://www.relaischateaux.com/us/france/chevredor-alpes-maritimes-eze-village "
 },
 {
  "Hotel": "Château de Drudas",
  "Departement": " (Haute Garonne)",
  "NumberOfRooms": " 23Rooms",
  "Price": 0,
  "Lien": " https://www.relaischateaux.com/us/france/chateau-de-drudas "
 },
 {
  "Hotel": "Le Saint-James Bouliac",
  "Departement": " (Gironde)",
  "NumberOfRooms": " 18Rooms",
  "Price": 175,
  "Lien": " https://www.relaischateaux.com/us/france/stjames-gironde-bouliac "
 },
 {
  "Hotel": "Brittany & Spa",
  "Departement": " (Finistère)",
  "NumberOfRooms": " 33Rooms",
  "Price": 167,
  "Lien": " https://www.relaischateaux.com/us/france/brittany-finistere-roscoff "
 },
 {
  "Hotel": "La Signoria & Spa",
  "Departement": " (Corse)",
  "NumberOfRooms": " 30Rooms",
  "Price": 352,
  "Lien": " https://www.relaischateaux.com/us/france/signoria-corse-calvi "
 },
 {
  "Hotel": "Relais de la Poste",
  "Departement": " (Landes)",
  "NumberOfRooms": " 16Rooms",
  "Price": 162,
  "Lien": " https://www.relaischateaux.com/us/france/poste-landes-magescq "
 },
 {
  "Hotel": "Clarance Hôtel",
  "Departement": " (Nord)",
  "NumberOfRooms": " 19Rooms",
  "Price": 170,
  "Lien": " https://www.relaischateaux.com/us/france/clarance-hotel-nord "
 },
 {
  "Hotel": "Le Mas des Herbes Blanches",
  "Departement": " (Vaucluse)",
  "NumberOfRooms": " 48Rooms",
  "Price": 218,
  "Lien": " https://www.relaischateaux.com/us/france/masherbes-vaucluse-joucas "
 },
 {
  "Hotel": "Hôtel Parc Victoria",
  "Departement": " (Pyrénées-Atlantiques)",
  "NumberOfRooms": " 20Rooms",
  "Price": 160,
  "Lien": " https://www.relaischateaux.com/us/france/parcvictoria-pyrenees-atlantiques-saint-jean-de-luz "
 },
 {
  "Hotel": "Hôtel Le Chabichou Restaurants & Spa",
  "Departement": " (Savoie)",
  "NumberOfRooms": " 41Rooms",
  "Price": 470,
  "Lien": " https://www.relaischateaux.com/us/france/chabichou-savoie-courchevel-1850 "
 },
 {
  "Hotel": "Le Domaine de Verchant",
  "Departement": " (Hérault)",
  "NumberOfRooms": " 27Rooms",
  "Price": 216,
  "Lien": " https://www.relaischateaux.com/us/france/verchant-herault-montpellier "
 },
 {
  "Hotel": "Domaine d’Auriac",
  "Departement": " (Aude)",
  "NumberOfRooms": " 21Rooms",
  "Price": 200,
  "Lien": " https://www.relaischateaux.com/us/france/auriac-aude-carcassonne "
 },
 {
  "Hotel": "Abbaye de la Bussière",
  "Departement": " (Côte-d’Or)",
  "NumberOfRooms": " 20Rooms",
  "Price": 225,
  "Lien": " https://www.relaischateaux.com/us/france/bussiere-cote-d-or-la-bussiere-sur-ouche "
 },
 {
  "Hotel": "Le Clos",
  "Departement": " (Normandie)",
  "NumberOfRooms": " 12Rooms",
  "Price": 220,
  "Lien": " https://www.relaischateaux.com/us/france/leclos-normandie-verneuil-sur-avre "
 },
 {
  "Hotel": "Domaine Les Crayères",
  "Departement": " (Marne)",
  "NumberOfRooms": " 20Rooms",
  "Price": 380,
  "Lien": " https://www.relaischateaux.com/us/france/crayeres-marne-reims "
 },
 {
  "Hotel": "Le Couvent des Minimes Hôtel & Spa L'Occitane",
  "Departement": " (Alpes-de-Haute-Provence)",
  "NumberOfRooms": " 46Rooms",
  "Price": 224,
  "Lien": " https://www.relaischateaux.com/us/france/minimes-alpes-de-haute-provence-mane "
 },
 {
  "Hotel": "La Maison d'Uzès",
  "Departement": " (Gard)",
  "NumberOfRooms": " 9Rooms",
  "Price": 131,
  "Lien": " https://www.relaischateaux.com/us/france/maisonduzes-gard-uzes "
 },
 {
  "Hotel": "Château de Courcelles",
  "Departement": " (Aisne)",
  "NumberOfRooms": " 18Rooms",
  "Price": 205,
  "Lien": " https://www.relaischateaux.com/us/france/courcelles-aisne-courcelles-sur-vesle "
 },
 {
  "Hotel": "Castel Clara Thalasso & Spa",
  "Departement": " (Morbihan)",
  "NumberOfRooms": " 63Rooms",
  "Price": 140,
  "Lien": " https://www.relaischateaux.com/us/france/castelclara-morbihan-bangor "
 },
 {
  "Hotel": "Le Vieux Logis",
  "Departement": " (Dordogne)",
  "NumberOfRooms": " 24Rooms",
  "Price": 170,
  "Lien": " https://www.relaischateaux.com/us/france/vieuxlogis-dordogne-tremolat "
 },
 {
  "Hotel": "Cazaudehore « La Forestière »",
  "Departement": " (Yvelines)",
  "NumberOfRooms": " 30Rooms",
  "Price": 151,
  "Lien": " https://www.relaischateaux.com/us/france/cazaudehore-yvelines-saint-germain-en-laye "
 },
 {
  "Hotel": "Château de Mirambeau",
  "Departement": " (Charente-Maritime)",
  "NumberOfRooms": " 40Rooms",
  "Price": 191,
  "Lien": " https://www.relaischateaux.com/us/france/mirambeau-charente-maritime-mirambeau "
 },
 {
  "Hotel": "Hôtel de la Plage",
  "Departement": " (Finistère)",
  "NumberOfRooms": " 19Rooms",
  "Price": 176.4,
  "Lien": " https://www.relaischateaux.com/us/france/laplage-finistere-sainte-anne-la-palud "
 },
 {
  "Hotel": "Château de Codignat",
  "Departement": " (Puy-de-Dôme)",
  "NumberOfRooms": " 19Rooms",
  "Price": 136,
  "Lien": " https://www.relaischateaux.com/us/france/codignat-puy-de-dome-bort-l-etang "
 },
 {
  "Hotel": "Les Maisons de Bricourt",
  "Departement": " (Ille-et-Vilaine)",
  "NumberOfRooms": " 13Rooms",
  "Price": 195,
  "Lien": " https://www.relaischateaux.com/us/france/bricourt-ille-et-vilaine-saint-meloir-des-ondes "
 },
 {
  "Hotel": "Hostellerie de Plaisance",
  "Departement": " (Gironde)",
  "NumberOfRooms": " 21Rooms",
  "Price": 280,
  "Lien": " https://www.relaischateaux.com/us/france/plaisance-gironde-saint-emilion "
 },
 {
  "Hotel": "La Bastide de Saint-Tropez",
  "Departement": " (Var)",
  "NumberOfRooms": " 26Rooms",
  "Price": 220,
  "Lien": " https://www.relaischateaux.com/us/france/tropez-var-saint-tropez "
 },
 {
  "Hotel": "Château de Montreuil",
  "Departement": " (Pas-de-Calais)",
  "NumberOfRooms": " 10Rooms",
  "Price": 248,
  "Lien": " https://www.relaischateaux.com/us/france/montreuil-pas-de-calais-montreuil "
 },
 {
  "Hotel": "Hôtel Splendide Royal Paris",
  "Departement": " (Paris)",
  "NumberOfRooms": " 12Rooms",
  "Price": 510,
  "Lien": " https://www.relaischateaux.com/us/france/hotel-splendide-royal-paris "
 },
 {
  "Hotel": "La Réserve",
  "Departement": " (Tarn)",
  "NumberOfRooms": " 20Rooms",
  "Price": 206,
  "Lien": " https://www.relaischateaux.com/us/france/reservealbi-tarn-albi "
 },
 {
  "Hotel": "Tiara Yaktsa",
  "Departement": " (Alpes Maritimes)",
  "NumberOfRooms": " 21Rooms",
  "Price": 240,
  "Lien": " https://www.relaischateaux.com/us/france/yaktsa-alpes-maritimes-theoule-sur-mer "
 },
 {
  "Hotel": "Hotel & Restaurant Thierry Drapeau",
  "Departement": " (Vendée)",
  "NumberOfRooms": " 14Rooms",
  "Price": 520,
  "Lien": " https://www.relaischateaux.com/us/france/thierrydrapeau-vendee-saint-sulpice-le-verdon "
 },
 {
  "Hotel": "Monte-Carlo Beach",
  "Departement": " (Alpes-Maritimes)",
  "NumberOfRooms": " 40Rooms",
  "Price": 186,
  "Lien": " https://www.relaischateaux.com/us/france/montecarlo-alpes-maritimes-roquebrune-cap-martin "
 },
 {
  "Hotel": "Le Prieuré Baumanière",
  "Departement": " (Gard)",
  "NumberOfRooms": " 37Rooms",
  "Price": 188,
  "Lien": " https://www.relaischateaux.com/us/france/leprieure-gard-villeneuve-lez-avignon "
 },
 {
  "Hotel": "Hôtel Les Barmes de l'Ours",
  "Departement": " (Savoie)",
  "NumberOfRooms": " 76Rooms",
  "Price": 325,
  "Lien": " https://www.relaischateaux.com/us/france/barmes-de-l-ours-savoie "
 },
 {
  "Hotel": "Au Cœur du Village Hôtel & Spa",
  "Departement": " (Rhône-Alpes)",
  "NumberOfRooms": " 54Rooms",
  "Price": 435,
  "Lien": " https://www.relaischateaux.com/us/france/coeurduvillage-rhone-alpes-la-clusaz "
 },
 {
  "Hotel": "Château de Curzay",
  "Departement": " (Vienne)",
  "NumberOfRooms": " 22Rooms",
  "Price": 0,
  "Lien": " https://www.relaischateaux.com/us/france/curzay-vienne-curzay-sur-vonne "
 },
 {
  "Hotel": "Château de Locguénolé",
  "Departement": " (Morbihan)",
  "NumberOfRooms": " 22Rooms",
  "Price": 159,
  "Lien": " https://www.relaischateaux.com/us/france/locguenole-morbihan-kervignac "
 },
 {
  "Hotel": "Coquillade Village",
  "Departement": " (Vaucluse)",
  "NumberOfRooms": " 63Rooms",
  "Price": 170,
  "Lien": " https://www.relaischateaux.com/us/france/coquillade-vaucluse-gargas "
 },
 {
  "Hotel": "Hôtel-Spa La Bouitte – Restaurant René et Maxime Meilleur",
  "Departement": " (Savoie)",
  "NumberOfRooms": " 15Rooms",
  "Price": 290,
  "Lien": " https://www.relaischateaux.com/us/france/la-bouitte-savoie "
 },
 {
  "Hotel": "Hostellerie La Cheneaudière & Spa",
  "Departement": " (Bas-Rhin)",
  "NumberOfRooms": " 38Rooms",
  "Price": 265,
  "Lien": " https://www.relaischateaux.com/us/france/cheneaudiere-bas-rhin-colroy-la-roche "
 },
 {
  "Hotel": "L’Arnsbourg Restaurant et Hôtel",
  "Departement": " (Moselle)",
  "NumberOfRooms": " 12Rooms",
  "Price": 175,
  "Lien": " https://www.relaischateaux.com/us/france/arnsbourg-moselle-baerenthal "
 },
 {
  "Hotel": "La Chapelle Saint-Martin",
  "Departement": " (Haute-Vienne)",
  "NumberOfRooms": " 13Rooms&1 villa",
  "Price": 135,
  "Lien": " https://www.relaischateaux.com/us/france/chapelle-haute-vienne-nieul "
 },
 {
  "Hotel": "La Bastide de Capelongue",
  "Departement": " (Vaucluse)",
  "NumberOfRooms": " 18Rooms&1 villa",
  "Price": 113,
  "Lien": " https://www.relaischateaux.com/us/france/capelongue-vaucluse-bonnieux-en-provence "
 },
 {
  "Hotel": "Maison Pic",
  "Departement": " (Drôme)",
  "NumberOfRooms": " 15Rooms",
  "Price": 238,
  "Lien": " https://www.relaischateaux.com/us/france/pic-drome-valence "
 },
 {
  "Hotel": "Domaine de la Bretesche Golf & Spa",
  "Departement": " (Loire-Atlantique)",
  "NumberOfRooms": " 31Rooms&2 villas",
  "Price": 170.1,
  "Lien": " https://www.relaischateaux.com/us/france/bretesche-loire-atlantique-missillac "
 },
 {
  "Hotel": "Troisgros",
  "Departement": " (Loire)",
  "NumberOfRooms": " 15Rooms",
  "Price": 400,
  "Lien": " https://www.relaischateaux.com/us/france/troisgros-loire-ouches "
 },
 {
  "Hotel": "Flocons de Sel",
  "Departement": " (Haute-Savoie)",
  "NumberOfRooms": " 11Rooms&1 villa",
  "Price": 430,
  "Lien": " https://www.relaischateaux.com/us/france/flocons-haute-savoie-megeve "
 },
 {
  "Hotel": "Assiette Champenoise",
  "Departement": " (Champagne-Ardenne)",
  "NumberOfRooms": " 33Rooms",
  "Price": 185.5,
  "Lien": " https://www.relaischateaux.com/us/france/assiette-champenoise-champagne-ardenne-tinqueux "
 },
 {
  "Hotel": "Manoir de Lan-Kerellec",
  "Departement": " (Côtes-d'Armor)",
  "NumberOfRooms": " 18Rooms",
  "Price": 209,
  "Lien": " https://www.relaischateaux.com/us/france/lankerellec-cotes-d-armor-trebeurden "
 },
 {
  "Hotel": "Château de Noirieux",
  "Departement": " (Maine-et-Loire)",
  "NumberOfRooms": " 19Rooms",
  "Price": 80,
  "Lien": " https://www.relaischateaux.com/us/france/noirieux-maine-et-loire-briollay "
 },
 {
  "Hotel": "Baumanière Hôtel & Spa",
  "Departement": " (Bouches-du-Rhône)",
  "NumberOfRooms": " 54Rooms",
  "Price": 225,
  "Lien": " https://www.relaischateaux.com/us/france/baumaniere-hotel-spa-les-baux-de-provence "
 },
 {
  "Hotel": "Saint James Paris",
  "Departement": " (Ile de France)",
  "NumberOfRooms": " 47Rooms&2 villas",
  "Price": 355.5,
  "Lien": " https://www.relaischateaux.com/us/france/saintjames-paris-ile-de-france-paris "
 },
 {
  "Hotel": "Anne de Bretagne",
  "Departement": " (Loire-Atlantique)",
  "NumberOfRooms": " 20Rooms",
  "Price": 72.5,
  "Lien": " https://www.relaischateaux.com/us/france/annedebretagne-loire-atlantique-la-plaine-sur-mer "
 },
 {
  "Hotel": "Yoann Conte – Bord du Lac Hôtel Restaurant",
  "Departement": " (Haute-Savoie)",
  "NumberOfRooms": " 8Rooms",
  "Price": 210,
  "Lien": " https://www.relaischateaux.com/us/france/yoannconte-haute-savoie-veyrier-du-lac "
 },
 {
  "Hotel": "Michel Trama",
  "Departement": " (Lot-et-Garonne)",
  "NumberOfRooms": " 10Rooms",
  "Price": 220,
  "Lien": " https://www.relaischateaux.com/us/france/aubergade-lot-et-garonne-puymirol "
 },
 {
  "Hotel": "Villa René Lalique",
  "Departement": " (Bas-Rhin)",
  "NumberOfRooms": " 6Rooms",
  "Price": 0,
  "Lien": " https://www.relaischateaux.com/us/france/lalique-bas-rhin "
 },
 {
  "Hotel": "Royal Champagne Hotel & Spa",
  "Departement": " (Marne)",
  "NumberOfRooms": " 49Rooms",
  "Price": 390,
  "Lien": " https://www.relaischateaux.com/us/france/royalchampagne-marne-champillon "
 },
 {
  "Hotel": "L'Auberge Basque",
  "Departement": " (Pyrénées-Atlantiques)",
  "NumberOfRooms": " 11Rooms&1 villa",
  "Price": 101.15,
  "Lien": " https://www.relaischateaux.com/us/france/auberge-basque-saint-pee-sur-nivelle-pyrenees-atlantiques "
 },
 {
  "Hotel": "L’Hôtel de Toiras & Villa Clarisse",
  "Departement": " (Charente-Maritime)",
  "NumberOfRooms": " 29Rooms&1 villa",
  "Price": 220,
  "Lien": " https://www.relaischateaux.com/us/france/toiras-charente-maritime-saint-martin-de-re "
 },
 {
  "Hotel": "Villa Gallici",
  "Departement": " (Bouches-du-Rhône)",
  "NumberOfRooms": " 23Rooms",
  "Price": 295,
  "Lien": " https://www.relaischateaux.com/us/france/gallici-bouches-du-rhone-aix-en-provence "
 },
 {
  "Hotel": "Les Prés d’Eugénie - Maison Guérard",
  "Departement": " (Landes)",
  "NumberOfRooms": " 45Rooms&2 villas",
  "Price": 250,
  "Lien": " https://www.relaischateaux.com/us/france/guerard-landes-eugenie-les-bains "
 },
 {
  "Hotel": "Hôtel Restaurant Auberge du Père Bise – Jean Sulpice",
  "Departement": " (Haute-Savoie)",
  "NumberOfRooms": " 23Rooms",
  "Price": 206,
  "Lien": " https://www.relaischateaux.com/us/france/bise-haute-savoie-talloires "
 },
 {
  "Hotel": "La Maison des Bois – Marc Veyrat",
  "Departement": " (Haute-Savoie)",
  "NumberOfRooms": " 5Rooms",
  "Price": 0,
  "Lien": " https://www.relaischateaux.com/us/france/marcveyrat-haute-savoie-manigod "
 },
 {
  "Hotel": "Château de Berne",
  "Departement": " (Var)",
  "NumberOfRooms": " 27Rooms",
  "Price": 215,
  "Lien": " https://www.relaischateaux.com/us/france/berne-var-lorgues "
 },
 {
  "Hotel": "Château de la Treyne",
  "Departement": " (Lot)",
  "NumberOfRooms": " 17Rooms",
  "Price": 250,
  "Lien": " https://www.relaischateaux.com/us/france/treyne-lot-lacave "
 },
 {
  "Hotel": "Auberge du Jeu de Paume",
  "Departement": " (Oise)",
  "NumberOfRooms": " 92Rooms",
  "Price": 263.5,
  "Lien": " https://www.relaischateaux.com/us/france/jeudepaume-oise-chantilly "
 },
 {
  "Hotel": "Château Cordeillan-Bages",
  "Departement": " (Gironde)",
  "NumberOfRooms": " 28Rooms",
  "Price": 170,
  "Lien": " https://www.relaischateaux.com/us/france/cordeillan-gironde-pauillac "
 },
 {
  "Hotel": "Le Club de Cavalière & Spa",
  "Departement": " (Var)",
  "NumberOfRooms": " 37Rooms",
  "Price": 410,
  "Lien": " https://www.relaischateaux.com/us/france/cavaliere-var-le-lavandou-cavaliere "
 },
 {
  "Hotel": "Château de Fonscolombe",
  "Departement": " (Bouches-du-Rhône)",
  "NumberOfRooms": " 50Rooms",
  "Price": 180,
  "Lien": " https://www.relaischateaux.com/us/france/fonscolombe-bouches-du-rhone "
 },
 {
  "Hotel": "La Grenouillère",
  "Departement": " (Pas-de-Calais)",
  "NumberOfRooms": " 11Rooms",
  "Price": 180,
  "Lien": " https://www.relaischateaux.com/us/france/lagrenouillere-pas-de-calais-la-madelaine-sous-montreuil "
 },
 {
  "Hotel": "Château de Bagnols",
  "Departement": " (Rhône-Alpes)",
  "NumberOfRooms": " 27Rooms",
  "Price": 199.2,
  "Lien": " https://www.relaischateaux.com/us/france/bagnols-rhone-alpes "
 },
 {
  "Hotel": "Auberge des Glazicks",
  "Departement": " (Finistère)",
  "NumberOfRooms": " 8Rooms",
  "Price": 0,
  "Lien": " https://www.relaischateaux.com/us/france/auberge-des-glazicks-plomodiern "
 },
 {
  "Hotel": "La Villa Calvi",
  "Departement": " (Haute-Corse)",
  "NumberOfRooms": " 48Rooms&3 villas",
  "Price": 445,
  "Lien": " https://www.relaischateaux.com/us/france/lavilla-haute-corse-calvi "
 },
 {
  "Hotel": "Château d’Audrieu",
  "Departement": " (Calvados)",
  "NumberOfRooms": " 30Rooms",
  "Price": 204,
  "Lien": " https://www.relaischateaux.com/us/france/audrieu-calvados-audrieu "
 },
 {
  "Hotel": "Bas Rupts",
  "Departement": " (Vosges)",
  "NumberOfRooms": " 24Rooms",
  "Price": 160,
  "Lien": " https://www.relaischateaux.com/us/france/basrupts-vosges-gerardmer "
 },
 {
  "Hotel": "La Ferme Saint-Siméon",
  "Departement": " (Calvados)",
  "NumberOfRooms": " 34Rooms",
  "Price": 156,
  "Lien": " https://www.relaischateaux.com/us/france/simeon-calvados-honfleur "
 },
 {
  "Hotel": "Hôtel Restaurant Clos des Sens - Laurent PETIT",
  "Departement": " (Haute-Savoie)",
  "NumberOfRooms": " 11Rooms",
  "Price": 230,
  "Lien": " https://www.relaischateaux.com/us/france/clos-des-sens-haute-savoie "
 },
 {
  "Hotel": "Les Hauts de Loire",
  "Departement": " (Loir-et-Cher)",
  "NumberOfRooms": " 31Rooms",
  "Price": 175,
  "Lien": " https://www.relaischateaux.com/us/france/hauts-loire-loir-et-cher-onzain "
 },
 {
  "Hotel": "Hôtel du Bois Blanc",
  "Departement": " (Ain)",
  "NumberOfRooms": " 18Rooms",
  "Price": 129,
  "Lien": " https://www.relaischateaux.com/us/france/hotel-du-bois-blanc-ain-vonnas "
 },
 {
  "Hotel": "Hôtel Impérial Garoupe",
  "Departement": " (Alpes-Maritimes)",
  "NumberOfRooms": " 35Rooms",
  "Price": 360,
  "Lien": " https://www.relaischateaux.com/us/france/garoupe-alpes-maritimes-cap-d-antibes "
 },
 {
  "Hotel": "Le Phébus & Spa - Villa des Anges",
  "Departement": " (Vaucluse)",
  "NumberOfRooms": " 29Rooms&1 villa",
  "Price": 210,
  "Lien": " https://www.relaischateaux.com/us/france/phebus-vaucluse-gordes "
 },
 {
  "Hotel": "Les Bergeries de Palombaggia",
  "Departement": " (Corse du sud)",
  "NumberOfRooms": " 16Rooms",
  "Price": 228,
  "Lien": " https://www.relaischateaux.com/us/france/palombaggia-corse-du-sud-porto-vecchio "
 },
 {
  "Hotel": "Le Grand Cœur & Spa",
  "Departement": " (Savoie)",
  "NumberOfRooms": " 42Rooms",
  "Price": 355,
  "Lien": " https://www.relaischateaux.com/us/france/grandcoeur-savoie-meribel "
 },
 {
  "Hotel": "Restaurant Serge Vieira",
  "Departement": " (Cantal)",
  "NumberOfRooms": " 3Rooms",
  "Price": 0,
  "Lien": " https://www.relaischateaux.com/us/france/vieira-cantal "
 },
 {
  "Hotel": "La Bastide Saint-Antoine",
  "Departement": " (Alpes-Maritimes)",
  "NumberOfRooms": " 16Rooms",
  "Price": 176,
  "Lien": " https://www.relaischateaux.com/us/france/saintantoine-alpes-maritimes-grasse "
 },
 {
  "Hotel": "La Grande Maison de Bernard Magrez",
  "Departement": " (Gironde)",
  "NumberOfRooms": " 6Rooms",
  "Price": 293,
  "Lien": " https://www.relaischateaux.com/us/france/grande-maison-bernard-magrez-gironde-bordeaux "
 },
 {
  "Hotel": "Hostellerie de Levernois",
  "Departement": " (Côte-d’Or)",
  "NumberOfRooms": " 26Rooms",
  "Price": 150,
  "Lien": " https://www.relaischateaux.com/us/france/levernois-cote-d-or-levernois-beaune "
 },
 {
  "Hotel": "Pan Deï Palais",
  "Departement": " (Var)",
  "NumberOfRooms": " 12Rooms",
  "Price": 250,
  "Lien": " https://www.relaischateaux.com/us/france/pandei-var-saint-tropez "
 },
 {
  "Hotel": "Hôtel et Restaurant Régis et Jacques Marcon",
  "Departement": " (Haute-Loire)",
  "NumberOfRooms": " 10Rooms",
  "Price": 0,
  "Lien": " https://www.relaischateaux.com/us/france/cimes-haute-loire-saint-bonnet-le-froid "
 },
 {
  "Hotel": "Château de Germigney",
  "Departement": " (Jura)",
  "NumberOfRooms": " 20Rooms",
  "Price": 130,
  "Lien": " https://www.relaischateaux.com/us/france/germigney-jura-port-lesney "
 },
 {
  "Hotel": "La Côte Saint Jacques & Spa",
  "Departement": " (Yonne)",
  "NumberOfRooms": " 22Rooms",
  "Price": 224,
  "Lien": " https://www.relaischateaux.com/us/france/la-cote-saint-jacques-yonne-joigny "
 },
 {
  "Hotel": "Maison Lameloise",
  "Departement": " (Saône-et-Loire)",
  "NumberOfRooms": " 16Rooms",
  "Price": 180,
  "Lien": " https://www.relaischateaux.com/us/france/lameloise-saone-et-loire-chagny "
 },
 {
  "Hotel": "Le Mas de Pierre",
  "Departement": " (Alpes-Maritimes)",
  "NumberOfRooms": " 54Rooms&1 villa",
  "Price": 162,
  "Lien": " https://www.relaischateaux.com/us/france/maspierre-alpes-maritimes-saint-paul-de-vence "
 },
 {
  "Hotel": "Hostellerie La Briqueterie",
  "Departement": " (Marne)",
  "NumberOfRooms": " 40Rooms",
  "Price": 170,
  "Lien": " https://www.relaischateaux.com/us/france/briqueterie-marne-vinay "
 },
 {
  "Hotel": "Le Saint-Paul",
  "Departement": " (Alpes-Maritimes)",
  "NumberOfRooms": " 16Rooms",
  "Price": 245,
  "Lien": " https://www.relaischateaux.com/us/france/stpaul-alpes-maritimes-saint-paul-de-vence "
 },
 {
  "Hotel": "Maison Doucet",
  "Departement": " (Saône et Loire)",
  "NumberOfRooms": " 18Rooms",
  "Price": 123,
  "Lien": " https://www.relaischateaux.com/us/france/hotel-laposte-doucet-saone-et-loire "
 },
 {
  "Hotel": "Auberge des Templiers",
  "Departement": " (Loiret)",
  "NumberOfRooms": " 24Rooms",
  "Price": 112.2,
  "Lien": " https://www.relaischateaux.com/us/france/templiers-loiret-boismorand "
 },
 {
  "Hotel": "La Pyramide Patrick Henriroux",
  "Departement": " (Isère)",
  "NumberOfRooms": " 23Rooms",
  "Price": 170,
  "Lien": " https://www.relaischateaux.com/us/france/pyramide-isere-vienne "
 },
 {
  "Hotel": "Jiva Hill Resort",
  "Departement": " (Ain)",
  "NumberOfRooms": " 33Rooms",
  "Price": 290,
  "Lien": " https://www.relaischateaux.com/us/france/jivahill-ain-crozet "
 },
 {
  "Hotel": "Château Lafaurie-Peyraguey Hôtel & Restaurant LALIQUE",
  "Departement": " (Gironde)",
  "NumberOfRooms": " 13Rooms",
  "Price": 0,
  "Lien": " https://www.relaischateaux.com/us/france/chateau-lafaurie-peyraguey-lalique-bommes "
 },
 {
  "Hotel": "Le Petit Nice-Passedat",
  "Departement": " (Bouches-du-Rhône)",
  "NumberOfRooms": " 16Rooms",
  "Price": 220,
  "Lien": " https://www.relaischateaux.com/us/france/passedat-bouches-du-rhone-marseille "
 },
 {
  "Hotel": "Château d’Adoménil",
  "Departement": " (Meurthe-et-Moselle)",
  "NumberOfRooms": " 14Rooms",
  "Price": 195,
  "Lien": " https://www.relaischateaux.com/us/france/adomenil-meurthe-et-moselle-luneville "
 },
 {
  "Hotel": "Le Chambard",
  "Departement": " (Haut-Rhin)",
  "NumberOfRooms": " 32Rooms",
  "Price": 182,
  "Lien": " https://www.relaischateaux.com/us/france/le-chambard-haut-rhin-kaysersberg "
 },
 {
  "Hotel": "Château de Mercuès",
  "Departement": " (Lot)",
  "NumberOfRooms": " 30Rooms",
  "Price": 198,
  "Lien": " https://www.relaischateaux.com/us/france/mercues-lot-mercues "
 },
 {
  "Hotel": "Grand Hôtel de Cala Rossa & Spa",
  "Departement": " (Corse)",
  "NumberOfRooms": " 35Rooms",
  "Price": 220,
  "Lien": " https://www.relaischateaux.com/us/france/calarossa-corse-porto-vecchio "
 },
 {
  "Hotel": "Moulin de l’Abbaye",
  "Departement": " (Dordogne)",
  "NumberOfRooms": " 20Rooms",
  "Price": 145,
  "Lien": " https://www.relaischateaux.com/us/france/moulin-dordogne-brantome-en-perigord "
 },
 {
  "Hotel": "Maison Decoret",
  "Departement": " (Allier)",
  "NumberOfRooms": " 5Rooms",
  "Price": 117.81,
  "Lien": " https://www.relaischateaux.com/us/france/decoret-allier-vichy "
 },
 {
  "Hotel": "Hôtel & Spa du Castellet",
  "Departement": " (Var)",
  "NumberOfRooms": " 42Rooms",
  "Price": 208,
  "Lien": " https://www.relaischateaux.com/us/france/castellet-var-le-castellet "
 },
 {
  "Hotel": "Hôtel Restaurant En Marge",
  "Departement": " (Haute-Garonne)",
  "NumberOfRooms": " 5Rooms",
  "Price": 0,
  "Lien": " https://www.relaischateaux.com/us/france/hotel-restaurant-en-marge-aureville "
 },
 {
  "Hotel": "Hotel Ile de la Lagune Thalasso & Spa",
  "Departement": " (Pyrénées-Orientales)",
  "NumberOfRooms": " 24Rooms",
  "Price": 161,
  "Lien": " https://www.relaischateaux.com/us/france/ile-de-la-lagune-saint-cyprien "
 },
 {
  "Hotel": "Château de Rochegude",
  "Departement": " (Drôme)",
  "NumberOfRooms": " 25Rooms",
  "Price": 119,
  "Lien": " https://www.relaischateaux.com/us/france/rochegude-drome-rochegude "
 },
 {
  "Hotel": "Hameau Albert Ier",
  "Departement": " (Haute-Savoie)",
  "NumberOfRooms": " 37Rooms",
  "Price": 151,
  "Lien": " https://www.relaischateaux.com/us/france/albert-haute-savoie-chamonix-mont-blanc "
 },
 {
  "Hotel": "La Bastide",
  "Departement": " (Gers)",
  "NumberOfRooms": " 29Rooms",
  "Price": 170,
  "Lien": " https://www.relaischateaux.com/us/france/labastide-gers-barbotan-les-thermes "
 },
 {
  "Hotel": "Cap d’Antibes Beach Hotel",
  "Departement": " (Alpes-Maritimes)",
  "NumberOfRooms": " 35Rooms",
  "Price": 294,
  "Lien": " https://www.relaischateaux.com/us/france/antibes-alpes-maritimes-cap-d-antibes "
 },
 {
  "Hotel": "Les Hautes Roches",
  "Departement": " (Indre-et-Loire)",
  "NumberOfRooms": " 14Rooms",
  "Price": 165,
  "Lien": " https://www.relaischateaux.com/us/france/hautesroches-indre-et-loire-rochecorbon "
 },
 {
  "Hotel": "Château de Riell",
  "Departement": " (Pyrénées-Orientales)",
  "NumberOfRooms": " 17Rooms",
  "Price": 136,
  "Lien": " https://www.relaischateaux.com/us/france/riell-pyrenees-orientales-prades "
 },
 {
  "Hotel": "Hôtel Crillon le Brave",
  "Departement": " (Vaucluse)",
  "NumberOfRooms": " 33Rooms",
  "Price": 400,
  "Lien": " https://www.relaischateaux.com/us/france/crillonbrave-vaucluse-crillon-le-brave "
 },
 {
  "Hotel": "Villa Florentine",
  "Departement": " (Rhône)",
  "NumberOfRooms": " 28Rooms",
  "Price": 195,
  "Lien": " https://www.relaischateaux.com/us/france/florentine-rhone-lyon "
 },
 {
  "Hotel": "Domaine de Rochevilaine",
  "Departement": " (Morbihan)",
  "NumberOfRooms": " 37Rooms",
  "Price": 192,
  "Lien": " https://www.relaischateaux.com/us/france/rochevilaine-morbihan-billiers "
 },
 {
  "Hotel": "Château de Noizay",
  "Departement": " (Indre-et-Loire)",
  "NumberOfRooms": " 19Rooms",
  "Price": 235,
  "Lien": " https://www.relaischateaux.com/us/france/noizay-indre-et-loire-noizay "
 },
 {
  "Hotel": "Château de Valmer",
  "Departement": " (Var)",
  "NumberOfRooms": " 45Rooms",
  "Price": 244,
  "Lien": " https://www.relaischateaux.com/us/france/chateau-de-valmer-la-croix-valmer "
 },
 {
  "Hotel": "Grand Hôtel du Lion d’Or",
  "Departement": " (Loir-et-Cher)",
  "NumberOfRooms": " 16Rooms",
  "Price": 171,
  "Lien": " https://www.relaischateaux.com/us/france/liondor-loir-et-cher-romorantin-lanthenay "
 }
]

//list of chef in each hotel&restaurant from relais chateaux
const chef = [
 {
  "Hotel": "Hotel & Restaurant Thierry Drapeau",
  "Zipcode": 85260,
  "Chef": " Thierry Drapeau "
 },
 {
  "Hotel": "Maison Decoret",
  "Zipcode": 32000,
  "Chef": " Jacques Decoret "
 },
 {
  "Hotel": "Lucas Carton",
  "Zipcode": 75008,
  "Chef": " Julien Dumas "
 },
 {
  "Hotel": "Baumanière Hôtel & Spa",
  "Zipcode": 13520,
  "Chef": " Glenn Viel "
 },
 {
  "Hotel": "Michel Trama",
  "Zipcode": 47270,
  "Chef": " Michel Trama "
 },
 {
  "Hotel": "Hotel Ile de la Lagune Thalasso & Spa",
  "Zipcode": 66750,
  "Chef": " Christophe Schmitt "
 },
 {
  "Hotel": "Georges Blanc Parc & Spa",
  "Zipcode": 15400,
  "Chef": " Georges Blanc "
 },
 {
  "Hotel": "Château de Drudas",
  "Zipcode": 31480,
  "Chef": " Axell Boisselier "
 },
 {
  "Hotel": "Les Hautes Roches",
  "Zipcode": 37210,
  "Chef": " Didier Edon "
 },
 {
  "Hotel": "Auberge du Jeu de Paume",
  "Zipcode": 60500,
  "Chef": " Julien Lucas "
 },
 {
  "Hotel": "Monte-Carlo Beach",
  "Zipcode": 61900,
  "Chef": " Paolo Sari "
 },
 {
  "Hotel": "Les Prés d’Eugénie - Maison Guérard",
  "Zipcode": 40320,
  "Chef": " Michel Guérard "
 },
 {
  "Hotel": "La Chapelle Saint-Martin",
  "Zipcode": 87510,
  "Chef": " Gilles Dudognon "
 },
 {
  "Hotel": "Hôtel Splendide Royal Paris",
  "Zipcode": 75008,
  "Chef": " Vito Grippa "
 },
 {
  "Hotel": "La Signoria & Spa",
  "Zipcode": 20260,
  "Chef": " Alexandre Fabris "
 },
 {
  "Hotel": "La Bastide",
  "Zipcode": 32150,
  "Chef": " Jérôme Artiguebère "
 },
 {
  "Hotel": "Restaurant Alexandre",
  "Zipcode": 30128,
  "Chef": " Michel Kayser "
 },
 {
  "Hotel": "L’Hôtel de Toiras & Villa Clarisse",
  "Zipcode": 17410,
  "Chef": " Antonio Sanna "
 },
 {
  "Hotel": "Domaine de la Bretesche Golf & Spa",
  "Zipcode": 44780,
  "Chef": " Frédéric Murati "
 },
 {
  "Hotel": "La Grande Maison de Bernard Magrez",
  "Zipcode": 33000,
  "Chef": " Jean-Denis Le Bras - Pierre Gagnaire "
 },
 {
  "Hotel": "L'Auberge Basque",
  "Zipcode": 64310,
  "Chef": " Cédric Béchade "
 },
 {
  "Hotel": "Château de Codignat",
  "Zipcode": 63190,
  "Chef": " Mathieu Barbet "
 },
 {
  "Hotel": "L’Arnsbourg Restaurant et Hôtel",
  "Zipcode": 57230,
  "Chef": " Fabien Mengus "
 },
 {
  "Hotel": "Hostellerie de Levernois",
  "Zipcode": 21200,
  "Chef": " Philippe Augé "
 },
 {
  "Hotel": "Château de Noirieux",
  "Zipcode": 49125,
  "Chef": " Christophe Guillemot "
 },
 {
  "Hotel": "Restaurant Christopher Coutanceau",
  "Zipcode": 17000,
  "Chef": " Christopher Coutanceau "
 },
 {
  "Hotel": "Les Bergeries de Palombaggia",
  "Zipcode": 20137,
  "Chef": " Jean-Jacques Gauthier "
 },
 {
  "Hotel": "Pierre Gagnaire",
  "Zipcode": 75008,
  "Chef": " Pierre Gagnaire "
 },
 {
  "Hotel": "Le Phébus & Spa - Villa des Anges",
  "Zipcode": 84220,
  "Chef": " Xavier Mathieu "
 },
 {
  "Hotel": "Le Couvent des Minimes Hôtel & Spa L'Occitane",
  "Zipcode": 43000,
  "Chef": " Jérôme ROY "
 },
 {
  "Hotel": "Château des Avenières",
  "Zipcode": 74350,
  "Chef": " Anthony Laboubé "
 },
 {
  "Hotel": "Restaurant Gill",
  "Zipcode": 76000,
  "Chef": " Gilles Tournadre "
 },
 {
  "Hotel": "Le Saint-James Bouliac",
  "Zipcode": 33270,
  "Chef": " Nicolas Magie "
 },
 {
  "Hotel": "Auberge des Templiers",
  "Zipcode": 45290,
  "Chef": " Martin Simonart "
 },
 {
  "Hotel": "Le Petit Nice-Passedat",
  "Zipcode": 13007,
  "Chef": " Gérald Passedat "
 },
 {
  "Hotel": "Restaurant Guy Lassausaie",
  "Zipcode": 69380,
  "Chef": " Guy Lassausaie "
 },
 {
  "Hotel": "Le Chambard",
  "Zipcode": 68240,
  "Chef": " Olivier Nasti "
 },
 {
  "Hotel": "Domaine Les Crayères",
  "Zipcode": 51100,
  "Chef": " Philippe Mille "
 },
 {
  "Hotel": "Château d’Audrieu",
  "Zipcode": 14250,
  "Chef": " Olivier Barbarin "
 },
 {
  "Hotel": "L’Oasis",
  "Zipcode": 62100,
  "Chef": " Alain Montigny "
 },
 {
  "Hotel": "Hôtel-Spa La Bouitte – Restaurant René et Maxime Meilleur",
  "Zipcode": 73440,
  "Chef": " René and Maxime Meilleur "
 },
 {
  "Hotel": "Les Maisons de Bricourt",
  "Zipcode": 35350,
  "Chef": " Olivier & Hugo Roellinger "
 },
 {
  "Hotel": "Domaine d’Auriac",
  "Zipcode": 11009,
  "Chef": " Philippe Deschamps "
 },
 {
  "Hotel": "Abbaye de la Bussière",
  "Zipcode": 21360,
  "Chef": " Guillaume Royer "
 },
 {
  "Hotel": "Hameau Albert Ier",
  "Zipcode": 74402,
  "Chef": " Damien Leveau "
 },
 {
  "Hotel": "Manoir de Lan-Kerellec",
  "Zipcode": 22560,
  "Chef": " Anthony Avoine "
 },
 {
  "Hotel": "Hôtel & Spa du Castellet",
  "Zipcode": 83330,
  "Chef": " Christophe Bacquié "
 },
 {
  "Hotel": "Château de La Chèvre d’Or",
  "Zipcode": 63600,
  "Chef": " Arnaud Faye "
 },
 {
  "Hotel": "Domaine de Rochevilaine",
  "Zipcode": 56190,
  "Chef": " Maxime Nouail "
 },
 {
  "Hotel": "Passage 53",
  "Zipcode": 75002,
  "Chef": " Shinichi Sato "
 },
 {
  "Hotel": "Les Hauts de Loire",
  "Zipcode": 41150,
  "Chef": " Rémy Giraud "
 },
 {
  "Hotel": "La Bonne Étape",
  "Zipcode": 41600,
  "Chef": " Jany Gleize "
 },
 {
  "Hotel": "Château de Courcelles",
  "Zipcode": 22200,
  "Chef": " Lucas Vannier "
 },
 {
  "Hotel": "Château de Valmer",
  "Zipcode": 83420,
  "Chef": " Jimmy Coutel "
 },
 {
  "Hotel": "Bas Rupts",
  "Zipcode": 88400,
  "Chef": " Michel Philippe "
 },
 {
  "Hotel": "Le Relais Bernard Loiseau – Spa Loiseau des Sens",
  "Zipcode": 21210,
  "Chef": " Patrick Bertron "
 },
 {
  "Hotel": "Maison Pic",
  "Zipcode": 26000,
  "Chef": " Anne-Sophie Pic "
 },
 {
  "Hotel": "Château d’Adoménil",
  "Zipcode": 54300,
  "Chef": " Cyril Leclerc "
 },
 {
  "Hotel": "Château de Rochegude",
  "Zipcode": 26790,
  "Chef": " Thierry Frebout "
 },
 {
  "Hotel": "Villa Gallici",
  "Zipcode": 13100,
  "Chef": " Christophe Gavot "
 },
 {
  "Hotel": "Château de Berne",
  "Zipcode": 83780,
  "Chef": " Benjamin Collombat "
 },
 {
  "Hotel": "Saint James Paris",
  "Zipcode": 75116,
  "Chef": " Adrien Brunet "
 },
 {
  "Hotel": "Château de Montreuil",
  "Zipcode": 62170,
  "Chef": " Jean-Marie Le Guen "
 },
 {
  "Hotel": "Le Grand Véfour",
  "Zipcode": 75001,
  "Chef": " Guy Martin "
 },
 {
  "Hotel": "Hostellerie La Briqueterie",
  "Zipcode": 51530,
  "Chef": " Thomas Debouzy "
 },
 {
  "Hotel": "La Côte Saint Jacques & Spa",
  "Zipcode": 89300,
  "Chef": " Jean-Michel Lorain "
 },
 {
  "Hotel": "Le Castel Marie-Louise",
  "Zipcode": 44504,
  "Chef": " Eric Mignard "
 },
 {
  "Hotel": "Le Pré Catelan",
  "Zipcode": 75016,
  "Chef": " Frédéric Anton "
 },
 {
  "Hotel": "Tiara Yaktsa",
  "Zipcode": 65900,
  "Chef": " Guillaume Anor "
 },
 {
  "Hotel": "Château de Locguénolé",
  "Zipcode": 56700,
  "Chef": " Jérémie Louis "
 },
 {
  "Hotel": "Hostellerie La Cheneaudière & Spa",
  "Zipcode": 67420,
  "Chef": " Roger Bouhassoun "
 },
 {
  "Hotel": "Hôtel de la Plage",
  "Zipcode": 29550,
  "Chef": " Yoann Noël "
 },
 {
  "Hotel": "Villa René Lalique",
  "Zipcode": 67290,
  "Chef": " Jean-Georges Klein "
 },
 {
  "Hotel": "Château de la Treyne",
  "Zipcode": 46200,
  "Chef": " Stéphane Andrieux "
 },
 {
  "Hotel": "Brittany & Spa",
  "Zipcode": 29681,
  "Chef": " Loic Le Bail "
 },
 {
  "Hotel": "Le Suquet, Sébastien Bras",
  "Zipcode": 12210,
  "Chef": " Sébastien Bras "
 },
 {
  "Hotel": "La Bastide Saint-Antoine",
  "Zipcode": 61300,
  "Chef": " Laurent Barberot "
 },
 {
  "Hotel": "La Villa Calvi",
  "Zipcode": 20260,
  "Chef": " Jerome Voltzenlogel "
 },
 {
  "Hotel": "Assiette Champenoise",
  "Zipcode": 51430,
  "Chef": " Arnaud Lallement "
 },
 {
  "Hotel": "Château de Mercuès",
  "Zipcode": 46090,
  "Chef": " Julien Poisot "
 },
 {
  "Hotel": "Restaurant Pierre Orsi",
  "Zipcode": 69006,
  "Chef": " Pierre Orsi "
 },
 {
  "Hotel": "La Bastide de Capelongue",
  "Zipcode": 84480,
  "Chef": " Édouard Loubet "
 },
 {
  "Hotel": "Yoann Conte – Bord du Lac Hôtel Restaurant",
  "Zipcode": 74290,
  "Chef": " Yoann Conte "
 },
 {
  "Hotel": "Hôtel Les Barmes de l'Ours",
  "Zipcode": 73150,
  "Chef": " Antoine Gras "
 },
 {
  "Hotel": "La Grenouillère",
  "Zipcode": 62170,
  "Chef": " Alexandre Gauthier "
 },
 {
  "Hotel": "La Pyramide Patrick Henriroux",
  "Zipcode": 38200,
  "Chef": " Patrick Henriroux "
 },
 {
  "Hotel": "Hôtel Restaurant En Marge",
  "Zipcode": 31320,
  "Chef": " Frank Renimel "
 },
 {
  "Hotel": "Relais de la Poste",
  "Zipcode": 40140,
  "Chef": " Jean Coussau "
 },
 {
  "Hotel": "Le Club de Cavalière & Spa",
  "Zipcode": 83980,
  "Chef": " Marc Dach "
 },
 {
  "Hotel": "Grand Hôtel de Cala Rossa & Spa",
  "Zipcode": 20137,
  "Chef": " Pascal Cayeux "
 },
 {
  "Hotel": "Le Mas de Pierre",
  "Zipcode": 65700,
  "Chef": " Emmanuel Lehrer "
 },
 {
  "Hotel": "Hôtel Restaurant Clos des Sens - Laurent PETIT",
  "Zipcode": 74940,
  "Chef": " Laurent Petit "
 },
 {
  "Hotel": "Jiva Hill Resort",
  "Zipcode": 11700,
  "Chef": " Vincent Betton "
 },
 {
  "Hotel": "Hôtel Le Chabichou Restaurants & Spa",
  "Zipcode": 73120,
  "Chef": " Michel Rochedy & Stéphane Buron "
 },
 {
  "Hotel": "Château de Noizay",
  "Zipcode": 37210,
  "Chef": " Frédéric Collin "
 },
 {
  "Hotel": "Au Crocodile",
  "Zipcode": 67000,
  "Chef": " Franck Pelux "
 },
 {
  "Hotel": "Royal Champagne Hotel & Spa",
  "Zipcode": 0,
  "Chef": 0
 },
 {
  "Hotel": "Château de Germigney",
  "Zipcode": 39600,
  "Chef": " Pierre Basso-Moro "
 },
 {
  "Hotel": "La Réserve",
  "Zipcode": 81000,
  "Chef": " Benoit Solomiac "
 },
 {
  "Hotel": "La Maison des Bois – Marc Veyrat",
  "Zipcode": 74230,
  "Chef": " Marc Veyrat "
 },
 {
  "Hotel": "Flocons de Sel",
  "Zipcode": 74120,
  "Chef": " Emmanuel Renaut "
 },
 {
  "Hotel": "Cazaudehore « La Forestière »",
  "Zipcode": 78100,
  "Chef": " Gregory Balland "
 },
 {
  "Hotel": "Castel Clara Thalasso & Spa",
  "Zipcode": 56360,
  "Chef": " Franck Moisan "
 },
 {
  "Hotel": "Cap d’Antibes Beach Hotel",
  "Zipcode": 61600,
  "Chef": " Nicolas Rondelli "
 },
 {
  "Hotel": "Clarance Hôtel",
  "Zipcode": 59000,
  "Chef": " Thibaut Gamba "
 },
 {
  "Hotel": "Maison Lameloise",
  "Zipcode": 71150,
  "Chef": " Eric Pras "
 },
 {
  "Hotel": "Maison Rostang",
  "Zipcode": 75017,
  "Chef": " Michel Rostang and Nicolas Beaumann "
 },
 {
  "Hotel": "Hôtel Parc Victoria",
  "Zipcode": 64500,
  "Chef": " Guillaume Applaincourt "
 },
 {
  "Hotel": "Moulin de l’Abbaye",
  "Zipcode": 24310,
  "Chef": " Jean Michel Bardet "
 },
 {
  "Hotel": "La Ferme Saint-Siméon",
  "Zipcode": 14600,
  "Chef": " Sébastien Faramond "
 },
 {
  "Hotel": "Coquillade Village",
  "Zipcode": 84400,
  "Chef": " Thierry Enderlin "
 },
 {
  "Hotel": "Restaurant Mirazur",
  "Zipcode": 65000,
  "Chef": " Mauro Colagreco "
 },
 {
  "Hotel": "Pan Deï Palais",
  "Zipcode": 83990,
  "Chef": " Quentin Durand "
 },
 {
  "Hotel": "Hôtel et Restaurant Régis et Jacques Marcon",
  "Zipcode": 43290,
  "Chef": " Régis & Jacques Marcon "
 },
 {
  "Hotel": "Le Domaine de Verchant",
  "Zipcode": 34170,
  "Chef": " Damien Cousseau "
 },
 {
  "Hotel": "Le Vieux Logis",
  "Zipcode": 24510,
  "Chef": " Vincent Arnould "
 },
 {
  "Hotel": "Château de Fonscolombe",
  "Zipcode": 13610,
  "Chef": " Nadège Serret "
 },
 {
  "Hotel": "Château de Riell",
  "Zipcode": 66500,
  "Chef": " Sébastien Nouveau "
 },
 {
  "Hotel": "Hôtel Impérial Garoupe",
  "Zipcode": 66000,
  "Chef": " Pierre-Alain Garnier "
 },
 {
  "Hotel": "Hôtel Crillon le Brave",
  "Zipcode": 84410,
  "Chef": " Julien Marseault "
 },
 {
  "Hotel": "Grand Hôtel du Lion d’Or",
  "Zipcode": 41200,
  "Chef": " Didier Clément "
 },
 {
  "Hotel": "Au Cœur du Village Hôtel & Spa",
  "Zipcode": 74220,
  "Chef": " Cédric Heurtebise & Vincent Deforce "
 },
 {
  "Hotel": "Hôtel Restaurant Auberge du Père Bise – Jean Sulpice",
  "Zipcode": 0,
  "Chef": 0
 },
 {
  "Hotel": "Château de Bagnols",
  "Zipcode": 69620,
  "Chef": " Jean-Alexandre Ouaratta "
 },
 {
  "Hotel": "Château Cordeillan-Bages",
  "Zipcode": 33250,
  "Chef": " Julien Lefebvre "
 },
 {
  "Hotel": "Villa Florentine",
  "Zipcode": 69005,
  "Chef": " David Delsart "
 }
]

//list of starred restaurants according to michelin guided
const michelin = [
 {
  "Chef": "Inaki Aizpitarte",
  "Zipcode": 75011,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2e6jtym/le-chateaubriand-paris-11 "
 },
 {
  "Chef": "Antonin Bonnet",
  "Zipcode": 75006,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/a22cmkwd/quinsou-paris-06 "
 },
 {
  "Chef": 0,
  "Zipcode": 35000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3rs0bg1/racines-rennes "
 },
 {
  "Chef": "Christophe Billau",
  "Zipcode": 6420,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3615836/auberge-quintessence-roubion "
 },
 {
  "Chef": "Stéphane Carrade",
  "Zipcode": 33260,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2851256/le-skiff-club-la-teste-de-buch "
 },
 {
  "Chef": "Guillaume Goupil",
  "Zipcode": 75001,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2fdc0eg/le-baudelaire-paris-01 "
 },
 {
  "Chef": "Cédric Deckert",
  "Zipcode": 67580,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3614676/la-merise-laubach "
 },
 {
  "Chef": "Keisuke Yamagishi",
  "Zipcode": 75116,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3g8qf775/etude-paris-16 "
 },
 {
  "Chef": "Nicole Fagegaltier et Bruno Rouquier",
  "Zipcode": 12390,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/28vap07/vieux-pont-belcastel "
 },
 {
  "Chef": "Alexandre Soulier",
  "Zipcode": 64500,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/szxhgy9t/locean-saint-jean-de-luz "
 },
 {
  "Chef": "Lutz Janisch",
  "Zipcode": 57230,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/28x69qn/le-strasbourg-bitche "
 },
 {
  "Chef": "Baptiste Denieul",
  "Zipcode": 56380,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/34milgg2/auberge-tiegezh-guer "
 },
 {
  "Chef": "Glenn Viel",
  "Zipcode": 13520,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/28tn79w/loustau-de-baumaniere-les-baux-de-provence "
 },
 {
  "Chef": "Philippe Zeiger",
  "Zipcode": 90400,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/28vc6i9/le-pot-detain-danjoutin "
 },
 {
  "Chef": "Nobuyuki Akishige",
  "Zipcode": 75011,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3547121/automne-paris-11 "
 },
 {
  "Chef": "Jean Chauvel",
  "Zipcode": 92100,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3614956/jean-chauvel-boulogne-billancourt "
 },
 {
  "Chef": "Mathieu Viannay",
  "Zipcode": 69001,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2et3r6g/mere-brazier-lyon "
 },
 {
  "Chef": "Jérôme Banctel",
  "Zipcode": 75008,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/9sqrw32m/le-gabriel-paris-08 "
 },
 {
  "Chef": "Jérôme Brochot",
  "Zipcode": 71300,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29zgkr3/jerome-brochot-montceau-les-mines "
 },
 {
  "Chef": "Benoit Dumas",
  "Zipcode": 75017,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2eo1t6h/agape-paris-17 "
 },
 {
  "Chef": "Pierre Bertranet",
  "Zipcode": 87800,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2awwemv/le-moulin-de-la-gorce-la-roche-labeille "
 },
 {
  "Chef": "Yohann Chapuis",
  "Zipcode": 71700,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3uonmfw/greuze-tournus "
 },
 {
  "Chef": "Patrice Vander",
  "Zipcode": 74500,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29gdnxp256n/les-fresques-evian-les-bains "
 },
 {
  "Chef": "Christophe Hagnerelle",
  "Zipcode": 59910,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29rcoot/val-dauge-bondues "
 },
 {
  "Chef": "Gaël Orieux",
  "Zipcode": 75007,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2dof8zp/auguste-paris-07 "
 },
 {
  "Chef": "Christophe Comes",
  "Zipcode": 66000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2ajskia/la-galinette-perpignan "
 },
 {
  "Chef": "Bernard Pacaud",
  "Zipcode": 75004,
  "NumberOfStars": " 3 stars",
  "Link": " https://restaurant.michelin.fr/2a8d13e/lambroisie-paris-04 "
 },
 {
  "Chef": "Pierre-Louis Marin",
  "Zipcode": 66720,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2a02pjj/auberge-du-cellier-montner "
 },
 {
  "Chef": "Sébastien Chambru",
  "Zipcode": 71960,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3fa7ojh3/lo-des-vignes-fuisse "
 },
 {
  "Chef": "Chiho Kanzaki",
  "Zipcode": 75012,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3ez7apxd/virtus-paris-12 "
 },
 {
  "Chef": "Nicolas Nobis",
  "Zipcode": 53100,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2f77d7t/leveil-des-sens-mayenne "
 },
 {
  "Chef": "Gérald Passedat",
  "Zipcode": 13610,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3068881/louison-le-puy-sainte-reparade "
 },
 {
  "Chef": "Jean-Marc Boyer",
  "Zipcode": 11600,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29pxfvs/le-puits-du-tresor-lastours "
 },
 {
  "Chef": "Yannick Alléno",
  "Zipcode": 75008,
  "NumberOfStars": " 3 stars",
  "Link": " https://restaurant.michelin.fr/2ab5qlx/alleno-paris-au-pavillon-ledoyen-paris-08 "
 },
 {
  "Chef": "Jean-Georges Klein etPaul Stradner",
  "Zipcode": 67290,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/t645yf86/villa-rene-lalique-wingen-sur-moder "
 },
 {
  "Chef": "Mickaël Gracieux",
  "Zipcode": 6000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2epn29l/laromate-nice "
 },
 {
  "Chef": 0,
  "Zipcode": 51000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/294k5c0/jerome-feck-chalons-en-champagne "
 },
 {
  "Chef": "Christian Sinicropi",
  "Zipcode": 6400,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/292bk5u/la-palme-dor-cannes "
 },
 {
  "Chef": "Michele Fortunato ",
  "Zipcode": 75008,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2fdi6av208/il-carpaccio-paris-08 "
 },
 {
  "Chef": "Jimmy Coutel",
  "Zipcode": 83420,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2btuhm0/la-palmeraie-la-croix-valmer "
 },
 {
  "Chef": "Jean-Claude Cahagnet",
  "Zipcode": 93600,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2aga7gz/auberge-des-saints-peres-aulnay-sous-bois "
 },
 {
  "Chef": "Fréderic Claquin",
  "Zipcode": 29120,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2bi0j2j/les-trois-rochers-sainte-marine "
 },
 {
  "Chef": "Guillaume Monjuré",
  "Zipcode": 38250,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2d2itah0/palegrie-correncon-en-vercors "
 },
 {
  "Chef": "Jacky Ribault",
  "Zipcode": 75011,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/jh83esx/qui-plume-la-lune-paris-11 "
 },
 {
  "Chef": "Michaël Arnoult",
  "Zipcode": 73170,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2dd2ann/les-morainieres-jongieux "
 },
 {
  "Chef": "Hélène Darroze",
  "Zipcode": 75006,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2a93ort/marsan-helene-darroze-paris-06 "
 },
 {
  "Chef": "Cyril Attrazic",
  "Zipcode": 48130,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/28rd58x/cyril-attrazic-aumont-aubrac "
 },
 {
  "Chef": "Lionel Levy",
  "Zipcode": 13002,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3f9eksg5n/alcyone-marseille-02 "
 },
 {
  "Chef": "NicolasDurif",
  "Zipcode": 17220,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/hq8ezzf7/lhysope-la-jarrie "
 },
 {
  "Chef": "Jean-Michel Bardet",
  "Zipcode": 24310,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2bk4rlv/le-moulin-de-labbaye-brantome-en-perigord "
 },
 {
  "Chef": "Franck Quinton",
  "Zipcode": 61140,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2bfnmbt/le-manoir-du-lys-bagnoles-de-lorne-normandie "
 },
 {
  "Chef": "David Delsart",
  "Zipcode": 69005,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29t2ib7/les-terrasses-de-lyon-lyon-05 "
 },
 {
  "Chef": "Julien Diaz",
  "Zipcode": 13006,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2852226/saisons-marseille-06 "
 },
 {
  "Chef": "Benjamin Collombat",
  "Zipcode": 83510,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/xhr5bt96/le-jardin-de-benjamin-lorgues "
 },
 {
  "Chef": "Alexandre Bourdas",
  "Zipcode": 14600,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2e11xi8/saquana-honfleur "
 },
 {
  "Chef": "Thierry Schwartz",
  "Zipcode": 67210,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2a619xs/thierry-schwartz-le-restaurant-obernai "
 },
 {
  "Chef": "Julien Rocheteau",
  "Zipcode": 75017,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/ygx47dyb/la-scene-theleme-paris-17 "
 },
 {
  "Chef": "Lionel Hénaff",
  "Zipcode": 29000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/suqhhtor/allium-quimper "
 },
 {
  "Chef": "Christophe Bocquillon",
  "Zipcode": 21200,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/28u6ql7/le-jardin-des-remparts-beaune "
 },
 {
  "Chef": "Nicolas Adam",
  "Zipcode": 22190,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2arxchk/la-vieille-tour-plerin "
 },
 {
  "Chef": "Thibaut Gamba",
  "Zipcode": 59000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/ua271jkd/la-table-lille "
 },
 {
  "Chef": "Stéphane Derbord",
  "Zipcode": 21000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29dkmez/stephane-derbord-dijon "
 },
 {
  "Chef": "Frédéric Larquemin",
  "Zipcode": 78000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2aiqpqd/gordon-ramsay-au-trianon-versailles "
 },
 {
  "Chef": "Damien Fagette",
  "Zipcode": 24240,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/28vws7k/la-tour-des-vents-monbazillac "
 },
 {
  "Chef": "Yoann Conte",
  "Zipcode": 74290,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2fcm39b/yoann-conte-veyrier-du-lac "
 },
 {
  "Chef": "Nicolas Coutand",
  "Zipcode": 85470,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3ws5njk2/les-genets-brem-sur-mer "
 },
 {
  "Chef": "Jean-Michel Carrette",
  "Zipcode": 71700,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2b44str/aux-terrasses-tournus "
 },
 {
  "Chef": "Julien Bousseau",
  "Zipcode": 6140,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2evgb1v/clovis-tourrettes-sur-loup "
 },
 {
  "Chef": "Jacques Decoret",
  "Zipcode": 3200,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2b7zqic/maison-decoret-vichy "
 },
 {
  "Chef": "Takayuki Honjo",
  "Zipcode": 75007,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/27ym5i25/es-paris-07 "
 },
 {
  "Chef": "Stephan Schneider",
  "Zipcode": 57200,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2ayc9n6/auberge-st-walfrid-sarreguemines "
 },
 {
  "Chef": "Christophe Quéant",
  "Zipcode": 21200,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/8zb6c2d4/le-carmin-beaune "
 },
 {
  "Chef": "Frédéric Sandrini",
  "Zipcode": 57300,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2e9sbx2/quai-des-saveurs-hagondange "
 },
 {
  "Chef": "Eric Vidal",
  "Zipcode": 24000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2dwdwxo/lessentiel-perigueux "
 },
 {
  "Chef": "Xavier Beaudiment",
  "Zipcode": 63830,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2ev16nl/le-pre-xavier-beaudiment-durtol "
 },
 {
  "Chef": "DavidBizet",
  "Zipcode": 75008,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2ab9sgk/le-taillevent-paris-08 "
 },
 {
  "Chef": "Philip Chronopoulos",
  "Zipcode": 75001,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2a7qx35/restaurant-du-palais-royal-paris-01 "
 },
 {
  "Chef": "André Taormina",
  "Zipcode": 38110,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2b416ek/ambroisie-saint-didier-de-la-tour "
 },
 {
  "Chef": "Masafumi Hamano",
  "Zipcode": 71570,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/3ffziwd6/au-14-fevrier-platre-durand "
 },
 {
  "Chef": "Florent Ladeyn",
  "Zipcode": 59299,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/13ppe4f4/auberge-du-vert-mont-boeschepe "
 },
 {
  "Chef": "Christian Morisset",
  "Zipcode": 6600,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2ejmich/le-figuier-de-st-esprit-antibes "
 },
 {
  "Chef": "Benjamin Delpierre",
  "Zipcode": 62930,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2fa1zgi202/la-liegeoise-wimereux "
 },
 {
  "Chef": "Alexandre Gauthier",
  "Zipcode": 62170,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2a0ne3f/la-grenouillere-la-madelaine-sous-montreuil "
 },
 {
  "Chef": "Jean-Yves Guého",
  "Zipcode": 44100,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2a32200/latlantide-1874-maison-gueho-nantes "
 },
 {
  "Chef": "Jean-Louis Nomicos",
  "Zipcode": 75016,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2fdwgd3/nomicos-paris-16 "
 },
 {
  "Chef": "Sébastien Carmona Porto",
  "Zipcode": 75008,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3o59i9b/helen-paris-08 "
 },
 {
  "Chef": "David Gallienne",
  "Zipcode": 27620,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/omm63qr/le-jardin-des-plumes-giverny "
 },
 {
  "Chef": "Kei Kobayashi",
  "Zipcode": 75001,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/9tmwymw/kei-paris-01 "
 },
 {
  "Chef": "Mathew Hegarty",
  "Zipcode": 38860,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2bufvvg87/le-ptit-polyte-venosc "
 },
 {
  "Chef": "Jérémie Le Calvez",
  "Zipcode": 29250,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2aw36e7/auberge-la-pomme-dapi-saint-pol-de-leon "
 },
 {
  "Chef": "Emmanuel Hernandez",
  "Zipcode": 59300,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3yjthyc/le-musigny-valenciennes "
 },
 {
  "Chef": "Yves Giustiniani",
  "Zipcode": 60350,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2ak8isu/auberge-la-bonne-idee-saint-jean-aux-bois "
 },
 {
  "Chef": "Hugo Roellinger",
  "Zipcode": 35350,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/291q1xd/le-coquillage-saint-meloir-des-ondes "
 },
 {
  "Chef": "Guillaume Sourrieu",
  "Zipcode": 13007,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29w1hx9/lepuisette-marseille-07 "
 },
 {
  "Chef": "Tomohiro Uido",
  "Zipcode": 78160,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2ahm97s/le-village-marly-le-roi "
 },
 {
  "Chef": "Richard Rocle",
  "Zipcode": 7170,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2b9eb0t/auberge-de-montfleury-villeneuve-de-berg "
 },
 {
  "Chef": "Pierre Troccaz",
  "Zipcode": 73130,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/h43i086/le-clocher-des-peres-saint-martin-sur-la-chambre "
 },
 {
  "Chef": "Jean-Baptiste Lavergne-Morazzani",
  "Zipcode": 78000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/d4dm7ddr/la-table-du-11-versailles "
 },
 {
  "Chef": "Younghoon Lee",
  "Zipcode": 69006,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/44ahwpa/le-passe-temps-lyon-06 "
 },
 {
  "Chef": "Paul BOCUSE",
  "Zipcode": 69660,
  "NumberOfStars": " 3 stars",
  "Link": " https://restaurant.michelin.fr/29tbf1t/paul-bocuse-collonges-au-mont-dor "
 },
 {
  "Chef": "Didier Goiffon",
  "Zipcode": 1960,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/28zbkc6/la-marelle-peronnas "
 },
 {
  "Chef": "Tristan Arhan",
  "Zipcode": 76200,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2dtoif7/les-voiles-dor-dieppe "
 },
 {
  "Chef": "Katsuaki Okiyama",
  "Zipcode": 75010,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/mfh3jse/abri-paris-10 "
 },
 {
  "Chef": "Takayuki Nameura",
  "Zipcode": 75014,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3615586/montee-paris-14 "
 },
 {
  "Chef": "Franck Charpentier",
  "Zipcode": 77400,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/u1pjp7ux/le-quincangrogne-dampmart "
 },
 {
  "Chef": 0,
  "Zipcode": 21200,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/28updvu/hostellerie-de-levernois-levernois "
 },
 {
  "Chef": "Antoine Gras",
  "Zipcode": 73150,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2dpd99z/la-table-de-lours-val-disere "
 },
 {
  "Chef": "Maxime Laurenson",
  "Zipcode": 75007,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2aaahmg/loiseau-rive-gauche-paris-07 "
 },
 {
  "Chef": "Le chef breton Julien Hennote",
  "Zipcode": 35800,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/a6rns6u0/le-pourquoi-pas-dinard "
 },
 {
  "Chef": "Serge Vieira",
  "Zipcode": 15110,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2ey495p/serge-vieira-chaudes-aigues "
 },
 {
  "Chef": "Patrick Henriroux",
  "Zipcode": 38200,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2f4bg71/la-pyramide-patrick-henriroux-vienne "
 },
 {
  "Chef": "Marc Fontanne",
  "Zipcode": 30400,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2d2wqpd/le-prieure-villeneuve-les-avignon "
 },
 {
  "Chef": "Kosuke Nabeta",
  "Zipcode": 75005,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3yamflk/sola-paris-05 "
 },
 {
  "Chef": "Eric Jambon",
  "Zipcode": 38300,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/28zo6i3/domaine-des-sequoias-ruy "
 },
 {
  "Chef": "Pierre GAGNAIRE",
  "Zipcode": 75008,
  "NumberOfStars": " 3 stars",
  "Link": " https://restaurant.michelin.fr/2abhfav/pierre-gagnaire-paris-08 "
 },
 {
  "Chef": "Jean-Jacques Prévôt",
  "Zipcode": 84300,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2947j86/maison-prevot-cavaillon "
 },
 {
  "Chef": "Loic Le Bail",
  "Zipcode": 29681,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2cnbixn/le-brittany-roscoff "
 },
 {
  "Chef": "Thierry Drapeau",
  "Zipcode": 85260,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2dnrb62/thierry-drapeau-saint-sulpice-le-verdon "
 },
 {
  "Chef": "Raphaël Le Mancq",
  "Zipcode": 74170,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2di661r/le-serac-saint-gervais-les-bains "
 },
 {
  "Chef": "Emmanuel Renaut",
  "Zipcode": 74120,
  "NumberOfStars": " 3 stars",
  "Link": " https://restaurant.michelin.fr/29wzk9t/flocons-de-sel-megeve "
 },
 {
  "Chef": "Jérôme Bansard",
  "Zipcode": 14430,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/28wgjgo/le-pave-dauge-beuvron-en-auge "
 },
 {
  "Chef": "Hervé Bourdon",
  "Zipcode": 56510,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2dy7rqn/le-petit-hotel-du-grand-large-portivy "
 },
 {
  "Chef": "Éric Girardin",
  "Zipcode": 68000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/xha7r0xl/girardin-gastronomique-colmar "
 },
 {
  "Chef": "Frédéric Garnier",
  "Zipcode": 4360,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2cbq46s/la-bastide-de-moustiers-moustiers-sainte-marie "
 },
 {
  "Chef": "Christophe Pelé",
  "Zipcode": 75008,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/sntd30zx/le-clarence-paris-08 "
 },
 {
  "Chef": "Michel Trama",
  "Zipcode": 47270,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2ckuncq/michel-trama-puymirol "
 },
 {
  "Chef": "Christophe Blot",
  "Zipcode": 78720,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2agz71j/la-table-des-blot-auberge-du-chateau-dampierre-en-yvelines "
 },
 {
  "Chef": "Camille Constantin",
  "Zipcode": 72200,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29hrl09/le-moulin-des-quatre-saisons-la-fleche "
 },
 {
  "Chef": "Arnaud Lallement",
  "Zipcode": 51430,
  "NumberOfStars": " 3 stars",
  "Link": " https://restaurant.michelin.fr/2cliodi/assiette-champenoise-tinqueux "
 },
 {
  "Chef": "Pierre Lambinon",
  "Zipcode": 31000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2fdyj14/py-r-toulouse "
 },
 {
  "Chef": "Pierre Marion",
  "Zipcode": 50100,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2eh8fjc/le-pily-cherbourg-en-cotentin "
 },
 {
  "Chef": "Patrick Lagnès",
  "Zipcode": 46190,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2b0i0m7/au-dejeuner-de-sousceyrac-sousceyrac-en-quercy "
 },
 {
  "Chef": "Olivier Alemany",
  "Zipcode": 84240,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2eebgpo/la-closerie-ansouis "
 },
 {
  "Chef": "Maxime Nouail",
  "Zipcode": 56190,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2bij0t1/domaine-de-rochevilaine-billiers "
 },
 {
  "Chef": "Jany Gleize",
  "Zipcode": 4160,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2bp5jf6/la-bonne-etape-chateau-arnoux "
 },
 {
  "Chef": "Michel Sarran",
  "Zipcode": 31000,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2b380z8/michel-sarran-toulouse "
 },
 {
  "Chef": "Olivier Beurné",
  "Zipcode": 56100,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29saut6/lamphitryon-lorient "
 },
 {
  "Chef": "Emmanuel Hebrard",
  "Zipcode": 63000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/uhpabnjd/lostal-clermont-ferrand "
 },
 {
  "Chef": "Anthony Bonnet",
  "Zipcode": 69005,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29t3z0x/les-loges-lyon-05 "
 },
 {
  "Chef": "Martin et David Ibarboure",
  "Zipcode": 64210,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2es4wcd/briketenia-guethary "
 },
 {
  "Chef": "Christophe Schmitt",
  "Zipcode": 66750,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2as8r3a/lalmandin-saint-cyprien-plage "
 },
 {
  "Chef": "Anthony Jéhanno",
  "Zipcode": 56400,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2f8kr60/terre-mer-auray "
 },
 {
  "Chef": "Glenn Viel",
  "Zipcode": 73120,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2f4vonu/baumaniere-1850-courchevel-1850 "
 },
 {
  "Chef": "Jacques Barnachon",
  "Zipcode": 25210,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/28xqe8v/letang-du-moulin-bonnetage "
 },
 {
  "Chef": "Jean-Denis Lebras",
  "Zipcode": 33000,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/a7u4fcer/la-grande-maison-de-bernard-magrez-bordeaux "
 },
 {
  "Chef": "Loïc Dantec",
  "Zipcode": 75008,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2f3fs2n/114-faubourg-paris-08 "
 },
 {
  "Chef": "Romain Hubert",
  "Zipcode": 38080,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/5jdkm0u/lemulsion-saint-alban-de-roche "
 },
 {
  "Chef": "Romuald Fassenet",
  "Zipcode": 39100,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2ejhn11/chateau-du-mont-joly-sampans "
 },
 {
  "Chef": "Christian Lherm",
  "Zipcode": 69002,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29svngf/les-trois-domes-lyon-02 "
 },
 {
  "Chef": "Nicolas Sale",
  "Zipcode": 75001,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2a7bw8d/ritz-paris-les-jardins-de-lespadon-paris-01 "
 },
 {
  "Chef": "Jocelyn Herland",
  "Zipcode": 75001,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2a7d9c1/le-meurice-alain-ducasse-paris-01 "
 },
 {
  "Chef": "Jean-Yves Jaguin",
  "Zipcode": 22300,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29pm63n/la-ville-blanche-la-ville-blanche "
 },
 {
  "Chef": "Gilles Tournadre",
  "Zipcode": 76000,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2aqe7bm/gill-rouen "
 },
 {
  "Chef": "Simone Zanoni",
  "Zipcode": 75008,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/9q8vl0jf/le-george-paris-08 "
 },
 {
  "Chef": "Kunihisa Goto",
  "Zipcode": 77300,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29i66ux/laxel-fontainebleau "
 },
 {
  "Chef": "JérémyScalia",
  "Zipcode": 13210,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/4038001/restaurant-de-tourrel-saint-remy-de-provence "
 },
 {
  "Chef": "Didier Edon",
  "Zipcode": 37210,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2cyg6yb/les-hautes-roches-rochecorbon "
 },
 {
  "Chef": "Olivier Samson",
  "Zipcode": 56000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3n5gkk2/la-gourmandiere-la-table-dolivier-vannes "
 },
 {
  "Chef": "Laurent Haller",
  "Zipcode": 68170,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/9tnfzh4/le-7eme-continent-rixheim "
 },
 {
  "Chef": "Olivier Boussard",
  "Zipcode": 72000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29vchdk/le-beaulieu-le-mans "
 },
 {
  "Chef": "Jérémy Czaplicki",
  "Zipcode": 83150,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2e1on31/les-oliviers-bandol "
 },
 {
  "Chef": "Anthony Bisquerra",
  "Zipcode": 74120,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/9tlmhvt/la-table-de-lalpaga-megeve "
 },
 {
  "Chef": "Bernard Bach et William Camdelon",
  "Zipcode": 32600,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/29nnrkd/le-puits-st-jacques-pujaudran "
 },
 {
  "Chef": "Yannick Delpech",
  "Zipcode": 31770,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2b3pf5k/lamphitryon-colomiers "
 },
 {
  "Chef": "Franck Pelux",
  "Zipcode": 67000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/kl196wcf/au-crocodile-strasbourg "
 },
 {
  "Chef": "Indra Carrillo",
  "Zipcode": 75009,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3491071/la-condesa-paris-09 "
 },
 {
  "Chef": "Pierre Reboul",
  "Zipcode": 13290,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/9pmxzh3/pierre-reboul-aix-en-provence "
 },
 {
  "Chef": "Mathias Dandine",
  "Zipcode": 13100,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2x1lce26/le-saint-esteve-le-tholonet "
 },
 {
  "Chef": "Keita Kitamura",
  "Zipcode": 75002,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3345846/erh-paris-02 "
 },
 {
  "Chef": "Thierry Renou",
  "Zipcode": 33120,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/28q4ohd/le-patio-arcachon "
 },
 {
  "Chef": "Fumio KUDAKA",
  "Zipcode": 35260,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2f8ln9w/la-table-breizh-cafe-cancale "
 },
 {
  "Chef": "Sylvain Guillemot",
  "Zipcode": 35530,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2ao77e3/auberge-du-pont-dacigne-noyal-sur-vilaine "
 },
 {
  "Chef": "Rémi Chambard",
  "Zipcode": 92410,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2aiulws5/le-corot-ville-davray "
 },
 {
  "Chef": 0,
  "Zipcode": 75007,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2dduyu5/latelier-de-joel-robuchon-st-germain-paris-07 "
 },
 {
  "Chef": "Jérôme Faure",
  "Zipcode": 84360,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/ua2fx9zg/le-champ-des-lunes-lauris "
 },
 {
  "Chef": "Le chef Franco Bowanee et Karina Laval, chef pâtissière.",
  "Zipcode": 89200,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2bezvvp/chateau-de-vault-de-lugny-vault-de-lugny "
 },
 {
  "Chef": "David Goerne",
  "Zipcode": 76490,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/9rnckmj/ga-au-manoir-de-retival-caudebec-en-caux "
 },
 {
  "Chef": "Damien Leveau",
  "Zipcode": 74400,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2bnvpvu/albert-1er-chamonix-mont-blanc "
 },
 {
  "Chef": "Fabien Fage",
  "Zipcode": 34200,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/4041601/marcel-sete "
 },
 {
  "Chef": "Jérémy Morin",
  "Zipcode": 31850,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/xay649ax/laparte-montrabe "
 },
 {
  "Chef": "Sylvain Roux",
  "Zipcode": 42140,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/ou4s65x/chateau-blanchard-chazelles-sur-lyon "
 },
 {
  "Chef": "Michel Truchon",
  "Zipcode": 12800,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2cv1ygx/le-senechal-sauveterre-de-rouergue "
 },
 {
  "Chef": 0,
  "Zipcode": 69005,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/4037936/la-sommeliere-lyon-05 "
 },
 {
  "Chef": "Sébastien Buecher",
  "Zipcode": 67730,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29qv5p8/auberge-frankenbourg-la-vancelle "
 },
 {
  "Chef": "Keigo Kimura",
  "Zipcode": 21000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/4040011/lasperule-dijon "
 },
 {
  "Chef": "Arnaud Donckele",
  "Zipcode": 83990,
  "NumberOfStars": " 3 stars",
  "Link": " https://restaurant.michelin.fr/2csqkr7/la-vague-dor-cheval-blanc-st-tropez-saint-tropez "
 },
 {
  "Chef": "ÉricCanino",
  "Zipcode": 83350,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/9tangja/la-voile-ramatuelle "
 },
 {
  "Chef": "Mickaël Marion",
  "Zipcode": 50000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3ffxvs0j/intuition-saint-lo "
 },
 {
  "Chef": "William Elliott",
  "Zipcode": 62520,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2b3t8kh/le-pavillon-le-touquet-paris-plage "
 },
 {
  "Chef": "Christopher Coutanceau",
  "Zipcode": 17000,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2apfrj5/christopher-coutanceau-la-rochelle "
 },
 {
  "Chef": "Alain Dutournier",
  "Zipcode": 75001,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2a7gjv9/carre-des-feuillants-paris-01 "
 },
 {
  "Chef": "Stéphan Paroche",
  "Zipcode": 13520,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/xb2s4av1/cicada-table-du-hameau-paradou "
 },
 {
  "Chef": "Frédéric Doucet",
  "Zipcode": 71120,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/295q5w8/frederic-doucet-charolles "
 },
 {
  "Chef": "Jean-François Bérard",
  "Zipcode": 83740,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2bl33gu/hostellerie-berard-la-cadiere-dazur "
 },
 {
  "Chef": "Laëtitia et Stéphane Cosnier",
  "Zipcode": 56340,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/mhm4jdd/cote-cuisine-carnac "
 },
 {
  "Chef": "Édouard Loubet",
  "Zipcode": 84480,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2bj1jms/la-bastide-de-capelongue-bonnieux "
 },
 {
  "Chef": 0,
  "Zipcode": 75012,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3ffvej5j/table-bruno-verjus-paris-12 "
 },
 {
  "Chef": 0,
  "Zipcode": 75002,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2852091/sushi-b-paris-02 "
 },
 {
  "Chef": "Renaud Darmanin",
  "Zipcode": 15220,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/aewyhv0/auberge-de-la-tour-marcoles "
 },
 {
  "Chef": "Thomas Parnaud",
  "Zipcode": 28000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2boyz17/le-georges-chartres "
 },
 {
  "Chef": "Gilles Dudognon",
  "Zipcode": 87510,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2c4rgah/chapelle-saint-martin-nieul "
 },
 {
  "Chef": "Christophe Dufossé",
  "Zipcode": 57000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2dse7wh/maison-dufosse-la-table-metz "
 },
 {
  "Chef": "René et Maxime Meilleur",
  "Zipcode": 73440,
  "NumberOfStars": " 3 stars",
  "Link": " https://restaurant.michelin.fr/2avet55/rene-et-maxime-meilleur-saint-martin-de-belleville "
 },
 {
  "Chef": "Tanguy Laviale",
  "Zipcode": 33000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3wsi04j3/garopapilles-bordeaux "
 },
 {
  "Chef": "Jean-Christophe Ansanay-Alex",
  "Zipcode": 69009,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29tj1pj/auberge-de-lile-barbe-lyon-09 "
 },
 {
  "Chef": "Yohann Lemonnier",
  "Zipcode": 14000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/sd2y8ik/initial-caen "
 },
 {
  "Chef": "Marc Faivre",
  "Zipcode": 25160,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29v2jed/le-bon-accueil-malbuisson "
 },
 {
  "Chef": "Thierry Seychelles",
  "Zipcode": 56000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2b6s3ty/roscanvec-vannes "
 },
 {
  "Chef": "Yannick Franques",
  "Zipcode": 6310,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2bh3p7k/restaurant-des-rois-beaulieu-sur-mer "
 },
 {
  "Chef": "Andrée et Stéphane Rosier",
  "Zipcode": 64200,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2epi2a4/les-rosiers-biarritz "
 },
 {
  "Chef": "Kazuyuki Tanaka",
  "Zipcode": 51100,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/eiak4cnv/racine-reims "
 },
 {
  "Chef": "Gilles Goujon",
  "Zipcode": 11360,
  "NumberOfStars": " 3 stars",
  "Link": " https://restaurant.michelin.fr/29ib1yg/auberge-du-vieux-puits-fontjoncouse "
 },
 {
  "Chef": "David Biasibetti",
  "Zipcode": 31180,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2b3jb0y/o-saveurs-rouffiac-tolosan "
 },
 {
  "Chef": 0,
  "Zipcode": 67000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/4035231/les-funambules-strasbourg "
 },
 {
  "Chef": "Christophe Moret",
  "Zipcode": 75016,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2fcezsf/labeille-paris-16 "
 },
 {
  "Chef": "Bertrand Grébaut",
  "Zipcode": 75011,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3xrgyvn/septime-paris-11 "
 },
 {
  "Chef": "Christian Constant",
  "Zipcode": 75007,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2aa5u1w/le-violon-dingres-paris-07 "
 },
 {
  "Chef": "Franck Putelat",
  "Zipcode": 11000,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2e06z2s/la-table-de-franck-putelat-carcassonne "
 },
 {
  "Chef": 0,
  "Zipcode": 75008,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2affgmi/apicius-paris-08 "
 },
 {
  "Chef": "Hervé Busset",
  "Zipcode": 12320,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2brjniu/herve-busset-conques-en-rouergue "
 },
 {
  "Chef": "Philippe Mille",
  "Zipcode": 51100,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2clh5yg/le-parc-les-crayeres-reims "
 },
 {
  "Chef": "Damien Sanchez",
  "Zipcode": 30000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/olnthqo/skab-nimes "
 },
 {
  "Chef": "Alexandre Lechêne",
  "Zipcode": 5350,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/8xdk7lc4/le-roc-alto-saint-veran "
 },
 {
  "Chef": "Yannick Germain",
  "Zipcode": 67770,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2b00ufd/auberge-au-boeuf-sessenheim "
 },
 {
  "Chef": "Philippe Brun",
  "Zipcode": 43580,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2bc2prd/le-haut-allier-le-pont-dalleyras "
 },
 {
  "Chef": "Patrick Bertron",
  "Zipcode": 21210,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2cur8yy/le-relais-bernard-loiseau-saulieu "
 },
 {
  "Chef": 0,
  "Zipcode": 75018,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/ximkypex/ken-kawasaki-paris-18 "
 },
 {
  "Chef": "Nicolas Hensinger",
  "Zipcode": 74120,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3492296/prima-megeve "
 },
 {
  "Chef": "PhilippeJourdin",
  "Zipcode": 83440,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2dix4nq137/faventia-tourrettes "
 },
 {
  "Chef": "Piet Huysentruyt",
  "Zipcode": 7140,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/1ad26y4c/likoke-les-vans "
 },
 {
  "Chef": "Bruno Cirino",
  "Zipcode": 6320,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2b5e0ez/hostellerie-jerome-la-turbie "
 },
 {
  "Chef": "Fanny Rey",
  "Zipcode": 13210,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/389tiwsv/fanny-rey-jonathan-wahid-saint-remy-de-provence "
 },
 {
  "Chef": "PhilippeDa Silva",
  "Zipcode": 83830,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2blmwvy/hostellerie-les-gorges-de-pennafort-callas "
 },
 {
  "Chef": "Loïc Lecoin",
  "Zipcode": 16310,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2f0stuh/dyades-au-domaine-des-etangs-massignac "
 },
 {
  "Chef": "Hideki Nishi",
  "Zipcode": 75015,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/9fkib5i9/neige-dete-paris-15 "
 },
 {
  "Chef": "Saito Terumitsu",
  "Zipcode": 75015,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/4033946/pilgrim-paris-15 "
 },
 {
  "Chef": "Kwen Liew et Ryunosuke Naito",
  "Zipcode": 75007,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/5sermc3/pertinence-paris-07 "
 },
 {
  "Chef": "Philippe Le Bigot",
  "Zipcode": 29200,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2epv4gf/le-m-brest "
 },
 {
  "Chef": "Christophe Martin",
  "Zipcode": 6560,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/41vsxiz/lou-cigalon-maison-martin-valbonne "
 },
 {
  "Chef": "Jérémy Galvan",
  "Zipcode": 69005,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3plxd2e/jeremy-galvan-lyon-05 "
 },
 {
  "Chef": "Olivier Bellin",
  "Zipcode": 29550,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2akhln2/lauberge-des-glazicks-plomodiern "
 },
 {
  "Chef": "Bruno Poiré",
  "Zipcode": 57810,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29pia6z/chez-michele-languimberg "
 },
 {
  "Chef": "Eric Frechon",
  "Zipcode": 75008,
  "NumberOfStars": " 3 stars",
  "Link": " https://restaurant.michelin.fr/2ab8pfp/epicure-paris-08 "
 },
 {
  "Chef": "Julia Sedefdjian",
  "Zipcode": 75005,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3750236/baieta-paris-05 "
 },
 {
  "Chef": "Ryuji Teshima",
  "Zipcode": 75016,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/9idrgh03/pages-paris-16 "
 },
 {
  "Chef": "Jacques Bertrand",
  "Zipcode": 26600,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2appio4/les-cedres-granges-les-beaumont "
 },
 {
  "Chef": "Keishi Sugimura",
  "Zipcode": 21200,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/28u9h7z/le-benaton-beaune "
 },
 {
  "Chef": "Régis Douysset",
  "Zipcode": 92190,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2dtzs6c/lescarbille-meudon "
 },
 {
  "Chef": "Sébastien Riou",
  "Zipcode": 24000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/p47009z/un-parfum-de-gourmandise-perigueux "
 },
 {
  "Chef": "Alexandre Mazzia",
  "Zipcode": 13008,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/4gq15sff/am-par-alexandre-mazzia-marseille-08 "
 },
 {
  "Chef": "Akrame Benallal",
  "Zipcode": 75008,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2851396/akrame-paris-08 "
 },
 {
  "Chef": "David Sulpice",
  "Zipcode": 40510,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2dtglr4/villa-de-letang-blanc-seignosse "
 },
 {
  "Chef": "Christian Gaulin",
  "Zipcode": 71000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29uvz3j/pierre-macon "
 },
 {
  "Chef": "Jonathan Bigaré",
  "Zipcode": 35350,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2byuiv7/la-gouesniere-saint-meloir-des-ondes "
 },
 {
  "Chef": "Camille Pailleau et Diego Delbecq",
  "Zipcode": 59000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/4036171/rozo-lille "
 },
 {
  "Chef": "Alan Taudon",
  "Zipcode": 75008,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2851286/lorangerie-paris-08 "
 },
 {
  "Chef": "Jean-Michel Lorain",
  "Zipcode": 89300,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2c2ma30/la-cote-saint-jacques-joigny "
 },
 {
  "Chef": "Julien Gatillon",
  "Zipcode": 74120,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/3409276/1920-megeve "
 },
 {
  "Chef": "Régis etJacques Marcon",
  "Zipcode": 43290,
  "NumberOfStars": " 3 stars",
  "Link": " https://restaurant.michelin.fr/2dntkxh/regis-et-jacques-marcon-saint-bonnet-le-froid "
 },
 {
  "Chef": "Yannick Duc",
  "Zipcode": 40230,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2d9288s/le-hittau-saint-vincent-de-tyrosse "
 },
 {
  "Chef": "Guy Martin",
  "Zipcode": 75001,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2a7edmf/le-grand-vefour-paris-01 "
 },
 {
  "Chef": "Jan Hendrik van der Westhuizen",
  "Zipcode": 6000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/38z104i7/jan-nice "
 },
 {
  "Chef": "Jérémie Izarn",
  "Zipcode": 38570,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2dr8ble/la-tour-des-sens-tencin "
 },
 {
  "Chef": "Guillaume Roget",
  "Zipcode": 64500,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2atl5nc/le-brouillarta-saint-jean-de-luz "
 },
 {
  "Chef": "Luc Mobihan",
  "Zipcode": 35400,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2av98t5/le-st-placide-saint-malo "
 },
 {
  "Chef": "Mi-Ra et Charles Thuillant",
  "Zipcode": 14800,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/40jnqvq/lessentiel-deauville "
 },
 {
  "Chef": "Thierry Marx",
  "Zipcode": 75001,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/6f226za/sur-mesure-par-thierry-marx-paris-01 "
 },
 {
  "Chef": "Maxime Lebrun",
  "Zipcode": 24200,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2d6bc3s/le-grand-bleu-sarlat-la-caneda "
 },
 {
  "Chef": "Koji Aida",
  "Zipcode": 75007,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2dzh7q2/aida-paris-07 "
 },
 {
  "Chef": "Mauro Colagreco",
  "Zipcode": 6500,
  "NumberOfStars": " 3 stars",
  "Link": " https://restaurant.michelin.fr/2d440f7/mirazur-menton "
 },
 {
  "Chef": "Xavier Mathieu",
  "Zipcode": 84220,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2c2u7lh/xavier-mathieu-joucas "
 },
 {
  "Chef": "Reine et Nadia Sammut",
  "Zipcode": 84160,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29sgjsx279/auberge-la-feniere-cadenet "
 },
 {
  "Chef": "Nicolas Borombo",
  "Zipcode": 64500,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2atmq22/le-kaiku-saint-jean-de-luz "
 },
 {
  "Chef": "Thomas Boullault",
  "Zipcode": 75008,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2e8vcj7/larome-paris-08 "
 },
 {
  "Chef": 0,
  "Zipcode": 75008,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3503291/lecrin-paris-08 "
 },
 {
  "Chef": "Massimo Tringali",
  "Zipcode": 75006,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3044086/armani-ristorante-paris-06 "
 },
 {
  "Chef": "Armand Arnal",
  "Zipcode": 13200,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/28qr6q2/la-chassagnette-arles "
 },
 {
  "Chef": "Laurent Arbeit",
  "Zipcode": 68510,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2b05ga9/auberge-st-laurent-sierentz "
 },
 {
  "Chef": "Frédéric Michel",
  "Zipcode": 1190,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2al9714/le-raisin-pont-de-vaux "
 },
 {
  "Chef": "Frédérik Bizat",
  "Zipcode": 46400,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2coonxc/les-trois-soleils-de-montal-saint-cere "
 },
 {
  "Chef": "Chatchai Klanklong",
  "Zipcode": 68130,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/4039781/lorchidee-altkirch "
 },
 {
  "Chef": "Benjamin Bruno",
  "Zipcode": 83510,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29s5co3/bruno-lorgues "
 },
 {
  "Chef": "Laurent Saudeau",
  "Zipcode": 44115,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2a3ey4n/manoir-de-la-boulaie-haute-goulaine "
 },
 {
  "Chef": "Laurent Magnin",
  "Zipcode": 75018,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/vx40rloc/larcane-paris-18 "
 },
 {
  "Chef": "Jean-François Malle",
  "Zipcode": 69890,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29uqy46/la-rotonde-la-tour-de-salvagny "
 },
 {
  "Chef": "Perochon Jean Marc",
  "Zipcode": 85470,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2dyiess/jean-marc-perochon-bretignolles-sur-mer "
 },
 {
  "Chef": "Sébastien Bonnet",
  "Zipcode": 26400,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29bkalt/le-kleber-crest "
 },
 {
  "Chef": "Christophe Dufau",
  "Zipcode": 6140,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2en7eas/les-bacchanales-vence "
 },
 {
  "Chef": "Julien Allano",
  "Zipcode": 26230,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2faahd5/le-clair-de-la-plume-grignan "
 },
 {
  "Chef": "Daniel et Stéphane Chambon",
  "Zipcode": 46200,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29p8ja1/pont-de-louysse-lacave "
 },
 {
  "Chef": "Virginie Basselot",
  "Zipcode": 6000,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2a4echf50/le-chantecler-nice "
 },
 {
  "Chef": "Rémy Giraud",
  "Zipcode": 41150,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2cedaza/domaine-des-hauts-de-loire-onzain "
 },
 {
  "Chef": "Alain Montigny",
  "Zipcode": 6210,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29v9df2/loasis-mandelieu-la-napoule "
 },
 {
  "Chef": "Alain Mihura",
  "Zipcode": 95540,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2ago3w6/le-chiquito-mery-sur-oise "
 },
 {
  "Chef": "Gordon Ramsay et le Chef Exécutif Gilad Peled",
  "Zipcode": 33000,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2epcrm9/le-pressoir-dargent-gordon-ramsay-bordeaux "
 },
 {
  "Chef": "Sébastien Vauxion",
  "Zipcode": 73120,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/4040361/sarkara-courchevel-1850 "
 },
 {
  "Chef": "Arnaud Philippon",
  "Zipcode": 37400,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2bcbfo0/chateau-de-pray-charge "
 },
 {
  "Chef": "Olivier Samin",
  "Zipcode": 7800,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2fa4jx5/le-carre-dalethius-charmes-sur-rhone "
 },
 {
  "Chef": "Guillaume Royer",
  "Zipcode": 21360,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2e4epe8/1131-la-bussiere-sur-ouche "
 },
 {
  "Chef": "Marc Meurin",
  "Zipcode": 62350,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2dyfstx/meurin-busnes "
 },
 {
  "Chef": "Jacques Chibois",
  "Zipcode": 6130,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29ktfvn/la-bastide-st-antoine-grasse "
 },
 {
  "Chef": "Yves Kieffer",
  "Zipcode": 67700,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2az3rad/kasbur-monswiller "
 },
 {
  "Chef": "Nicolas Masse",
  "Zipcode": 33650,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/28yhuxy/la-grandvigne-martillac "
 },
 {
  "Chef": "Julien Le Goff",
  "Zipcode": 83400,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2c1rglq/lolivier-hyeres "
 },
 {
  "Chef": "Laurent Deconinck",
  "Zipcode": 84190,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2dfwq14/loustalet-gigondas "
 },
 {
  "Chef": "Xavier Isabal",
  "Zipcode": 64250,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2bbain5/ithurria-ainhoa "
 },
 {
  "Chef": "Pascal Borrell",
  "Zipcode": 66650,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/yw26sgs/le-fanal-banyuls-sur-mer "
 },
 {
  "Chef": "LE Cheviller Nikolaz",
  "Zipcode": 20137,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2e7dmcj/u-santa-marina-porto-vecchio "
 },
 {
  "Chef": "Sylvestre Wahid",
  "Zipcode": 75007,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2fe7j1g/sylvestre-paris-07 "
 },
 {
  "Chef": "GuyLassausaie",
  "Zipcode": 69380,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/295zuzb/guy-lassausaie-chasselay "
 },
 {
  "Chef": "Alain Llorca",
  "Zipcode": 6480,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2e4vi29/alain-llorca-la-colle-sur-loup "
 },
 {
  "Chef": "Jérôme Masson",
  "Zipcode": 83230,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2dfjaik/la-rastegue-bormes-les-mimosas "
 },
 {
  "Chef": "Cédric Béchade",
  "Zipcode": 64310,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2efx4u4/lauberge-basque-saint-pee-sur-nivelle "
 },
 {
  "Chef": "Sébastien Bras",
  "Zipcode": 12210,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2c3ezsd/bras-laguiole "
 },
 {
  "Chef": "Carlos Camino",
  "Zipcode": 69006,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2jcivvu3/miraflores-lyon-06 "
 },
 {
  "Chef": "Paolo Sari",
  "Zipcode": 6190,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/9p2kj2b/elsa-cap-martin "
 },
 {
  "Chef": "Damien Goguet",
  "Zipcode": 50270,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2bgh04f/la-marine-carteret "
 },
 {
  "Chef": "Alexandre Baumard",
  "Zipcode": 33330,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3kw7mh1/logis-de-la-cadene-saint-emilion "
 },
 {
  "Chef": "Julien Boscus",
  "Zipcode": 75007,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3x7v6dz/les-climats-paris-07 "
 },
 {
  "Chef": "Cédric Burtin",
  "Zipcode": 71100,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/294rtmv/lamaryllis-saint-remy "
 },
 {
  "Chef": "Baptiste Poinot",
  "Zipcode": 26000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2e043qi/flaveurs-valence "
 },
 {
  "Chef": "Stéphane Dattrino",
  "Zipcode": 74000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/9tr3fvt/lesquisse-annecy "
 },
 {
  "Chef": 0,
  "Zipcode": 75007,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2ei5hub/david-toutain-paris-07 "
 },
 {
  "Chef": "FREDERIC SIMONIN",
  "Zipcode": 75017,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2f8857v/frederic-simonin-paris-17 "
 },
 {
  "Chef": "Olivier Prévôt-Carme",
  "Zipcode": 25200,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29zciea/le-st-martin-montbeliard "
 },
 {
  "Chef": "Eric Sapet",
  "Zipcode": 84160,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29c2o3y/la-petite-maison-de-cucuron-cucuron "
 },
 {
  "Chef": "Sylvain Joffre",
  "Zipcode": 31130,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/s5y0mmq/en-pleine-nature-fonsegrives "
 },
 {
  "Chef": "Yoshiaki Ito",
  "Zipcode": 75116,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2852206/larcheste-paris-16 "
 },
 {
  "Chef": "Ayumi Sugiyama etRomain Mahi",
  "Zipcode": 75002,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/4036951/accents-table-bourse-paris-02 "
 },
 {
  "Chef": "Thomas Vonderscher",
  "Zipcode": 31000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/ua83vloo/le-cenacle-toulouse "
 },
 {
  "Chef": "Fumiko et Anthony Maubert",
  "Zipcode": 41000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3m0pjn8/assa-blois "
 },
 {
  "Chef": "Le Chef Julien Binz",
  "Zipcode": 68770,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/yi79hbnh/julien-binz-ammerschwihr "
 },
 {
  "Chef": "Stéphanie Le Quellec",
  "Zipcode": 75008,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/1ore4aj2/la-scene-paris-08 "
 },
 {
  "Chef": "Anthony Lumet",
  "Zipcode": 85360,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/376ocf6f/le-pousse-pied-la-tranche-sur-mer "
 },
 {
  "Chef": "Tomy Gousset",
  "Zipcode": 75007,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2852136/tomy-co-paris-07 "
 },
 {
  "Chef": "Laurent Azoulay",
  "Zipcode": 73550,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/9isyik39/lekrin-laurent-azoulay-meribel-mottaret "
 },
 {
  "Chef": "Xavier Taffart",
  "Zipcode": 17920,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2dk9wkt/laquarelle-breuillet "
 },
 {
  "Chef": "Jean-François Rouquette",
  "Zipcode": 75002,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2dqiunf/pur-jean-francois-rouquette-paris-02 "
 },
 {
  "Chef": "William Frachot",
  "Zipcode": 21000,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2buprmi/william-frachot-dijon "
 },
 {
  "Chef": "Florent Pietravalle",
  "Zipcode": 84000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2bf3czu/la-mirande-avignon "
 },
 {
  "Chef": "Arnaud Faye, Chef Exécutif et Julien Dugourd, Chef Pâtissier",
  "Zipcode": 6360,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2bwkh5l/la-chevre-dor-eze "
 },
 {
  "Chef": "Anthony Caillot",
  "Zipcode": 14000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3wc5nsy/contre-sens-caen "
 },
 {
  "Chef": "Benjamin Toursel",
  "Zipcode": 47310,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2dl7htu/auberge-le-prieure-moirax "
 },
 {
  "Chef": "Laurent Petit",
  "Zipcode": 74940,
  "NumberOfStars": " 3 stars",
  "Link": " https://restaurant.michelin.fr/28pf13h/le-clos-des-sens-annecy-le-vieux "
 },
 {
  "Chef": "Shinichi Sato",
  "Zipcode": 75002,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2ezpxm7/passage-53-paris-02 "
 },
 {
  "Chef": "Claude-Emmanuel Robin",
  "Zipcode": 46160,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/aisrm50/lallee-des-vignes-cajarc "
 },
 {
  "Chef": "Loïc Lefebvre",
  "Zipcode": 68000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2ewn3lj/latelier-du-peintre-colmar "
 },
 {
  "Chef": "Christian Le Squer",
  "Zipcode": 75008,
  "NumberOfStars": " 3 stars",
  "Link": " https://restaurant.michelin.fr/2ab2thp/le-cinq-paris-08 "
 },
 {
  "Chef": "Vincent David",
  "Zipcode": 56890,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2b6sa1u/le-pressoir-saint-ave "
 },
 {
  "Chef": "Takuya Watanabe",
  "Zipcode": 75001,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/1t2b08px/jin-paris-01 "
 },
 {
  "Chef": "Georges BLANC",
  "Zipcode": 1540,
  "NumberOfStars": " 3 stars",
  "Link": " https://restaurant.michelin.fr/2d3ergs/georges-blanc-vonnas "
 },
 {
  "Chef": "Nicolas Rondelli",
  "Zipcode": 6600,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29ol879/les-pecheurs-antibes "
 },
 {
  "Chef": "Lieven Van Aken",
  "Zipcode": 13520,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/9wstvf9t/laupiho-les-baux-de-provence "
 },
 {
  "Chef": "Nolwenn Corre",
  "Zipcode": 29217,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2brleio/hostellerie-de-la-pointe-st-mathieu-le-conquet "
 },
 {
  "Chef": "Serge et Maxime Chenet",
  "Zipcode": 30131,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2etuup9/entre-vigne-et-garrigue-pujaut "
 },
 {
  "Chef": "Alan Geaam",
  "Zipcode": 75016,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3045466/alan-geaam-paris-16 "
 },
 {
  "Chef": 0,
  "Zipcode": 34120,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/4041396/restaurant-de-lauzun-pezenas "
 },
 {
  "Chef": "Michaël Fulci",
  "Zipcode": 6410,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/28x308q/les-terraillers-biot "
 },
 {
  "Chef": "Laurent Lemal",
  "Zipcode": 66720,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3w3putu/la-cooperative-belesta "
 },
 {
  "Chef": 0,
  "Zipcode": 75001,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/4042311/la-poule-au-pot-paris-01 "
 },
 {
  "Chef": "Olivier Da Silva",
  "Zipcode": 76000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/33tyod0j/lodas-rouen "
 },
 {
  "Chef": "Fabio Bragagnolo",
  "Zipcode": 20137,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2dk81h5143/casadelmar-porto-vecchio "
 },
 {
  "Chef": "Patrick Michelon",
  "Zipcode": 51200,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29fhuzu/les-berceaux-epernay "
 },
 {
  "Chef": "Alexandre Couillon",
  "Zipcode": 85330,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/29n79hz/la-marine-lherbaudiere "
 },
 {
  "Chef": "David Etcheverry",
  "Zipcode": 35760,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2ao631n/le-saison-saint-gregoire "
 },
 {
  "Chef": "Tristan Robreau",
  "Zipcode": 45000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2f48mjv/le-lievre-gourmand-orleans "
 },
 {
  "Chef": "Jean-Yves Schillinger",
  "Zipcode": 68000,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/298563e/jys-colmar "
 },
 {
  "Chef": "Stéphane Gaborieau",
  "Zipcode": 75116,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2aeinde/le-pergolese-paris-16 "
 },
 {
  "Chef": "Jean Coussau",
  "Zipcode": 40140,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2c6dfrz/relais-de-la-poste-magescq "
 },
 {
  "Chef": "Josselin Jeanblanc",
  "Zipcode": 73440,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/ui89zrwk/les-explorateurs-val-thorens "
 },
 {
  "Chef": "Samuel Lee",
  "Zipcode": 75016,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2fcezsf205/shang-palace-paris-16 "
 },
 {
  "Chef": "Steven Naessens",
  "Zipcode": 39600,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/28pylpu/maison-jeunet-arbois "
 },
 {
  "Chef": "Christian Têtedoie",
  "Zipcode": 69005,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29tfnmd288/tetedoie-lyon-05 "
 },
 {
  "Chef": "Loris Cornacchia",
  "Zipcode": 84220,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/r9fvmyyv/peir-gordes "
 },
 {
  "Chef": "Tony Lestienne",
  "Zipcode": 62200,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/28yvb9u/la-matelote-boulogne-sur-mer "
 },
 {
  "Chef": "Philippe Hardy",
  "Zipcode": 50560,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2edzchf/le-mascaret-blainville-sur-mer "
 },
 {
  "Chef": "Mathieu Aumont",
  "Zipcode": 22000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2aru9pt/aux-pesked-saint-brieuc "
 },
 {
  "Chef": "Guy SAVOY",
  "Zipcode": 75006,
  "NumberOfStars": " 3 stars",
  "Link": " https://restaurant.michelin.fr/2afciv4/guy-savoy-paris-06 "
 },
 {
  "Chef": "Raphaël Vionnet",
  "Zipcode": 74200,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/6pyhps6h/raphael-vionnet-thonon-les-bains "
 },
 {
  "Chef": "Philippe Arrambide",
  "Zipcode": 64220,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2cqrobi/les-pyrenees-saint-jean-pied-de-port "
 },
 {
  "Chef": "Vincent Lucas",
  "Zipcode": 24440,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2ejolq7/etincelles-la-gentilhommiere-sainte-sabine "
 },
 {
  "Chef": "Stéphane Carbone",
  "Zipcode": 14000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2enzj8x/stephane-carbone-caen "
 },
 {
  "Chef": "Nicolas Sale",
  "Zipcode": 75001,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/yhoi9vry/ritz-paris-la-table-de-lespadon-paris-01 "
 },
 {
  "Chef": "Gaël et Mickaël Tourteaux",
  "Zipcode": 6000,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2exgwy4/flaveur-nice "
 },
 {
  "Chef": "Anne-Sophie Pic",
  "Zipcode": 26000,
  "NumberOfStars": " 3 stars",
  "Link": " https://restaurant.michelin.fr/2d0hddd/pic-valence "
 },
 {
  "Chef": "Arkadiusz Zuchmanski",
  "Zipcode": 63000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2ek9zhh/apicius-clermont-ferrand "
 },
 {
  "Chef": "Pascal Bastian",
  "Zipcode": 67510,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/29qf1y7/auberge-du-cheval-blanc-lembach "
 },
 {
  "Chef": "Alberico Penati",
  "Zipcode": 75008,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/9oo4cel/penati-al-baretto-paris-08 "
 },
 {
  "Chef": 0,
  "Zipcode": 75008,
  "NumberOfStars": " 3 stars",
  "Link": " https://restaurant.michelin.fr/2ab76wf/alain-ducasse-au-plaza-athenee-paris-08 "
 },
 {
  "Chef": "Hubert Nobis",
  "Zipcode": 61450,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29hyxpk/auberge-de-la-mine-gue-plat "
 },
 {
  "Chef": "Grégory Mirer",
  "Zipcode": 84220,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2byq8tg/les-bories-gordes "
 },
 {
  "Chef": "Daniel Ettlinger",
  "Zipcode": 6650,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2aqst5c/le-clos-st-pierre-saint-pons "
 },
 {
  "Chef": "Marc Haeberlin",
  "Zipcode": 68970,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/29nft26/auberge-de-lill-illhaeusern "
 },
 {
  "Chef": "Alexis Albrecht",
  "Zipcode": 67860,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2aogs9u/au-vieux-couvent-rhinau "
 },
 {
  "Chef": "Ronan Kervarrec",
  "Zipcode": 33330,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2cp6y7n/hostellerie-de-plaisance-saint-emilion "
 },
 {
  "Chef": "Jérôme Roy",
  "Zipcode": 4300,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2ep5ghq/le-cloitre-mane "
 },
 {
  "Chef": "Thomas L'Hérisson",
  "Zipcode": 33420,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2athka8/auberge-st-jean-saint-jean-de-blaignac "
 },
 {
  "Chef": "Eric Guérin",
  "Zipcode": 44720,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2atvlv0/la-mare-aux-oiseaux-saint-joachim "
 },
 {
  "Chef": "Thierry Conte",
  "Zipcode": 78380,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2agf0d1/le-camelia-bougival "
 },
 {
  "Chef": "Xavier Burelle",
  "Zipcode": 6250,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2a1fgdk/le-candille-mougins "
 },
 {
  "Chef": "Julien Lucas",
  "Zipcode": 60500,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/jgutdlg/la-table-du-connetable-chantilly "
 },
 {
  "Chef": "Frédéric Molina",
  "Zipcode": 74470,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/bca0zrw3/le-moulin-de-lere-vailly "
 },
 {
  "Chef": "Masashi Ijichi",
  "Zipcode": 26000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2dyaa0w/la-cachette-valence "
 },
 {
  "Chef": "Andreas Møller",
  "Zipcode": 75008,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2916876/copenhague-paris-08 "
 },
 {
  "Chef": "Laurent et Thibault Laplaige",
  "Zipcode": 51100,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2ank1c1/le-millenaire-reims "
 },
 {
  "Chef": "Alain Gardillou",
  "Zipcode": 24530,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2bk7w2q/le-moulin-du-roc-champagnac-de-belair "
 },
 {
  "Chef": "Éric Mariottat",
  "Zipcode": 47000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/28n68fe/mariottat-agen "
 },
 {
  "Chef": "Jean-Alexandre Ouaratta",
  "Zipcode": 69620,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2bfuk4c/1217-bagnols "
 },
 {
  "Chef": "Alain Passard",
  "Zipcode": 75007,
  "NumberOfStars": " 3 stars",
  "Link": " https://restaurant.michelin.fr/2aa11xs/arpege-paris-07 "
 },
 {
  "Chef": "Shinsuke Nakatani",
  "Zipcode": 75007,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3x81832/nakatani-paris-07 "
 },
 {
  "Chef": "Jean-François Piège",
  "Zipcode": 75008,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/u5aaw2ah/le-grand-restaurant-jean-francois-piege-paris-08 "
 },
 {
  "Chef": "Benoit Vidal",
  "Zipcode": 73150,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2e1ykis/latelier-dedmond-val-disere "
 },
 {
  "Chef": "Yoshinori Morié",
  "Zipcode": 75006,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3361741/yoshinori-paris-06 "
 },
 {
  "Chef": "Nicolas le Tirrand",
  "Zipcode": 75008,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2abcqvg/lasserre-paris-08 "
 },
 {
  "Chef": "Pierre Caillet",
  "Zipcode": 76540,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2b6gbtl/le-bec-au-cauchois-valmont "
 },
 {
  "Chef": "Mathieu Pacaud",
  "Zipcode": 75007,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2852181/divellec-paris-07 "
 },
 {
  "Chef": "Ivan Vautier",
  "Zipcode": 14000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/290z3mh/ivan-vautier-caen "
 },
 {
  "Chef": "Fabien Mengus",
  "Zipcode": 57230,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/yjkdc8kf/larnsbourg-baerenthal "
 },
 {
  "Chef": "Fabian Feldmann",
  "Zipcode": 64200,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/h2j2em3/limpertinent-biarritz "
 },
 {
  "Chef": "Jean-Marc KIENY",
  "Zipcode": 68400,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2a22p1u/maison-kieny-riedisheim "
 },
 {
  "Chef": "Hubert Duchenne",
  "Zipcode": 75004,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2851556/restaurant-h-paris-04 "
 },
 {
  "Chef": "Sébastien Sanjou",
  "Zipcode": 83460,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/28qae64/le-relais-des-moines-les-arcs "
 },
 {
  "Chef": "Jérôme Ryon",
  "Zipcode": 11000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/292xja3/la-barbacane-carcassonne "
 },
 {
  "Chef": "Philippe Girardon",
  "Zipcode": 38121,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2b8j4np/la-table-de-philippe-girardon-chonas-lamballan "
 },
 {
  "Chef": "Dominique Giraudeau et Pascal Champion",
  "Zipcode": 51500,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2anw751/le-grand-cerf-montchenot "
 },
 {
  "Chef": "Nicolas Decherchi",
  "Zipcode": 6250,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/280mq6yn/paloma-mougins "
 },
 {
  "Chef": "Romuald ROYER",
  "Zipcode": 20110,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29ajku0/le-lido-propriano "
 },
 {
  "Chef": "Anne-Sophie Pic",
  "Zipcode": 75001,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/jgnpf8y/la-dame-de-pic-paris-01 "
 },
 {
  "Chef": "Charles Fontes",
  "Zipcode": 34000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2d8d9p1/la-reserve-rimbaud-montpellier "
 },
 {
  "Chef": "Toshitaka Omiya",
  "Zipcode": 75005,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/t4cp5kaa/alliance-paris-05 "
 },
 {
  "Chef": "Jean-ClaudeLeclerc",
  "Zipcode": 63000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/297ge86/jean-claude-leclerc-clermont-ferrand "
 },
 {
  "Chef": "Clément Bouvier",
  "Zipcode": 73320,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2f5gm14/ursus-tignes "
 },
 {
  "Chef": "Nicolas Isnard et David Le Comte",
  "Zipcode": 21370,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29dyqga/auberge-de-la-charme-prenois "
 },
 {
  "Chef": "Jean-Marie et Hubert Chanove",
  "Zipcode": 74140,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29uv8a7/le-refuge-des-gourmets-machilly "
 },
 {
  "Chef": "Stéphane Pitré",
  "Zipcode": 75009,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/cmfchcva/louis-paris-09 "
 },
 {
  "Chef": "Michel et César Troisgros",
  "Zipcode": 42155,
  "NumberOfStars": " 3 stars",
  "Link": " https://restaurant.michelin.fr/2cm53gy/troisgros-le-bois-sans-feuilles-ouches "
 },
 {
  "Chef": "Yannick Alléno",
  "Zipcode": 73120,
  "NumberOfStars": " 3 stars",
  "Link": " https://restaurant.michelin.fr/2eac1q1/le-1947-courchevel-1850 "
 },
 {
  "Chef": 0,
  "Zipcode": 36100,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2f80e2p/au-14-fevrier-saint-valentin "
 },
 {
  "Chef": "Didier Casaguana",
  "Zipcode": 24240,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2ax5yy8/les-fresques-monestier "
 },
 {
  "Chef": "Christophe Le Fur",
  "Zipcode": 22530,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2a2flya/auberge-grandmaison-mur-de-bretagne "
 },
 {
  "Chef": "Christophe Dupouy",
  "Zipcode": 40000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2e0bvx8/les-clefs-dargent-mont-de-marsan "
 },
 {
  "Chef": "Alexandre Fabris",
  "Zipcode": 20260,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2bs90l6/la-signoria-calvi "
 },
 {
  "Chef": "Olivier Nasti",
  "Zipcode": 68240,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2c30770n/la-table-dolivier-nasti-kaysersberg-vignoble "
 },
 {
  "Chef": "Pascal Bardet",
  "Zipcode": 46150,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2avrk5m/le-gindreau-saint-medard "
 },
 {
  "Chef": 0,
  "Zipcode": 75008,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2abdvpo/laurent-paris-08 "
 },
 {
  "Chef": "Stéphane Polly",
  "Zipcode": 7600,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2fay1do/le-vivarais-vals-les-bains "
 },
 {
  "Chef": "Jean-Luc Lefrançois",
  "Zipcode": 6140,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2d1gnwo/le-saint-martin-vence "
 },
 {
  "Chef": "Maximin Hellio",
  "Zipcode": 14800,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/u945qtuv/maximin-hellio-deauville "
 },
 {
  "Chef": "Arnaud Viel",
  "Zipcode": 61200,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/28qk3fo/la-renaissance-argentan "
 },
 {
  "Chef": "Jean-Luc Brendel",
  "Zipcode": 68340,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2aosxv6/la-table-du-gourmet-riquewihr "
 },
 {
  "Chef": "Laurent Kleczewski",
  "Zipcode": 76550,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29d8fg4/le-colombier-offranville "
 },
 {
  "Chef": "Philippe LABBÉ",
  "Zipcode": 75005,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2a8xf2a/la-tour-dargent-paris-05 "
 },
 {
  "Chef": "Nicolas Stamm",
  "Zipcode": 67210,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2a5ztne/la-fourchette-des-ducs-obernai "
 },
 {
  "Chef": "Eugène Hobraiche",
  "Zipcode": 59670,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/6274yuk/haut-bonheur-de-la-table-cassel "
 },
 {
  "Chef": "Éric Sampietro",
  "Zipcode": 32100,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2d7x1hk/la-table-des-cordeliers-condom "
 },
 {
  "Chef": "Julien Dumas",
  "Zipcode": 75008,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2abav0l/lucas-carton-paris-08 "
 },
 {
  "Chef": "Marc Veyrat",
  "Zipcode": 74230,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/8zgzs262/la-maison-des-bois-marc-veyrat-manigod "
 },
 {
  "Chef": 0,
  "Zipcode": 67000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/amv21i8/1741-strasbourg "
 },
 {
  "Chef": "Stéphane Tournié",
  "Zipcode": 31000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2b3631b/stephane-tournie-les-jardins-de-lopera-toulouse "
 },
 {
  "Chef": "Loïc Villemin",
  "Zipcode": 57380,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3vxe9bf/toya-faulquemont "
 },
 {
  "Chef": "Jean-Jacques Noguier",
  "Zipcode": 74160,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2atzy38/la-ferme-de-lhospital-bossey "
 },
 {
  "Chef": "Ivan Lavaux",
  "Zipcode": 1500,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2dnoa2o/auberge-de-labbaye-ambronay "
 },
 {
  "Chef": 0,
  "Zipcode": 29840,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2nnu14s6/le-chateau-de-sable-porspoder "
 },
 {
  "Chef": "Amélie Darvas",
  "Zipcode": 34320,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/4040591/aponem-auberge-du-presbytere-vailhan "
 },
 {
  "Chef": "Takashi Kinoshita",
  "Zipcode": 21520,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2emcabb/chateau-de-courban-courban "
 },
 {
  "Chef": "Manuel Martinez",
  "Zipcode": 75006,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2a92anu/relais-louis-xiii-paris-06 "
 },
 {
  "Chef": "Jérôme Jaegle",
  "Zipcode": 68240,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/ua3c2rxf/lalchemille-kaysersberg-vignoble "
 },
 {
  "Chef": "Christophe Poirier",
  "Zipcode": 27480,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2ehwc2a/la-licorne-royale-lyons-la-foret "
 },
 {
  "Chef": "Nicolas Beaumann",
  "Zipcode": 75017,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2afdah0/maison-rostang-paris-17 "
 },
 {
  "Chef": "Frank Renimel",
  "Zipcode": 31320,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/q8lel2a/en-marge-aureville "
 },
 {
  "Chef": "Lucien Keff",
  "Zipcode": 57330,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2bavyqh/la-lorraine-zoufftgen "
 },
 {
  "Chef": "Vincent Arnould",
  "Zipcode": 24510,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2cz3yz2/le-vieux-logis-tremolat "
 },
 {
  "Chef": "Jérôme Mamet",
  "Zipcode": 74140,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2dr6qsw/o-flaveurs-douvaine "
 },
 {
  "Chef": "Julien Poisot",
  "Zipcode": 46090,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2blc3qr/le-dueze-mercues "
 },
 {
  "Chef": "Christophe Bacquié",
  "Zipcode": 83330,
  "NumberOfStars": " 3 stars",
  "Link": " https://restaurant.michelin.fr/2bmu0gi/christophe-bacquie-le-castellet "
 },
 {
  "Chef": "Johan Thyriot",
  "Zipcode": 14360,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/cns0apa3/1912-trouville-sur-mer "
 },
 {
  "Chef": "Thibault Sombardier",
  "Zipcode": 75116,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2euo0rk/antoine-paris-16 "
 },
 {
  "Chef": "Lydia Egloff",
  "Zipcode": 57350,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29ifnwu/la-bonne-auberge-stiring-wendel "
 },
 {
  "Chef": "Edouard Mignot",
  "Zipcode": 21190,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/295xqfd/edem-chassagne-montrachet "
 },
 {
  "Chef": "Michel Kayser",
  "Zipcode": 30128,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2a57m2j/alexandre-garons "
 },
 {
  "Chef": "Nicolas Conraux",
  "Zipcode": 29260,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2cj2itx/la-table-de-la-butte-plouider "
 },
 {
  "Chef": "Gérard Bossé",
  "Zipcode": 49000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2erjwfi/une-ile-angers "
 },
 {
  "Chef": "Hugues Droz",
  "Zipcode": 25130,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2d32mvv/le-france-villers-le-lac "
 },
 {
  "Chef": "Alain Périllat-Mercerot",
  "Zipcode": 73370,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/28zmco9/atmospheres-le-bourget-du-lac "
 },
 {
  "Chef": "Guilhem Sevin",
  "Zipcode": 84000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/28s2o1u/restaurant-christian-etienne-avignon "
 },
 {
  "Chef": "Bruno Oger",
  "Zipcode": 6110,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2f4ok2n/villa-archange-le-cannet "
 },
 {
  "Chef": "Sven Chartier",
  "Zipcode": 75002,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2fe4uol/saturne-paris-02 "
 },
 {
  "Chef": "Nicolas Leclercq",
  "Zipcode": 60600,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/297c2t4/loree-de-la-foret-etouy "
 },
 {
  "Chef": "Patrick Jeffroy",
  "Zipcode": 29660,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2bm9rwc/patrick-jeffroy-carantec "
 },
 {
  "Chef": "Wilfrid Chaplain",
  "Zipcode": 63400,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2bqajf6/radio-chamalieres "
 },
 {
  "Chef": "Guillaume Viala",
  "Zipcode": 12340,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2d4rcim/le-belvedere-bozouls "
 },
 {
  "Chef": "Adeline Grattard",
  "Zipcode": 75001,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2ewldde/yamtcha-paris-01 "
 },
 {
  "Chef": "Yoric Tièche",
  "Zipcode": 6230,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2cqc8op/le-cap-saint-jean-cap-ferrat "
 },
 {
  "Chef": "Guillaume Sanchez",
  "Zipcode": 75009,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/4041136/neso-paris-09 "
 },
 {
  "Chef": "Stéphane Ringer et Rémi Gornet",
  "Zipcode": 88000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29fq33a/les-ducs-de-lorraine-epinal "
 },
 {
  "Chef": "Christophe Hay",
  "Zipcode": 41350,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2dxwn73/la-maison-da-cote-montlivault "
 },
 {
  "Chef": "Jean-Luc Tartarin",
  "Zipcode": 76600,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2enmc29/jean-luc-tartarin-le-havre "
 },
 {
  "Chef": "Pierre Marin",
  "Zipcode": 73370,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/28zi7ln/lamartine-le-bourget-du-lac "
 },
 {
  "Chef": "Bernard Mariller",
  "Zipcode": 69006,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29trkin/le-gourmet-de-seze-lyon-06 "
 },
 {
  "Chef": 0,
  "Zipcode": 75016,
  "NumberOfStars": " 3 stars",
  "Link": " https://restaurant.michelin.fr/2af46v7/le-pre-catelan-paris-16 "
 },
 {
  "Chef": "Phillipe Colinet",
  "Zipcode": 83990,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2css2bw/lolivier-saint-tropez "
 },
 {
  "Chef": "Pascal Barbot",
  "Zipcode": 75016,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2aeq3md/astrance-paris-16 "
 },
 {
  "Chef": "Tsuyoshi Arai",
  "Zipcode": 69005,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2f8f1gn/au-14-fevrier-lyon-05 "
 },
 {
  "Chef": "René Fieger",
  "Zipcode": 67000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2ei9xex/umami-strasbourg "
 },
 {
  "Chef": "Aurélien Véquaud",
  "Zipcode": 6160,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29odhbw/la-passagere-juan-les-pins "
 },
 {
  "Chef": "Michel Husser et Joël Philipps",
  "Zipcode": 67520,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2c74pw3/le-cerf-marlenheim "
 },
 {
  "Chef": "Ludovic Pouzelgues",
  "Zipcode": 44000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/5kf1f62/lulu-rouget-nantes "
 },
 {
  "Chef": "Philippe Deschamps",
  "Zipcode": 11000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2bmf006/domaine-dauriac-carcassonne "
 },
 {
  "Chef": "Françoise Mutel",
  "Zipcode": 54000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2elnjes/la-maison-dans-le-parc-nancy "
 },
 {
  "Chef": "Sébastien Bonavita",
  "Zipcode": 85180,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2arajo6/cayola-chateau-dolonne "
 },
 {
  "Chef": "Ruben & Pieter de Maesschalck",
  "Zipcode": 34360,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/xh15qqss/la-table-de-castigno-assignan "
 },
 {
  "Chef": "Mickael Pihours",
  "Zipcode": 49400,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2ayqw5m/le-gambetta-saumur "
 },
 {
  "Chef": "Guillaume Foucault",
  "Zipcode": 41100,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3u9bmm3c/pertica-vendome "
 },
 {
  "Chef": "Dominique et Julia Bucaille",
  "Zipcode": 4100,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/nwxo8h9/dominique-bucaille-manosque "
 },
 {
  "Chef": "Thomas Morel",
  "Zipcode": 33000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/28y19tl/le-pavillon-des-boulevards-bordeaux "
 },
 {
  "Chef": "Gérald Passédat",
  "Zipcode": 13007,
  "NumberOfStars": " 3 stars",
  "Link": " https://restaurant.michelin.fr/2c76rmd/le-petit-nice-marseille-07 "
 },
 {
  "Chef": "William Ledeuil",
  "Zipcode": 75006,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2a9xcsf/ze-kitchen-galerie-paris-06 "
 },
 {
  "Chef": "Dominique Bouchet",
  "Zipcode": 75008,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2doe0bh/dominique-bouchet-paris-08 "
 },
 {
  "Chef": "Jean-Michel Eblin",
  "Zipcode": 68340,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2aoyre2/maximilien-zellenberg "
 },
 {
  "Chef": "Pascal Chaupitre et Christophe Lot",
  "Zipcode": 18000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/9trxkaz/le-cercle-bourges "
 },
 {
  "Chef": "Nicolas Thomas",
  "Zipcode": 31590,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/n3jledr/la-promenade-verfeil "
 },
 {
  "Chef": "Thierry Merville",
  "Zipcode": 31320,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2b3ktxc/la-table-des-merville-castanet-tolosan "
 },
 {
  "Chef": "Julien Machet",
  "Zipcode": 73125,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2dczscn/le-farcon-la-tania "
 },
 {
  "Chef": "David Guitton",
  "Zipcode": 49380,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/i1i7i9b/la-table-de-la-bergerie-le-champ-sur-layon "
 },
 {
  "Chef": "Jean-Rémi Caillon",
  "Zipcode": 73120,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/am8q9hp/le-kintessence-courchevel-1850 "
 },
 {
  "Chef": "Jérôme Schilling",
  "Zipcode": 33210,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3803186/lalique-bommes "
 },
 {
  "Chef": "Julien Razemon",
  "Zipcode": 78270,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2cmxk0v/le-domaine-de-la-corniche-rolleboise "
 },
 {
  "Chef": "Andréas MAVROMMATIS",
  "Zipcode": 75005,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2a95vol/mavrommatis-paris-05 "
 },
 {
  "Chef": "LAISNEY Stanislas",
  "Zipcode": 22220,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2cz1lgu/aigue-marine-treguier "
 },
 {
  "Chef": "Fabienne Eymard",
  "Zipcode": 75004,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2a8isn4/benoit-paris-04 "
 },
 {
  "Chef": "Geoffroy Maillard",
  "Zipcode": 75018,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2et2alx/la-table-deugene-paris-18 "
 },
 {
  "Chef": "Romain Barthe",
  "Zipcode": 69460,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2dckc0s/auberge-de-clochemerle-vaux-en-beaujolais "
 },
 {
  "Chef": "Dimitri Droisneau",
  "Zipcode": 13260,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2eb50c1n/la-villa-madie-cassis "
 },
 {
  "Chef": "William Boquelet",
  "Zipcode": 27340,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2al6a9i/lauberge-de-la-pomme-les-damps "
 },
 {
  "Chef": "Jérôme Nutile",
  "Zipcode": 30000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/cne1oxue/jerome-nutile-le-mas-de-boudan-nimes "
 },
 {
  "Chef": "Laurent Trochain",
  "Zipcode": 78490,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2dnmje9/numero-3-le-tremblay-sur-mauldre "
 },
 {
  "Chef": "Philippe Bélissent",
  "Zipcode": 75014,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2adr3mu/cobea-paris-14 "
 },
 {
  "Chef": "PatrickRaingeard",
  "Zipcode": 6360,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2e2m5rq/la-table-de-patrick-raingeard-eze-bord-de-mer "
 },
 {
  "Chef": "Dan Bessoudo",
  "Zipcode": 13122,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2b7at88/dan-b-la-table-de-ventabren-ventabren "
 },
 {
  "Chef": "Louis-Philippe Vigilant",
  "Zipcode": 21000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2jd4ivca/loiseau-des-ducs-dijon "
 },
 {
  "Chef": "ThibautRuggeri",
  "Zipcode": 49590,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/9pbvgq6a/fontevraud-le-restaurant-fontevraud-labbaye "
 },
 {
  "Chef": "Michel Guérard",
  "Zipcode": 40320,
  "NumberOfStars": " 3 stars",
  "Link": " https://restaurant.michelin.fr/29g9pvw/les-pres-deugenie-michel-guerard-eugenie-les-bains "
 },
 {
  "Chef": "Stéphane Laruelle",
  "Zipcode": 75008,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2abl39j/le-chiberta-paris-08 "
 },
 {
  "Chef": "Nicolas Pierantoni",
  "Zipcode": 83170,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2bn8o1t/hostellerie-de-labbaye-de-la-celle-la-celle "
 },
 {
  "Chef": "Mourad Haddouche",
  "Zipcode": 21200,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2ef8rpt/loiseau-des-vignes-beaune "
 },
 {
  "Chef": "Dorian Van Bronkhorst",
  "Zipcode": 63500,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/akc6ovv/latelier-yssoirien-issoire "
 },
 {
  "Chef": 0,
  "Zipcode": 54000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2jtf0iqj/transparence-la-table-de-patrick-frechin-nancy "
 },
 {
  "Chef": "Thierry Verrat",
  "Zipcode": 16200,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29o99va/la-ribaudiere-bourg-charente "
 },
 {
  "Chef": "Julien Lefebvre",
  "Zipcode": 33250,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2chq5p0/chateau-cordeillan-bages-pauillac "
 },
 {
  "Chef": "Pascal Favre d'Anne",
  "Zipcode": 49000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/dekdkvvj/le-favre-danne-angers "
 },
 {
  "Chef": "Christophe Roure",
  "Zipcode": 69006,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/6pz7edt2/le-neuvieme-art-lyon-06 "
 },
 {
  "Chef": "Eric Buisset",
  "Zipcode": 76690,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29783wk/au-souper-fin-frichemesnil "
 },
 {
  "Chef": "Sébastien Corniau",
  "Zipcode": 5600,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2duw4bw/les-tables-de-gaspard-saint-crepin "
 },
 {
  "Chef": "Gatien Demczyna",
  "Zipcode": 73120,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/29b4lr4/le-montgomerie-courchevel-1850 "
 },
 {
  "Chef": "Pierre Neveu",
  "Zipcode": 19100,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/5f24ty3/la-table-dolivier-brive-la-gaillarde "
 },
 {
  "Chef": "Lionel Giraud",
  "Zipcode": 11100,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2a3kuo9/la-table-saint-crescent-narbonne "
 },
 {
  "Chef": "Eric Pras",
  "Zipcode": 71150,
  "NumberOfStars": " 3 stars",
  "Link": " https://restaurant.michelin.fr/2bnef6m/maison-lameloise-chagny "
 },
 {
  "Chef": "Marc Briand",
  "Zipcode": 22300,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/30sfws39/lanthocyane-lannion "
 },
 {
  "Chef": "Patrice Gahinet",
  "Zipcode": 56290,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2da93ps/avel-vor-port-louis "
 },
 {
  "Chef": "Gregory Marchand",
  "Zipcode": 75002,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2f44u91/frenchie-paris-02 "
 },
 {
  "Chef": 0,
  "Zipcode": 75008,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2feca5y/latelier-de-joel-robuchon-etoile-paris-08 "
 },
 {
  "Chef": "Nicolas Magie",
  "Zipcode": 33270,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2bj8gr9/le-saint-james-bouliac "
 },
 {
  "Chef": "Gaëtan Gentil",
  "Zipcode": 69001,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/cpiyfjc0/prairial-lyon "
 },
 {
  "Chef": "Guillaume Momboisse",
  "Zipcode": 31000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2b38wht/sept-toulouse "
 },
 {
  "Chef": "Rodolphe Pottier",
  "Zipcode": 76000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/j9cof0s1/rodolphe-rouen "
 },
 {
  "Chef": "Xabi et Patrice Ibarboure",
  "Zipcode": 64210,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/28x2q9k/la-table-des-freres-ibarboure-bidart "
 },
 {
  "Chef": "Jean-Baptiste Natali",
  "Zipcode": 52330,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/298i34w/hostellerie-la-montagne-colombey-les-deux-eglises "
 },
 {
  "Chef": "Frédéric Robert",
  "Zipcode": 75016,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2af5lql/la-grande-cascade-paris-16 "
 },
 {
  "Chef": "Martin Simonart",
  "Zipcode": 45290,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2bicgcl/auberge-des-templiers-les-bezards "
 },
 {
  "Chef": "Mathieu Guibert",
  "Zipcode": 44770,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2ciults/anne-de-bretagne-la-plaine-sur-mer "
 },
 {
  "Chef": "Vivien Durand",
  "Zipcode": 33310,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/4g00u3j8/le-prince-noir-vivien-durand-lormont "
 },
 {
  "Chef": "Frédéric Bacquié",
  "Zipcode": 66190,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2dlsvt0/la-balette-collioure "
 },
 {
  "Chef": "Alain Pavard",
  "Zipcode": 77860,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29ask7o/auberge-de-la-brie-couilly-pont-aux-dames "
 },
 {
  "Chef": "Marco Viganò",
  "Zipcode": 42300,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3m56yu9/aux-anges-roanne "
 },
 {
  "Chef": "Bernard Leray",
  "Zipcode": 68230,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2a2adlj/la-nouvelle-auberge-wihr-au-val "
 },
 {
  "Chef": "Sébastien Grospellier",
  "Zipcode": 71570,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/294fsc5/la-table-de-chaintre-chaintre "
 },
 {
  "Chef": "Marc Duval",
  "Zipcode": 60540,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/28vem1k/la-grange-de-belle-eglise-belle-eglise "
 },
 {
  "Chef": "ChristopheDucros",
  "Zipcode": 30700,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/1ss80t3t/la-table-duzes-uzes "
 },
 {
  "Chef": "Lloyd Tropeano",
  "Zipcode": 84400,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/jfxt32k/le-bistrot-de-lagarde-lagarde-dapt "
 },
 {
  "Chef": "Raphaël Rego",
  "Zipcode": 75005,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/3855601/oka-paris-05 "
 },
 {
  "Chef": "Takao Takano",
  "Zipcode": 69006,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/1fchzdq5/takao-takano-lyon-06 "
 },
 {
  "Chef": "Romain Gandolphe",
  "Zipcode": 84800,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29nsjme/le-vivier-lisle-sur-la-sorgue "
 },
 {
  "Chef": "Eric Westermann",
  "Zipcode": 67000,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2b0sgrs/buerehiesel-strasbourg "
 },
 {
  "Chef": "Joël Césari",
  "Zipcode": 39100,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2buz227/la-chaumiere-dole "
 },
 {
  "Chef": "Nans Gaillard",
  "Zipcode": 13600,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/akfvyg8/la-table-de-nans-la-ciotat "
 },
 {
  "Chef": "Ludovic Turac",
  "Zipcode": 13002,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/29w4kky/une-table-au-sud-marseille-02 "
 },
 {
  "Chef": "Sandrine Dupin",
  "Zipcode": 26600,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2d0la2d/maison-chabran-la-grande-table-pont-de-lisere "
 },
 {
  "Chef": "Cyril Laugier",
  "Zipcode": 71570,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2armsjm/auberge-du-paradis-platre-durand "
 },
 {
  "Chef": "Jean-Michel Turin",
  "Zipcode": 70170,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2alwjjs/chateau-de-vauchoux-vauchoux "
 },
 {
  "Chef": "Jacky Louazé",
  "Zipcode": 51100,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2anjd1l/le-foch-reims "
 },
 {
  "Chef": "Pierre Chrétien",
  "Zipcode": 76740,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/28z3n7r/auberge-du-dun-le-bourg-dun "
 },
 {
  "Chef": "Philippe Michel",
  "Zipcode": 71260,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2dcnkds/la-marande-mirande "
 },
 {
  "Chef": "Stéphane Andrieux",
  "Zipcode": 46200,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2c38ubh/chateau-de-la-treyne-lacave "
 },
 {
  "Chef": "Cyril Lignac",
  "Zipcode": 75015,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2dtfbbi/le-quinzieme-cyril-lignac-paris-15 "
 },
 {
  "Chef": "Nicolas Fages",
  "Zipcode": 14400,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2bgynqb/chateau-de-sully-sully "
 },
 {
  "Chef": "Jean-Luc Rabanel",
  "Zipcode": 13200,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2e06dui/latelier-de-jean-luc-rabanel-arles "
 },
 {
  "Chef": "Michel Rochedy et Stéphane Buron",
  "Zipcode": 73120,
  "NumberOfStars": " 2 stars",
  "Link": " https://restaurant.michelin.fr/2btao3c/le-chabichou-courchevel-1850 "
 },
 {
  "Chef": 0,
  "Zipcode": 54300,
  "NumberOfStars": " 1 star",
  "Link": " https://restaurant.michelin.fr/2c5ztru/chateau-dadomenil-luneville "
 }
]

// to make sure we have the same number of Hotel and Chef (because normaly, 1 Hotel = 1 Chef)
function CompteurHotel() {
  var compteur = 0;

  for (const h of hotelInfo) {
    compteur++;
  }

  console.log("nombre d'hotel :" , compteur);
}
function CompteurChef() {
  var compteur = 0;

  for (const c of chef) {
    compteur++;
  }

  console.log("nombre de chefs :" , compteur);
}
//CompteurHotel(); //=126
//CompteurChef(); //=126

/*
   how many equivalence between the chefs scraped on relais chateaux and those on michelin
   (beware of the zipcode, it needs to be the same)        --> 52
*/
function Equivalence() {
  //var compteur = 0;
  for (const c of chef) {
    c["Keep"]=0;
    for (const m of michelin) {
      if (c.Chef === (" " + m.Chef + " ") && c.Zipcode === m.Zipcode) {
        //compteur++;
        //console.log(c.Chef, c.Zipcode);
        c["Keep"]=1;
      }
    }
  }
  //console.log(compteur);
  return chef;
}
const newChefArray = Equivalence();

/*
  Combine chef and hotelInfo according to the name of the hotel and keep only those starred in michelin
  Hotel&restaurant to keep      --> 43
*/
function CombineChefHotel() {
  //var compteur = 0;
  var toKeep = new Array();

  for (const h of hotelInfo) {
    for (const c of newChefArray) {

      if((h.Hotel === c.Hotel) && (c.Keep === 1)) {
        var temp = new Object();

        temp["Hotel"]=h.Hotel;
        temp["Departement"]=h.Departement;
        temp["Zipcode"]=c.Zipcode;
        temp["NumberOfRooms"]=h.NumberOfRooms;
        temp["Price"]=h.Price;
        temp["Lien"]=h.Lien;
        temp["Chef"]=c.Chef;
        temp["Keep"]=c.Keep;

        toKeep.push(temp);
        //compteur++;
      }
    }
  }
  //console.log(compteur);
  return toKeep;
}
const hotelToKeep = CombineChefHotel();
//console.log(hotelToKeep);

fs.writeFile("./hotelToKeep.json", JSON.stringify(hotelToKeep, null, 4), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});
