import React from "react";

const BeerCard = props => {
  const beerData = props.beerData;
  return (
    <React.Fragment key={beerData.id}>
      <div className="card">
        <div className="card-content">
          <div className="media-content">
            <p className="title">{beerData["name"]}</p>
            <div className="card-image">
              <figure className="image  is-128x128">
                <img src={beerData.image_url} alt={beerData["name"]} />
              </figure>
            </div>
          </div>
          <div className="content">
            {beerData["description"]}
            <br />
            <time dateTime={beerData["first_brewed"]}>
              First brewed: {beerData["first_brewed"]}
            </time>
            <p>abv: {beerData["abv"]}</p>
            <p>ibu: {beerData["ibu"]}</p>
            <p>ebc: {beerData["ebc"]}</p>
            <p>srm: {beerData["srm"]}</p>
            <p>ph: {beerData["ph"]}</p>
            <p>Attenuation level: {beerData["attenuation_level"]}</p>
            <p>
              Volume:
              {`${beerData["volume"]["value"]} ${beerData["volume"]["unit"]}`}
            </p>
            <p>
              Boil volume:
              {`${beerData["boil_volume"]["value"]} ${
                beerData["boil_volume"]["unit"]
              }`}
            </p>
            <p>Method:</p>
            {
              <React.Fragment>
                <p>
                  Mash temperature:
                  {`${beerData["method"]["mash_temp"][0]["temp"]["value"]} ${
                    beerData["method"]["mash_temp"][0]["temp"]["unit"]
                  }`}
                </p>
                <p>
                  Duration: {beerData["method"]["mash_temp"][0]["duration"]}
                </p>
                <p>
                  Fermentation:
                  {`${beerData["method"]["fermentation"]["temp"]["value"]} ${
                    beerData["method"]["fermentation"]["temp"]["unit"]
                  }`}
                </p>
                <p>Twist: {beerData["method"]["twist"]}</p>
              </React.Fragment>
            }
            <p>Ingredients:</p>
            {
              <React.Fragment>
                <p>Malt: </p>
                <ul>
                  {beerData["ingredients"]["malt"].map((el, index) => {
                    return (
                      <li key={"ingmalt" + el["name"] + index}>
                        Name: {el["name"]}. Amount: {el["amount"]["value"]}
                        {el["amount"]["unit"]}
                      </li>
                    );
                  })}
                </ul>
                <p>Hops: </p>
                <ul>
                  {beerData["ingredients"]["hops"].map((el, index) => {
                    return (
                      <li key={"inghops" + el["name"] + index}>
                        Name: {el["name"]}. Amount: {el["amount"]["value"]}
                        {el["amount"]["unit"]} Add: {el["add"]}. Attribute:
                        {el["attribute"]}
                      </li>
                    );
                  })}
                </ul>
                <p>Yeast: {beerData["ingredients"]["yeast"]}</p>
              </React.Fragment>
            }
            <p>Food pairing: </p>
            <ul>
              {beerData["food_pairing"].map((el, index) => (
                <li key={"fp" + index}>{el}</li>
              ))}
            </ul>
            <p>Brewers tips: {beerData["brewers_tips"]}</p>
            <p>Contributed by: {beerData["contributed_by"]}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BeerCard;
