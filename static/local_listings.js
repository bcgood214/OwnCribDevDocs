class LocalListings extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `

    <style>
    * {
      padding: 0;
      margin: 0;
    }
    /* #FCBC5C */
    /* #049C9C */

    html,
    body {
      height: 100%;
      /* display: grid;
      place-items: center; */
    }

    .localListingsContainer {
      max-width: 700px;
      border: 2px solid #049c9c;
      border-radius: 0.5rem;
      padding: 1rem;

      display: flex;
      flex-flow: wrap column;
      align-items: center;
    }

    .localListingsTitle {
      font-size: 1rem;
      font-family: Poppins, sans-serif;
      font-weight: 900;
      border: 1px solid #049c9c;
      padding: 3px 6px;
    }

    .locationContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
    }

    .editLocationBtn,
    .houseBtn {
      background: rgba(4, 156, 156, 0.8);
      padding: 3px 6px;
      border: 0;
      outline: none;
      border-radius: 0.25rem;
      transition: all 0.15s ease-in;
      color: white;
      font-family: Poppins, sans-serif;
      text-align: center;
    }

    .editLocationBtn:hover {
      background: rgba(4, 156, 156, 1);
    }

    .editLocationBtn,
    .averagePriceContainer {
      margin-bottom: 1rem;
    }

    .locationHeader,
    .numOfHomesTitle {
      font-size: 1.1rem;
      font-family: Open Sans, sans-serif;
      text-align: center;
    }

    .currentLocation,
    .numOfHomes {
      font-family: Poppins, sans-serif;
      margin-left: 1rem;
      font-size: 1.5rem;
      font-weight: 900;
      border-bottom: 2px solid #049c9c;
      text-align: center;
    }

    .suggestedTitle {
      font-size: 1rem;
      font-family: Poppins, sans-serif;
      font-weight: 900;
      border: 1px solid #049c9c;
      padding: 3px 6px;
    }

    /* LOCAL HOUSES */
    .localHouses {
      list-style: none;
      padding: 0;
      width: 100%;
      margin: 0 auto;

      display: flex;
      flex-wrap: wrap;
    }

    .house {
      height: 125px;
      flex-grow: 1;
      flex-basis: 100%;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      /* border: 1px solid black; */
      position: relative;
      margin: 0.25rem;
      /* border-radius: 0.5rem; */
    }

    .house:nth-child(1) {
      background-image: url("assets/house1.jpg");
      background-size: cover;
      background-position: center center;
    }

    .house:nth-child(2) {
      background-image: url("assets/house2.jpg");
      background-size: cover;
      background-position: center center;
    }

    .houseOverlay {
      border-radius: 0.5rem;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      /* background: rgba(0, 0, 0, 0.6); */
      background: rgba(4, 156, 156, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      opacity: 0;
      transition: all 250ms ease-in-out;
    }

    .houseOverlay > * {
      transform: translateY(20px);
      transition: all 250ms ease-in-out;
    }

    .houseOverlay:hover {
      opacity: 1;
    }

    .houseOverlay:hover > * {
      transform: translateY(0);
    }

    .houseTitle {
      font-family: Poppins, sans-serif;
      font-size: 1.25rem;
    }

    .priceTitle {
      font-family: Open Sans, sans-serif;
      font-size: 1rem;
    }

    .houseBtn {
      background: rgba(255, 255, 255, 0.7);
      color: black;
      padding: 3px 6px;
    }

    .houseBtn:hover {
      background: rgba(255, 255, 255, 1);
    }

    </style>


    <div class="localListingsContainer container-fluid mb-4 mt-4">
      <h1 class="localListingsTitle">Local Listings</h1>

      <div class="locationContainer">
        <h2 class="locationHeader">
          Current Location:
          <h5 class="currentLocation">Austin, TX</h5>
        </h2>
        <button type="button" class="editLocationBtn">Change Location</button>
      </div>

      <div class="numOfHomesContainer">
        <h2 class="numOfHomesTitle">
          Number of Homes: <span class="numOfHomes">254</span>
        </h2>
      </div>

      <div class="averagePriceContainer">
        <h2 class="numOfHomesTitle">
          Average Price of Homes: <span class="numOfHomes">$1,900,000</span>
        </h2>
      </div>

      <h3 class="suggestedTitle">Suggested Homes:</h3>

      <ul class="localHouses">
        <li class="house">
          <div class="houseOverlay">
            <h2 class="houseTitle">Casa Blanca</h2>
            <h3 class="priceTitle">
              Price: <span class="housePrice">$100.00 </span>
            </h3>
            <button class="houseBtn">Learn More</button>
          </div>
        </li>

        <li class="house">
          <div class="houseOverlay">
            <h2 class="houseTitle">White House</h2>
            <h3 class="priceTitle">
              Price: <span class="housePrice">$100.00 </span>
            </h3>
            <button class="houseBtn">Learn More</button>
          </div>
        </li>
      </ul>
    </div>
		`
	}
}

customElements.define('loc-list-box', LocalListings);
