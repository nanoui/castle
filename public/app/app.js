/*
    We add the packages in our project for those reasons (in node_module):
    React: A library to speed up development
    React-DOM: A library which allows React to interact with the DOM in a browser
    Parcel: A bundling library which requires no config
    Babel-preset-env: A library which tells Parcel how to transform ES6 to work with many different browsers
    Babel-preset-react: A library which tells Parcel how to handle JSX (much easier)
    Bulma: A CSS framework that uses flexbox and is easy to use
*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/bulma';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import style from './app.css';

const toKeep = [
    {
        "Hotel": "Le Saint-James Bouliac",
        "Departement": " (Gironde)",
        "Zipcode": 33270,
        "NumberOfRooms": " 18Rooms",
        "Price": 175,
        "Lien": " https://www.relaischateaux.com/us/france/stjames-gironde-bouliac ",
        "Chef": " Nicolas Magie ",
        "Keep": 1
    },
    {
        "Hotel": "Brittany & Spa",
        "Departement": " (Finistère)",
        "Zipcode": 29681,
        "NumberOfRooms": " 33Rooms",
        "Price": 167,
        "Lien": " https://www.relaischateaux.com/us/france/brittany-finistere-roscoff ",
        "Chef": " Loic Le Bail ",
        "Keep": 1
    },
    {
        "Hotel": "La Signoria & Spa",
        "Departement": " (Corse)",
        "Zipcode": 20260,
        "NumberOfRooms": " 30Rooms",
        "Price": 352,
        "Lien": " https://www.relaischateaux.com/us/france/signoria-corse-calvi ",
        "Chef": " Alexandre Fabris ",
        "Keep": 1
    },
    {
        "Hotel": "Relais de la Poste",
        "Departement": " (Landes)",
        "Zipcode": 40140,
        "NumberOfRooms": " 16Rooms",
        "Price": 162,
        "Lien": " https://www.relaischateaux.com/us/france/poste-landes-magescq ",
        "Chef": " Jean Coussau ",
        "Keep": 1
    },
    {
        "Hotel": "Clarance Hôtel",
        "Departement": " (Nord)",
        "Zipcode": 59000,
        "NumberOfRooms": " 19Rooms",
        "Price": 170,
        "Lien": " https://www.relaischateaux.com/us/france/clarance-hotel-nord ",
        "Chef": " Thibaut Gamba ",
        "Keep": 1
    },
    {
        "Hotel": "Abbaye de la Bussière",
        "Departement": " (Côte-d’Or)",
        "Zipcode": 21360,
        "NumberOfRooms": " 20Rooms",
        "Price": 225,
        "Lien": " https://www.relaischateaux.com/us/france/bussiere-cote-d-or-la-bussiere-sur-ouche ",
        "Chef": " Guillaume Royer ",
        "Keep": 1
    },
    {
        "Hotel": "Domaine Les Crayères",
        "Departement": " (Marne)",
        "Zipcode": 51100,
        "NumberOfRooms": " 20Rooms",
        "Price": 380,
        "Lien": " https://www.relaischateaux.com/us/france/crayeres-marne-reims ",
        "Chef": " Philippe Mille ",
        "Keep": 1
    },
    {
        "Hotel": "Le Vieux Logis",
        "Departement": " (Dordogne)",
        "Zipcode": 24510,
        "NumberOfRooms": " 24Rooms",
        "Price": 170,
        "Lien": " https://www.relaischateaux.com/us/france/vieuxlogis-dordogne-tremolat ",
        "Chef": " Vincent Arnould ",
        "Keep": 1
    },
    {
        "Hotel": "Hotel & Restaurant Thierry Drapeau",
        "Departement": " (Vendée)",
        "Zipcode": 85260,
        "NumberOfRooms": " 14Rooms",
        "Price": 520,
        "Lien": " https://www.relaischateaux.com/us/france/thierrydrapeau-vendee-saint-sulpice-le-verdon ",
        "Chef": " Thierry Drapeau ",
        "Keep": 1
    },
    {
        "Hotel": "Hôtel Les Barmes de l'Ours",
        "Departement": " (Savoie)",
        "Zipcode": 73150,
        "NumberOfRooms": " 76Rooms",
        "Price": 325,
        "Lien": " https://www.relaischateaux.com/us/france/barmes-de-l-ours-savoie ",
        "Chef": " Antoine Gras ",
        "Keep": 1
    },
    {
        "Hotel": "L’Arnsbourg Restaurant et Hôtel",
        "Departement": " (Moselle)",
        "Zipcode": 57230,
        "NumberOfRooms": " 12Rooms",
        "Price": 175,
        "Lien": " https://www.relaischateaux.com/us/france/arnsbourg-moselle-baerenthal ",
        "Chef": " Fabien Mengus ",
        "Keep": 1
    },
    {
        "Hotel": "La Chapelle Saint-Martin",
        "Departement": " (Haute-Vienne)",
        "Zipcode": 87510,
        "NumberOfRooms": " 13Rooms&1 villa",
        "Price": 135,
        "Lien": " https://www.relaischateaux.com/us/france/chapelle-haute-vienne-nieul ",
        "Chef": " Gilles Dudognon ",
        "Keep": 1
    },
    {
        "Hotel": "La Bastide de Capelongue",
        "Departement": " (Vaucluse)",
        "Zipcode": 84480,
        "NumberOfRooms": " 18Rooms&1 villa",
        "Price": 113,
        "Lien": " https://www.relaischateaux.com/us/france/capelongue-vaucluse-bonnieux-en-provence ",
        "Chef": " Édouard Loubet ",
        "Keep": 1
    },
    {
        "Hotel": "Maison Pic",
        "Departement": " (Drôme)",
        "Zipcode": 26000,
        "NumberOfRooms": " 15Rooms",
        "Price": 238,
        "Lien": " https://www.relaischateaux.com/us/france/pic-drome-valence ",
        "Chef": " Anne-Sophie Pic ",
        "Keep": 1
    },
    {
        "Hotel": "Flocons de Sel",
        "Departement": " (Haute-Savoie)",
        "Zipcode": 74120,
        "NumberOfRooms": " 11Rooms&1 villa",
        "Price": 430,
        "Lien": " https://www.relaischateaux.com/us/france/flocons-haute-savoie-megeve ",
        "Chef": " Emmanuel Renaut ",
        "Keep": 1
    },
    {
        "Hotel": "Assiette Champenoise",
        "Departement": " (Champagne-Ardenne)",
        "Zipcode": 51430,
        "NumberOfRooms": " 33Rooms",
        "Price": 185.5,
        "Lien": " https://www.relaischateaux.com/us/france/assiette-champenoise-champagne-ardenne-tinqueux ",
        "Chef": " Arnaud Lallement ",
        "Keep": 1
    },
    {
        "Hotel": "Baumanière Hôtel & Spa",
        "Departement": " (Bouches-du-Rhône)",
        "Zipcode": 13520,
        "NumberOfRooms": " 54Rooms",
        "Price": 225,
        "Lien": " https://www.relaischateaux.com/us/france/baumaniere-hotel-spa-les-baux-de-provence ",
        "Chef": " Glenn Viel ",
        "Keep": 1
    },
    {
        "Hotel": "Yoann Conte – Bord du Lac Hôtel Restaurant",
        "Departement": " (Haute-Savoie)",
        "Zipcode": 74290,
        "NumberOfRooms": " 8Rooms",
        "Price": 210,
        "Lien": " https://www.relaischateaux.com/us/france/yoannconte-haute-savoie-veyrier-du-lac ",
        "Chef": " Yoann Conte ",
        "Keep": 1
    },
    {
        "Hotel": "Michel Trama",
        "Departement": " (Lot-et-Garonne)",
        "Zipcode": 47270,
        "NumberOfRooms": " 10Rooms",
        "Price": 220,
        "Lien": " https://www.relaischateaux.com/us/france/aubergade-lot-et-garonne-puymirol ",
        "Chef": " Michel Trama ",
        "Keep": 1
    },
    {
        "Hotel": "L'Auberge Basque",
        "Departement": " (Pyrénées-Atlantiques)",
        "Zipcode": 64310,
        "NumberOfRooms": " 11Rooms&1 villa",
        "Price": 101.15,
        "Lien": " https://www.relaischateaux.com/us/france/auberge-basque-saint-pee-sur-nivelle-pyrenees-atlantiques ",
        "Chef": " Cédric Béchade ",
        "Keep": 1
    },
    {
        "Hotel": "Les Prés d’Eugénie - Maison Guérard",
        "Departement": " (Landes)",
        "Zipcode": 40320,
        "NumberOfRooms": " 45Rooms&2 villas",
        "Price": 250,
        "Lien": " https://www.relaischateaux.com/us/france/guerard-landes-eugenie-les-bains ",
        "Chef": " Michel Guérard ",
        "Keep": 1
    },
    {
        "Hotel": "La Maison des Bois – Marc Veyrat",
        "Departement": " (Haute-Savoie)",
        "Zipcode": 74230,
        "NumberOfRooms": " 5Rooms",
        "Price": 0,
        "Lien": " https://www.relaischateaux.com/us/france/marcveyrat-haute-savoie-manigod ",
        "Chef": " Marc Veyrat ",
        "Keep": 1
    },
    {
        "Hotel": "Château de la Treyne",
        "Departement": " (Lot)",
        "Zipcode": 46200,
        "NumberOfRooms": " 17Rooms",
        "Price": 250,
        "Lien": " https://www.relaischateaux.com/us/france/treyne-lot-lacave ",
        "Chef": " Stéphane Andrieux ",
        "Keep": 1
    },
    {
        "Hotel": "Auberge du Jeu de Paume",
        "Departement": " (Oise)",
        "Zipcode": 60500,
        "NumberOfRooms": " 92Rooms",
        "Price": 263.5,
        "Lien": " https://www.relaischateaux.com/us/france/jeudepaume-oise-chantilly ",
        "Chef": " Julien Lucas ",
        "Keep": 1
    },
    {
        "Hotel": "Château Cordeillan-Bages",
        "Departement": " (Gironde)",
        "Zipcode": 33250,
        "NumberOfRooms": " 28Rooms",
        "Price": 170,
        "Lien": " https://www.relaischateaux.com/us/france/cordeillan-gironde-pauillac ",
        "Chef": " Julien Lefebvre ",
        "Keep": 1
    },
    {
        "Hotel": "La Grenouillère",
        "Departement": " (Pas-de-Calais)",
        "Zipcode": 62170,
        "NumberOfRooms": " 11Rooms",
        "Price": 180,
        "Lien": " https://www.relaischateaux.com/us/france/lagrenouillere-pas-de-calais-la-madelaine-sous-montreuil ",
        "Chef": " Alexandre Gauthier ",
        "Keep": 1
    },
    {
        "Hotel": "Château de Bagnols",
        "Departement": " (Rhône-Alpes)",
        "Zipcode": 69620,
        "NumberOfRooms": " 27Rooms",
        "Price": 199.2,
        "Lien": " https://www.relaischateaux.com/us/france/bagnols-rhone-alpes ",
        "Chef": " Jean-Alexandre Ouaratta ",
        "Keep": 1
    },
    {
        "Hotel": "Hôtel Restaurant Clos des Sens - Laurent PETIT",
        "Departement": " (Haute-Savoie)",
        "Zipcode": 74940,
        "NumberOfRooms": " 11Rooms",
        "Price": 230,
        "Lien": " https://www.relaischateaux.com/us/france/clos-des-sens-haute-savoie ",
        "Chef": " Laurent Petit ",
        "Keep": 1
    },
    {
        "Hotel": "Les Hauts de Loire",
        "Departement": " (Loir-et-Cher)",
        "Zipcode": 41150,
        "NumberOfRooms": " 31Rooms",
        "Price": 175,
        "Lien": " https://www.relaischateaux.com/us/france/hauts-loire-loir-et-cher-onzain ",
        "Chef": " Rémy Giraud ",
        "Keep": 1
    },
    {
        "Hotel": "Le Phébus & Spa - Villa des Anges",
        "Departement": " (Vaucluse)",
        "Zipcode": 84220,
        "NumberOfRooms": " 29Rooms&1 villa",
        "Price": 210,
        "Lien": " https://www.relaischateaux.com/us/france/phebus-vaucluse-gordes ",
        "Chef": " Xavier Mathieu ",
        "Keep": 1
    },
    {
        "Hotel": "La Côte Saint Jacques & Spa",
        "Departement": " (Yonne)",
        "Zipcode": 89300,
        "NumberOfRooms": " 22Rooms",
        "Price": 224,
        "Lien": " https://www.relaischateaux.com/us/france/la-cote-saint-jacques-yonne-joigny ",
        "Chef": " Jean-Michel Lorain ",
        "Keep": 1
    },
    {
        "Hotel": "Maison Lameloise",
        "Departement": " (Saône-et-Loire)",
        "Zipcode": 71150,
        "NumberOfRooms": " 16Rooms",
        "Price": 180,
        "Lien": " https://www.relaischateaux.com/us/france/lameloise-saone-et-loire-chagny ",
        "Chef": " Eric Pras ",
        "Keep": 1
    },
    {
        "Hotel": "Auberge des Templiers",
        "Departement": " (Loiret)",
        "Zipcode": 45290,
        "NumberOfRooms": " 24Rooms",
        "Price": 112.2,
        "Lien": " https://www.relaischateaux.com/us/france/templiers-loiret-boismorand ",
        "Chef": " Martin Simonart ",
        "Keep": 1
    },
    {
        "Hotel": "La Pyramide Patrick Henriroux",
        "Departement": " (Isère)",
        "Zipcode": 38200,
        "NumberOfRooms": " 23Rooms",
        "Price": 170,
        "Lien": " https://www.relaischateaux.com/us/france/pyramide-isere-vienne ",
        "Chef": " Patrick Henriroux ",
        "Keep": 1
    },
    {
        "Hotel": "Le Chambard",
        "Departement": " (Haut-Rhin)",
        "Zipcode": 68240,
        "NumberOfRooms": " 32Rooms",
        "Price": 182,
        "Lien": " https://www.relaischateaux.com/us/france/le-chambard-haut-rhin-kaysersberg ",
        "Chef": " Olivier Nasti ",
        "Keep": 1
    },
    {
        "Hotel": "Château de Mercuès",
        "Departement": " (Lot)",
        "Zipcode": 46090,
        "NumberOfRooms": " 30Rooms",
        "Price": 198,
        "Lien": " https://www.relaischateaux.com/us/france/mercues-lot-mercues ",
        "Chef": " Julien Poisot ",
        "Keep": 1
    },
    {
        "Hotel": "Hôtel & Spa du Castellet",
        "Departement": " (Var)",
        "Zipcode": 83330,
        "NumberOfRooms": " 42Rooms",
        "Price": 208,
        "Lien": " https://www.relaischateaux.com/us/france/castellet-var-le-castellet ",
        "Chef": " Christophe Bacquié ",
        "Keep": 1
    },
    {
        "Hotel": "Hôtel Restaurant En Marge",
        "Departement": " (Haute-Garonne)",
        "Zipcode": 31320,
        "NumberOfRooms": " 5Rooms",
        "Price": 0,
        "Lien": " https://www.relaischateaux.com/us/france/hotel-restaurant-en-marge-aureville ",
        "Chef": " Frank Renimel ",
        "Keep": 1
    },
    {
        "Hotel": "Hotel Ile de la Lagune Thalasso & Spa",
        "Departement": " (Pyrénées-Orientales)",
        "Zipcode": 66750,
        "NumberOfRooms": " 24Rooms",
        "Price": 161,
        "Lien": " https://www.relaischateaux.com/us/france/ile-de-la-lagune-saint-cyprien ",
        "Chef": " Christophe Schmitt ",
        "Keep": 1
    },
    {
        "Hotel": "Les Hautes Roches",
        "Departement": " (Indre-et-Loire)",
        "Zipcode": 37210,
        "NumberOfRooms": " 14Rooms",
        "Price": 165,
        "Lien": " https://www.relaischateaux.com/us/france/hautesroches-indre-et-loire-rochecorbon ",
        "Chef": " Didier Edon ",
        "Keep": 1
    },
    {
        "Hotel": "Villa Florentine",
        "Departement": " (Rhône)",
        "Zipcode": 69005,
        "NumberOfRooms": " 28Rooms",
        "Price": 195,
        "Lien": " https://www.relaischateaux.com/us/france/florentine-rhone-lyon ",
        "Chef": " David Delsart ",
        "Keep": 1
    },
    {
        "Hotel": "Domaine de Rochevilaine",
        "Departement": " (Morbihan)",
        "Zipcode": 56190,
        "NumberOfRooms": " 37Rooms",
        "Price": 192,
        "Lien": " https://www.relaischateaux.com/us/france/rochevilaine-morbihan-billiers ",
        "Chef": " Maxime Nouail ",
        "Keep": 1
    },
    {
        "Hotel": "Château de Valmer",
        "Departement": " (Var)",
        "Zipcode": 83420,
        "NumberOfRooms": " 45Rooms",
        "Price": 244,
        "Lien": " https://www.relaischateaux.com/us/france/chateau-de-valmer-la-croix-valmer ",
        "Chef": " Jimmy Coutel ",
        "Keep": 1
    }
]


function searchingFor(term) {
  return function(x) {
    // to make sure that when we are filtering, what we want meets the conditions in here
    return x.Hotel.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}


// create an App component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: toKeep,
      term: '',
    };

    this.searchHandler = this.searchHandler.bind(this);
  }

  //method
  searchHandler(event){
    this.setState({ term: event.target.value })
  }

  // using Bulma for my styles   <List items={this.state.list}/>
  render() {
    return (
      <div className="content">
        <div className="container">
          <section className="section">
            <form>
              <input type="text" className="input" onChange={this.searchHandler} placeholder="Search..." />
            </form>
            {
               this.state.list.filter(searchingFor(this.state.term)).map( h =>
                 <div key={h.Hotel}>
                    <Card body className="hotel_display">
                      <CardTitle className="title">
                        {h.Hotel} {h.Departement}
                      </CardTitle>
                      <CardTitle className="info">
                        Best price for "{h.Hotel}" : from $(USD){h.Price}
                      </CardTitle>
                      <CardTitle className="info">
                        Our starred restaurant Chef : {h.Chef}
                      </CardTitle>
                      <Button href={h.Lien} target="_blank" className="btn">
                        See Hotel
                      </Button>
                    </Card>
                 </div>
               )
            }

          </section>
        </div>
      </div>
    );
  }
}


// to make sure that our component is rendering to the DOM
ReactDOM.render(<App />, document.getElementById("app"));
