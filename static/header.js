class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
      body {
      	padding: 0;
      	margin: 0;
      }

      nav {
      	position: fixed;
      	z-index: 10;
      	left: 0;
      	right: 0;
      	top: 0;
      	font-family: 'Montserrat', sans-serif;
      	padding: 0 5%;
      	height: 100px;
      	background-color: #fff;
      }

      img{
          width: 5%;
          height: auto;
      }

      nav .links {
      	float: right;
      	padding: 0;
      	margin: 0;
      	width: 60%;
      	height: 100%;
      	display: flex;
      	justify-content: space-around;
      	align-items: center;
      }
      nav .links li {
      	list-style: none;
      }
      nav .links a {
      	display: block;
      	padding: 1em;
      	font-size: 16px;
      	font-weight: bold;
      	color: #000;
      	text-decoration: none;
      }
      #nav-toggle {
      	position: absolute;
      	top: -100px;
      }
      nav .icon-burger {
      	display: none;
      	position: absolute;
      	right: 5%;
      	top: 50%;
      	transform: translateY(-50%);
      }
      nav .icon-burger .line {
      	width: 30px;
      	height: 5px;
      	background-color: #000;
      	margin: 5px;
      	border-radius: 3px;
      	transition: all .3s ease-in-out;
      }
      @media screen and (max-width: 768px) {
      	nav .logo {
      		float: none;
      		width: auto;
      		justify-content: center;
      	}
      	nav .links {
      		float: none;
      		position: fixed;
      		z-index: 9;
      		left: 0;
      		right: 0;
      		top: 100px;
      		bottom: 100%;
      		width: auto;
      		height: auto;
      		flex-direction: column;
      		justify-content: space-evenly;
      		background-color: #FFF;
      		overflow: hidden;
      		box-sizing: border-box;
      		transition: all .5s ease-in-out;
      	}
      	nav .links a {
      		font-size: 20px;
      	}
      	nav :checked ~ .links {
      		bottom: 0;
      	}
      	nav .icon-burger {
      		display: block;
      	}
      	nav :checked ~ .icon-burger .line:nth-child(1) {
      		transform: translateY(10px) rotate(225deg);
      	}
      	nav :checked ~ .icon-burger .line:nth-child(3) {
      		transform: translateY(-10px) rotate(-225deg);
      	}
      	nav :checked ~ .icon-burger .line:nth-child(2) {
      		opacity: 0;
      	}

      }

      </style>
      <nav>
          <input id="nav-toggle" type="checkbox">
          <img src="assets/2.png" alt="">
          <ul class="links">
              <li><a href="#">For Buyers</a></li>
              <li><a href="#">For Sellers</a></li>
              <li><a href="#">Search</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Sign In</a></li>
          </ul>
          <label for="nav-toggle" class="icon-burger">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
          </label>
      </nav>
    `;
  }
}

customElements.define('header-component', Header);
