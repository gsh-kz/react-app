// font-awesome
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';

// include css
import "../scss/app.scss";

// import components
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Header } from "./layout/header";
import { Content } from "./layout/content";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Content />
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
