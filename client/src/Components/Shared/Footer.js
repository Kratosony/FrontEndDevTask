import React, { Component, Fragment } from 'react';
import { commonStrings } from 'Constants/CommonStrings';
import './Footer.scss';

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <div class="spacer" />
                <footer class="footer">
                    <div class="footerAddress">
                        <h1>{commonStrings.betdilla}</h1>
                        <h2>{commonStrings.companySlogan}</h2>

                    </div>
                    <ul class="footerNav">
                        <li class="navItem">
                            <h2 class="navTitle">Lorem</h2>
                            <ul class="navList">
                                <li>
                                    <a href="#">Ipsum</a>
                                </li>
                                <li>
                                    <a href="#">Ipsum</a>
                                </li>
                                <li>
                                    <a href="#">Alternative Ipsum</a>
                                </li>
                            </ul>
                        </li>
                        <li class="navItem navItem--extra">
                            <h2 class="navTitle">Lorem</h2>
                            <ul class="navList navList--extra">
                                <li>
                                    <a href="#">Ipsum Design</a>
                                </li>
                                <li>
                                    <a href="#">Software Ipsum</a>
                                </li>
                                <li>
                                    <a href="#">Ipsum Lorem</a>
                                </li>
                                <li>
                                    <a href="#">Abdilla</a>
                                </li>
                                <li>
                                    <a href="#">Lorem Ipsum</a>
                                </li>
                            </ul>
                        </li>
                        <li class="navItem">
                            <h2 class="navTitle">Legal</h2>
                            <ul class="navList">
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">Terms of Use</a>
                                </li>
                                <li>
                                    <a href="#">Sitemap</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div class="legal">
                        <p>&copy; 2020. All rights reserved.</p>
                    </div>
                </footer>
            </Fragment>
        )
    }
}

export default Footer
