import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Container from "../../layout/Container";
import FooterListTitle from "./footerList/FooterListTitle";
import FooterList from "./footerList/FooterList";
import FooterListItem from "./footerList/FooterListItem";
import FooterLink from "./footerLink/FooterLink";
import {faFacebook, faInstagram, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
    return (
        <div className="border-t-4 bg-gray-50 orielly-border-primary text-sm">
            <Container>
                <div className="flex pt-14 pb-16">
                    <div className="w-2/12 pr-2">
                        <FooterListTitle>O'rielly</FooterListTitle>
                        <FooterList>
                            <FooterListItem>
                                <FooterLink to="/about">
                                    Tentang O'rielly
                                </FooterLink>
                            </FooterListItem>
                            <FooterListItem>
                                <FooterLink to="/contact">
                                    Hubungi Kami
                                </FooterLink>
                            </FooterListItem>
                        </FooterList>
                    </div>
                    <div className="w-3/12 pr-2">
                        <FooterListTitle>Panduan</FooterListTitle>
                        <FooterList>
                            <FooterListItem>
                                <FooterLink to="terms">
                                    Syarat dan Ketentuan
                                </FooterLink>
                            </FooterListItem>
                            <FooterListItem>
                                <FooterLink to="/policies">
                                    Kebijakan Privasi
                                </FooterLink>
                            </FooterListItem>
                        </FooterList>
                    </div>
                    <div className="w-2/12 pr-2">
                        <FooterListTitle>Ikuti Kami</FooterListTitle>
                        <FooterList>
                            <FooterListItem>
                                <FooterLink to="#">
                                    <FontAwesomeIcon
                                        className="mr-2"
                                        size="lg"
                                        icon={faInstagram}
                                    />
                                    Instagram
                                </FooterLink>
                            </FooterListItem>
                            <FooterListItem>
                                <FooterLink to="#">
                                    <FontAwesomeIcon
                                        className="mr-2"
                                        size="lg"
                                        icon={faTwitter}
                                    />
                                    Twitter
                                </FooterLink>
                            </FooterListItem>
                            <FooterListItem>
                                <FooterLink to="#">
                                    <FontAwesomeIcon
                                        className="mr-2"
                                        size="lg"
                                        icon={faFacebook}
                                    />
                                    Facebook
                                </FooterLink>
                            </FooterListItem>
                            <FooterListItem>
                                <FooterLink to="#">
                                    <FontAwesomeIcon
                                        className="mr-2"
                                        size="lg"
                                        icon={faLinkedinIn}
                                    />
                                    Linkedin
                                </FooterLink>
                            </FooterListItem>
                        </FooterList>
                    </div>
                    <div className="w-5/12 text-gray-500">
                        <img
                          className="w-36 mb-4"
                          src="/assets/logo-light.png"
                          alt="logo"
                        />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Footer;