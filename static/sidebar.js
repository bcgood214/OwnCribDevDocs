class Toolbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
        body {
            margin: 0;
            font-family: "Lato", sans-serif;
        }

        .sidebar {
            margin: 0;
            padding: 0;
            width: 200px;
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

        div.content {
            margin-left: 200px;
            padding: 1px 16px;
            height: 1000px;
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
