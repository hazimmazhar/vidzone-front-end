import React, { Component } from "react";
import { getGenres } from "./../../services/genreService";

class Footer extends Component {
  state = {
    genres: [],
  };

  async componentDidMount() {
    const { data: genres } = await getGenres();
    this.setState({ genres });
  }

  render() {
    const { genres } = this.state;

    return (
      <div className="footer-section">
        <div className="container">
          <div class="row text-center text-white">
            <div class="col-md-3 py-2">
              <img src="/img/logo.png" alt="logo" />
            </div>
            <div class="col-md-3 py-2">
              <h4 class="text-danger pb-2">Genres</h4>
              {genres.map((genre) => (
                <p key={genre._id}>{genre.name}</p>
              ))}
            </div>
            <div class="col-md-3 py-2">
              <h4 class="text-danger">Location</h4>
              <p class="pt-2">50-Gulberg-3</p>
              <p>street 10</p>
              <p>Lahore, Pakistan</p>
            </div>
            <div class="col-md-3 py-2">
              <h4 class="text-danger">Contact Us</h4>
              <p class="pt-2">Phone: +92-330-5258</p>
              <p>Email: Vidzone@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
