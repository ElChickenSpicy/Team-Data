import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Searchbar } from '../Searchbar/Searchbar'
import { Nav } from '../Nav/Nav'

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      country: '',
      founded: '',
      stadium: '',
      badge: '',
      twitter: '',
      website: '',
      youtube: '',
      facebook: ''
    };
    this.myFetch = this.myFetch.bind(this);
  }

  async myFetch(endpoint) {
    const response = await fetch(endpoint);
    if (response.ok) {
      let jsonResponse = await response.json();
      if (jsonResponse.teams) {
        this.setState({
          name: jsonResponse.teams[0].strTeam,
          country: jsonResponse.teams[0].strCountry,
          founded: jsonResponse.teams[0].intFormedYear,
          stadium: jsonResponse.teams[0].strStadium,
          badge: jsonResponse.teams[0].strTeamBadge,
          twitter: 'https://' + jsonResponse.teams[0].strTwitter,
          website: jsonResponse.teams[0].strWebsite,
          youtube: 'https://' + jsonResponse.teams[0].strYoutube,
          facebook: 'https://' + jsonResponse.teams[0].strFacebook
        });
      }
    } else {
      console.log('Failed')
    }
  }

  render() {
    if (this.state.name !== '') {
      return (
        <div id="flex">
          <Searchbar onChange={this.myFetch} />
          <img id="crest" src={this.state.badge} />
          <h1>{this.state.name}</h1>
          <p>{this.state.name}, founded in {this.state.founded} are a team based in {this.state.country}.</p>
          <p>Their home stadium is {this.state.stadium}.</p>
          <p>Check out more about this club @ <span><a href={'https://' + this.state.website}>{this.state.website}</a></span></p>
          <Nav twitter={this.state.twitter} facebook={this.state.facebook} youtube={this.state.youtube}/>
        </div>
      )
    } else {
      return (
        <div>
          <Searchbar onChange={this.myFetch} />
        </div>
      )
    }
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
