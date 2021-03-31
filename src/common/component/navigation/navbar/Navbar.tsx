import React, {useState} from "react";
import Container from "../../layout/Container";
import {Link, RouteComponentProps, withRouter} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faShoppingBag, faUserCircle} from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC<RouteComponentProps> = props => {
  const query = new URLSearchParams(props.location.search);
  const queryKeyword = query.get('q') || '';
  const [keyword, setKeyword] = useState(queryKeyword);

  function search(e: React.FormEvent) {
    e.preventDefault();
    props.history.push(`/search?q=${keyword}`);
  }

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
          <Link to="/">
            <img
              className="w-36 -mt-5"
              src="/assets/logo-dark.png"
              alt="logo"
            />
          </Link>
          <div className="mx-auto text-sm flex-1 text-center">
            <form
              className="relative w-8/12 mx-auto"
              onSubmit={search}
            >
              <input
                type="text"
                className="w-full py-2.5 focus:outline-none px-4 bg-gray-50 rounded-sm"
                name="q"
                placeholder="Sneakers"
                value={keyword}
                onChange={(e) => {
                  setKeyword(e.target.value);
                }}
              />
              <div
                className="absolute"
                style={{
                  top: 4,
                  right: 5
                }}
              >
                <button
                  type="submit"
                  className="orielly-bg-primary focus:outline-none py-1.5 px-2 text-white rounded-sm"
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </form>
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

export default withRouter(Navbar);