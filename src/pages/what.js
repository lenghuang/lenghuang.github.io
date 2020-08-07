import React from "react";
import MyHelmet from "../components/Helmet";
import What from "../components/what";
import MyNav from "../components/Nav";
import Footer from "../components/Footer";
import { heroData, whatData } from "../data/data";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../style/main.scss';

const whattest = () => {};

export default (props) => {
  return (
    <>
      <MyHelmet />
      <BrowserRouter>
        <MyNav data={heroData} />
        <Link to="/what/pizza"> Click me </Link>
        <Switch>
          <Route
            path="/what/:id"
            render={(props) => <What {...props} data={whatData} />}
          />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
};
