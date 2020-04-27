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
                        <h1>{commonStrings.betdilla} - {commonStrings.companySlogan}</h1>
                        <h2>Contact</h2>
                        <address>
                            5534 Somewhere In. The World 22193-10212
                    </address>
                    </div>
                    <ul class="footerNav">
                        <li class="navItem">
                            <h2 class="navTitle">Media</h2>
                            <ul class="navList">
                                <li>
                                    <a href="#">Online</a>
                                </li>
                                <li>
                                    <a href="#">Print</a>
                                </li>
                                <li>
                                    <a href="#">Alternative Ads</a>
                                </li>
                            </ul>
                        </li>
                        <li class="navItem navItem--extra">
                            <h2 class="navTitle">Technology</h2>
                            <ul class="navList navList--extra">
                                <li>
                                    <a href="#">Hardware Design</a>
                                </li>
                                <li>
                                    <a href="#">Software Design</a>
                                </li>
                                <li>
                                    <a href="#">Digital Signage</a>
                                </li>
                                <li>
                                    <a href="#">Automation</a>
                                </li>
                                <li>
                                    <a href="#">Artificial Intelligence</a>
                                </li>
                                <li>
                                    <a href="#">IoT</a>
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
                        <p>&copy; 2020 Something. All rights reserved.</p>
                    </div>
                </footer>
            </Fragment>
        )
    }
}

export default Footer
