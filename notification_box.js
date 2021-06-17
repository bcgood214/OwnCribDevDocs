class NotificationBox extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `
		<div class="row">
			<div class="col card">
				<div class="row">
					<div class="col-8">
						<h5 class="card-body">Message</h5>
					</div>
					<div class="col-4">
						<h5 class="card-body">Date</h5>
					</div>
				</div>
			</div>
		</div>
		`
	}
}

customElements.define('not-box', NotificationBox);