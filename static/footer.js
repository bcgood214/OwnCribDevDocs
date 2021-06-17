class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
      #footer {
          background: #049c9c !important;
          border-color: #fcbc5c;
          border-style: double;
      }

      #footer h5 {
          padding-left: 10px;
          border-left: 3px solid #eeeeee;
          padding-bottom: 6px;
          margin-bottom: 20px;
          color: #ffffff;
          font-weight: bold;
      }

      #footer a {
          color: #ffffff;
          text-decoration: none !important;
          background-color: transparent;
          -webkit-text-decoration-skip: objects;
      }

      #footer ul.social li {
          padding-top: 100px;
          font-size: 16px;
      }

      #footer ul.social li a i {
          margin-right: 5px;
          font-size: 25px;
          -webkit-transition: .5s all ease;
          -moz-transition: .5s all ease;
          transition: .5s all ease;
      }

      #footer ul.social li:hover a i {
          font-size: 30px;
          margin-top: -10px;
      }

      #footer ul.social li a,
      #footer ul.quick-links li a {
          color: #ffffff;
      }

      #footer ul.social li a:hover {
          color: #eeeeee;
      }

      #footer ul.quick-links li {
          padding: 3px 0;
          -webkit-transition: .5s all ease;
          -moz-transition: .5s all ease;
          transition: .5s all ease;
      }

      #footer ul.quick-links li:hover {
          padding: 3px 0;
          margin-left: 5px;
          font-weight: 700;
      }

      #footer ul.quick-links li a i {
          margin-right: 5px;
      }

      #footer ul.quick-links li:hover a i {
          font-weight: 700;
      }

      @media (max-width:767px) {
          #footer h5 {
              padding-left: 0;
              border-left: transparent;
              padding-bottom: 0px;
              margin-bottom: 10px;
          }
      }

      section .section-title {
          text-align: center;
          color: #049c9c;
          margin-bottom: 50px;
          text-transform: uppercase;
      }


      </style>
      <section id="footer">
          <div class="container">
              <div class="row text-center text-xs-center text-sm-left text-md-left">
                  <div class="col-xs-12 col-sm-4 col-md-4">
                      <h5>Company</h5>
                      <ul class="list-unstyled quick-links">
                          <li><a href="#">About Us</a></li>
                          <li><a href="#">Our Services</a></li>
                          <li><a href="#">Contact Us</a></li>
                          <li><a href="#">Privacy Policy</a></li>
                      </ul>
                  </div>
                  <div class="col-xs-12 col-sm-4 col-md-4">
                      <h5>Customer Support</h5>
                      <ul class="list-unstyled quick-links">
                          <li><a href="#">FAQ</a></li>
                          <li><a href="#">Homes</a></li>
                          <li><a href="#">Buyers</a></li>
                          <li><a href="#">Sellers</a></li>
                      </ul>
                  </div>
                  <div class="col-xs-12 col-sm-4 col-md-4">
                      <h5>Testimonials</h5>
                      <ul class="list-unstyled quick-links">
                          <li><a href="#">Investors</a></li>
                          <li><a href="#">Customers</a></li>
                          <li><a href="#">Sellers</a></li>
                          <li><a href="#">Reviews</a></li>
                      </ul>
                  </div>
              </div>
              <div class="row">
                  <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                      <ul class="list-unstyled list-inline social text-center">
                          <li><a href="#" class="fa fa-facebook"></a></li>
                          <li><a href="#" class="fa fa-twitter"></a></li>
                          <li><a href="#" class="fa fa-google"></a></li>
                          <li><a href="#" class="fa fa-youtube"></a></li>
                          <li><a href="#" class="fa fa-skype"></a></li>
                          <li><a href="#" class="fa fa-vimeo"></a></li>
                          <li><a href="#" class="fa fa-android"></a></li>
                          <li><a href="#" class="fa fa-yahoo"></a></li>
                          <li><a href="#" class="fa fa-reddit"></a></li>
                      </ul>
                  </div>
              </div>
          </div>
        </section>
    `;
  }
}

customElements.define('footer-component', Footer);
