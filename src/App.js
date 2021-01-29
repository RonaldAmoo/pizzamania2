import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar navbar-default navbar-home navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="https://google.com" className="navbar-brand">
              PIZZAMANIA
            </a>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="https://google.com">Home</a>
              </li>
              <li>
                <a href="https://google.com">About Pizza</a>
              </li>
              <li>
                <a href="https://google.com">Pizza Types</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
          <div
            id="carousel-example-generic"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carousel-example-generic"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carousel-example-generic"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carousel-example-generic"
                data-slide-to="2"
              ></li>
            </ol>

            <div className="carousel-inner carousel-content" role="listbox">
              <div className="item active">
                <img src="pizza/pizza 8.jpg" alt="pizza" />
              </div>
              <div className="item">
                <img src="pizza/pizza 4.jpg" alt="pizza" />
              </div>
              <div className="item">
                <img src="pizza/pizza 9.jpg" alt="pizza" />
              </div>
            </div>

            <a
              className="left carousel-control"
              href="#carousel-example-generic"
              role="button"
              data-slide="prev"
            >
              <span
                className="glyphicon glyphicon-chevron-left"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="right carousel-control"
              href="#carousel-example-generic"
              role="button"
              data-slide="next"
            >
              <span
                className="glyphicon glyphicon-chevron-right"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container about-pizza">
        <div className="row">
          <h2 className="text-center">About Pizza</h2>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="pizza/pizza 3.jpg"
              alt="pizza"
              className="img-responsive"
            />
          </div>
          <div className="col-md-6">
            <h2>Pizza Is Awesome!</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </p>
          </div>
        </div>
      </div>

      <div className="container about-pizza">
        <div className="row">
          <h2 className="text-center">Pizza Types</h2>
        </div>
      </div>

      <div className="container"></div>
      <div className="row">
        <div className="col-md-3">
          <div className="thumbnail">
            <img src="pizza/pizza 1.jpg" alt="Eddy" />
            <div className="caption">
              <h3>Eddy's Pizza</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="thumbnail">
            <img src="pizza/pizza 7.jpg" alt="daddy" />
            <div className="caption">
              <h3>Daddy's Pizza</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="thumbnail">
            <img src="pizza/pizza 2.jpg" alt="naos" />
            <div className="caption">
              <h3>Naos Pizza</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="thumbnail">
            <img src="pizza/pizza 5.jpg" alt="Vegetarian" />
            <div className="caption">
              <h3>Vegetarian Pizza</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container-fluid">
          <div className="row">
            <p className="text-center">
              &copy; 2020 Pizzamania All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
