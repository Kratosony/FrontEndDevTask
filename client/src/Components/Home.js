import React, { Component } from 'react';
import Link from "Components/Link";
import { commonStrings } from 'Constants/CommonStrings';
import './Home.scss';

class Home extends Component {
    render() {
        return (
            <div class="banner">
                <div class="textBox">
                    <h1 class="bannerHeaders">
                        <span class="bannerPrimaryText">{commonStrings.companySlogan}</span>
                        <span class="bannerSecondaryText">{commonStrings.bannerSecondary}</span>
                    </h1>
                    <Link banner linkTo={"/login"} name={"Login"}></Link>
                </div>
            </div>
        )
    }
}

export default Home
