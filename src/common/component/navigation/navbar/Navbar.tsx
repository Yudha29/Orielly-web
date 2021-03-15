import React from "react";
import Container from "../../layout/Container";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingBag, faUserCircle} from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
    return (
        <div className="orielly-bg-primary">
            <Container>
                <div className="flex">
                    <div className="py-1 text-xs ml-auto text-white">
                        <Link to="/about">
                            <span className="mr-5 hover:underline">
                                Tentang Kami
                            </span>
                        </Link>
                        <Link to="/help">
                            <span className="hover:underline">
                                Bantuan
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="flex pb-4 pt-2 items-center">
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
                            className="w-9/12 py-2.5 focus:outline-none px-4 bg-gray-50 rounded-md"
                            placeholder="Sneakers"
                        />
                    </div>
                    <div className="flex ml-auto">
                        <FontAwesomeIcon
                            className="text-white mr-8"
                            icon={faShoppingBag}
                            size="lg"
                        />
                        <FontAwesomeIcon
                            className="text-white"
                            icon={faUserCircle}
                            size="lg"
                        />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar;