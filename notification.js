class Notification extends HTMLElement {
	constructor() {
		super();
	}
	
	connectedCallback() {
		this.innerHTML = `
		<div class="card">
			<div class="row card-body border-bottom">
				<div class="col-8">
					<p class="card-text">Message placeholder</p>
				</div>
				<div class="col-4">
					<p class="card-text">6/16/2021</p>
				</div>
				<div class="row mt-2">
					<div class="col">
						<a href="#" class="btn btn-primary owncrib-btn-primary">Select</a>
					</div>
				</div>
			</div>
		</div>
		`
	}
}

customElements.define('update-box', Notification);