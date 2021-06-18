class MessageCenter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
      .old {
        background-color: #f8f9fa;
      }
    </style>
    <div class="card pt-5 pb-5 mt-4 box-shadow">
      <div class="container-fluid">
        <h2>Message Center</h2>
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action" aria-current="true">
            <div class="d-flex w-100 justify-content-between">
              <p class="mb-1"><strong>Seller Message</strong></p>
              <small>2 hours ago</small>
            </div>
            <small>Jim Johnson</small>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <p class="mb-1"><strong>Showing Confirmed</strong></p>
              <small>yesterday</small>
            </div>
            <small>Jane Jeffries</small>
          </a>
          <a href="#" class="list-group-item list-group-item-action old">
            <div class="d-flex w-100 justify-content-between">
              <p class="mb-1 text-muted"><em>Showing Request</em></p>
              <small class="text-muted"><em>3 days ago</em></small>
            </div>
            <small class="text-muted"><em>Sharon Smith</em></small>
          </a>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define('message-center', MessageCenter);
