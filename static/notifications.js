class NotificationBox extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `
    <div class="card">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Notification</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Buyer wants to schedule a showing</td>
          <td>6/17/21 10:05:37 AM</td>
        </tr>
        <tr>
          <td>Your transaction has been processed</td>
          <td>6/13/21 1:20:01 PM</td>
        </tr>
      </tbody>
    </table>
    </div>
		`
	}
}

customElements.define('not-box', NotificationBox);
