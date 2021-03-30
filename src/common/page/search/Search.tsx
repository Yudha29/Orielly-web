import React from "react";
import SearchProps from "./SearchProps";
import Navbar from "../../component/navigation/navbar/Navbar";
import Footer from "../../component/navigation/footer/Footer";
import Container from "../../component/layout/Container";
import {shuffle} from "../../util/collection";
import ProductCard from "../../../product/component/ProductCard";
import {RootState} from "../../../redux/contract/RootState";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import ProductDocument from "../../../product/state/contract/ProductDocument";

class Search extends React.Component<SearchProps> {
  filter(products: ProductDocument[]) {
    const query = new URLSearchParams(this.props.location.search);
    const keyword = query.get('q') || '';
    return products.filter(p => {
      return `
        ${p.name.toLowerCase()} 
        ${p.categories.join(' ').toLowerCase()} 
        ${p.merk.toLowerCase()}`
        .indexOf(
          keyword.toLowerCase()
        ) > -1
    });
  }

  render() {
    const {product} = this.props;
    const shuffledProducts = shuffle([...product.all]);
    const filteredProducts = this.filter(shuffledProducts);
    const query = new URLSearchParams(this.props.location.search);
    const keyword = query.get('q') || '';
    return (
      <>
        <Navbar />
        <section className="mt-8 mb-12">
          <Container>
            <p className="text-sm text-gray-600 mb-2">
              <span>Menampilkan hasil untuk:</span>
              <span className="font-bold ml-2">{keyword}</span>
            </p>
            <hr />
            <div className="flex flex-wrap mt-4">
              {filteredProducts.map(p => (
                <div
                  key={p.id}
                  className="md:w-2/12 p-1"
                >
                  <ProductCard data={p}/>
                </div>
              ))}
            </div>
          </Container>
        </section>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = ({product}: RootState) => ({product});

export default connect(mapStateToProps, {})(withRouter(Search));