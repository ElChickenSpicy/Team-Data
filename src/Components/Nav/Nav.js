import React from 'react';

export class Nav extends React.Component {
    render() {
        let displayTwitter;
        const jsxTwitter =
            <a href={this.props.twitter} target="_blank">
                <img src="twitter.png" />
            </a>
        const noTwitter = <img src="notwitter.png" style={{width: '50px'}} />
        this.props.twitter !== 'https://' ? displayTwitter = jsxTwitter : displayTwitter = noTwitter;

        let displayFacebook;
        const jsxFacebook =
            <a href={this.props.facebook} target="_blank">
                <img src="facebook.png" />
            </a>
        const noFacebook = <img src="nofacebook.png" style={{width: '50px'}}/>
        this.props.facebook !== 'https://' ? displayFacebook = jsxFacebook : displayFacebook = noFacebook;

        let displayYoutube;
        const jsxYoutube =
            <a href={this.props.youtube} target="_blank">
                <img src="youtube.png" />
            </a>
        const noYoutube = <img src="noyoutube.png" style={{width: '50px'}} />
        this.props.youtube !== 'https://' ? displayYoutube = jsxYoutube : displayYoutube = noYoutube;

        return (
            <nav>
                {displayTwitter}
                {displayFacebook}
                {displayYoutube}
            </nav>
        )
    }
}