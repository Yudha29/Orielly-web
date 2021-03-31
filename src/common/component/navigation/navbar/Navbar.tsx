import React, {useState} from "react";
import {connect} from 'react-redux';
import Container from "../../layout/Container";
import {Link, withRouter} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import {RootState} from "../../../../redux/contract/RootState";
import NavbarProps from "./NavbarProps";

const Navbar: React.FC<NavbarProps> = props => {
  const query = new URLSearchParams(props.location.search);
  const queryKeyword = query.get('q') || '';
  const [keyword, setKeyword] = useState(queryKeyword);

  function search(e: React.FormEvent) {
    e.preventDefault();
    props.history.push(`/search?q=${keyword}`);
  }

  return (
    <div className="orielly-bg-primary sticky top-0 z-50">
      <Container>
        <div className="flex">
          <div className="pt-1.5 pb-0 text-xs ml-auto text-white">
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
              <div className="flex">
                {props.category.all
                  .filter((e, i) => i < 6)
                  .map(e => (
                    <div className="mt-1">
                      <Link to={`/search?category=${e.name}`}>
                        <span className="mr-4 text-xs text-gray-100 hover:underline">{e.name}</span>
                      </Link>
                    </div>
                  ))}
              </div>
            </form>
          </div>
          <div className="flex ml-auto">
            <Link to="/bag">
              <FontAwesomeIcon
                className="text-white"
                icon={faShoppingBag}
                size="2x"
              />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

const mapStateToProps = ({category}: RootState) => ({category});
const dispatchMap = {};

export default connect(mapStateToProps, dispatchMap)(withRouter(Navbar));