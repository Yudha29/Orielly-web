import React from "react";
import Container from "../../layout/Container";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingBag, faUserCircle} from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
    return (
        <div className="orielly-bg-primary sticky top-0">
            <Container>
                <div className="flex">
                    <div className="py-1.5 text-xs ml-auto text-white">
                        <Link to="/about">
                            <span className="hover:underline">
                                Tentang Kami
                            </span>
                        </Link>
                        <Link to="/contact">
                            <span className="ml-5 hover:underline">
                                Hubungi Kami
                            </span>
                        </Link>
                        <Link to="/signin">
                            <span className="ml-5 hover:underline">
                                Masuk
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="flex pt-4 pb-3 items-center">
                    <p
                        className="quick-sand text-4xl text-white font-bold"
                        style={{
                            top: -70,
                            left: '2rem'
                        }}
                    >
                        O'rielly
                    </p>
                    <div className="mx-auto text-sm flex-1 text-center">
                        <input
                            type="text"
                            className="w-8/12 py-2.5 focus:outline-none px-4 bg-gray-50 rounded-sm"
                            placeholder="Sneakers"
                        />
                    </div>
                    <div className="flex ml-auto">
                        <Link to="/bag">
                            <FontAwesomeIcon
                                className="text-white mr-8"
                                icon={faShoppingBag}
                                size="lg"
                            />
                        </Link>
                        <Link to="/#">
                            <FontAwesomeIcon
                                className="text-white"
                                icon={faUserCircle}
                                size="lg"
                            />
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar;