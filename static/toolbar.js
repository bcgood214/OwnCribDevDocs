class Toolbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <style>
        body {
            margin: 0;
            font-family: "Lato", sans-serif;
        }

        .sidebar {
            background-color: #049C9C;
            position: fixed;
            height: 100%;
            overflow: auto;
        }

        .sidebar a {
            display: block;
            color: #ffffff;
            padding: 16px;
            text-decoration: none;
        }

        .sidebar a i{
            margin-right: 10px;
        }

        .sidebar a.active {
            background-color: #04AA6D;
            color: white;
        }

        .sidebar a:hover:not(.active) {
            background-color: #555;
            color: white;
        }


    </style>

    <div class="sidebar">
        <a class="active" href="#"><i class="fas fa-tv"></i>Dashboard</a>
        <a href="#"><i class="fas fa-copy"></i>Transactions</a>
        <a href="#"><i class="fas fa-envelope-open"></i>Messages</a>
        <a href="#"><i class="fas fa-bell"></i>Notifications</a>
        <a href="#"><i class="fas fa-file-alt"></i>Documents</a>
        <a href="#"><i class="fas fa-calendar"></i>Calendar</a>
        <a href="#"><i class="fas fa-user-alt"></i>Profile</a>
        <a href="#"><i class="fas fa-question-circle"></i>Support</a>
    </div>
    `;
  }
}

customElements.define('toolbar-component', Toolbar);
