import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
import Logout from "./components/logout";
import ProtectedRoute from "./components/common/protectedRoute";
import RegisterForm from "./components/registerForm";
import LoginForm from "./components/loginForm";
import NavBar from "./components/common/navBar";
import Home from "./components/home";
import auth from "./services/authService";
import CustomerForm from "./components/customerForm";
import RentalForm from "./components/rentalForm";
import ReturnForm from "./components/returnForm";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />
        <main>
          <Switch>
            <Route path="/movies/new" component={MovieForm} />
            <Route path="/customers/new" component={CustomerForm} />
            <Route path="/rentals/new" component={RentalForm} />
            <Route path="/returns/new" component={ReturnForm} />
            <ProtectedRoute path="/movies/:id" component={MovieForm} />
            <ProtectedRoute path="/customers/:id" component={CustomerForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route
              path="/movies"
              render={(props) => <Movies {...props} user={user} />}
            />
            <Route
              path="/customers"
              render={(props) => <Customers {...props} user={user} />}
            />
            <Route
              path="/rentals"
              render={(props) => <Rentals {...props} user={user} />}
            />
            <Route path="/home" component={Home} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}
export default App;
