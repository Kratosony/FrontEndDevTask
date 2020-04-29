import React, { Component } from 'react';
import Link from "Components/Link";
import HomeSubSection from "Components/HomeSubSection";
import FeedbackItem from "Components/FeedbackItem";
import { commonStrings } from 'Constants/CommonStrings';
import Emily from 'Assets/Emily.jpg';
import Quentin from 'Assets/Quentin.jpg';
import Ana from 'Assets/Ana.jpg';
import './Home.scss';

class Home extends Component {
    render() {
        return (
            <div class="landingPage">
                <div class="banner">
                    <div class="textBox">
                        <h1 class="bannerHeaders">
                            <span class="bannerCompanyText">{commonStrings.betdilla}</span>
                            <span class="bannerPrimaryText">{commonStrings.companySlogan}</span>
                            <span class="bannerSecondaryText">{commonStrings.bannerSecondary}</span>
                        </h1>
                        <Link banner linkTo={"/login"} name={"Login"}></Link>
                    </div>
                </div>
                <div class="landingPageSection">
                    <HomeSubSection header="Games Galore!" paragraph={commonStrings.randomParagraph} />
                    <HomeSubSection header="Guaranteed Fun!" paragraph={commonStrings.randomParagraph2} />
                </div>
                <div class="feedbackArea">
                    <FeedbackItem header="Emily R." paragraph={commonStrings.feedbackParagraph} avatar={Emily} />
                    <FeedbackItem header="Quentin T." paragraph={commonStrings.feedbackParagraph2} avatar={Quentin} />
                    <FeedbackItem header="Ana De A." paragraph={commonStrings.feedbackParagraph3} avatar={Ana} />
                </div>
            </div>
        )
    }
}

export default Home
