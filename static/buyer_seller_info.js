class BuyerSellerInfo extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <style>

    .notifications {
    display: flex;
    justify-content: flex-start;
    }

    .card-body {
        font-size: 13px;
    }

    .request {
        padding-left: 50px;

    }


    </style>


    <div class="card mt-4" style="max-width: 600px;">
                <img class="card-img-top" src="assets/house.jpg" alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">Matthew Lewis</h5>
                    <p class="card-text">$120,000</p>
                    <p class="card-text"> 2237 Kitty Hawk road, Univeral city, Tx, 78023</p>
                    <p>Time on Market: 25 days</p>
                    <p>Status: Negotiating the draft contract</p>
                    <div class="notifications">
                       <a href="#"><p class="bids">Bids Recieved: 1</p></a>
                        <a href="#"><p class="request">Show Request: 3</p></a>
                    </div>
              </div>
      </div>
`
  }
}

customElements.define('buyer-seller-info-component', BuyerSellerInfo);
