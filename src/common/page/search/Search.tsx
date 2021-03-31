import React from "react";
import SearchProps from "./SearchProps";
import Navbar from "../../component/navigation/navbar/Navbar";
import Footer from "../../component/navigation/footer/Footer";
import Container from "../../component/layout/Container";
import ProductCard from "../../../product/component/ProductCard";
import {RootState} from "../../../redux/contract/RootState";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import ProductDocument from "../../../product/state/contract/ProductDocument";
import CheckBox from "../../component/form/input/checkbox/CheckBox";
import {CheckBoxEvent} from "../../component/form/input/checkbox/CheckBoxEvent";
import SearchState from "./SearchState";

class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      labels: []
    }
    this.onCheck = this.onCheck.bind(this);
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const label = query.get('label');
    if (label)
      this.setState({
        labels: [label]
      });
  }

  onCheck: CheckBoxEvent = ev => {
    this.setState(state => ({
      labels: ev.checked ? (
        [...state.labels, ev.name]
      ) : state.labels.filter(e => e !== ev.name)
    }))
  }

  filter(products: ProductDocument[]) {
    const query = new URLSearchParams(this.props.location.search);
    const keyword = query.get('q') || '';
    return products
      .filter(p => {
        const labelStatus = this.state.labels.map(l => {
          let status = false;
          if (l === 'inDemand') {
            status = p.numOfSold > 1000;
          }
          if (l === 'discount') {
            status = p.discount > 0;
          }
          return status;
        })

        return labelStatus.every(l => l);
      })
      .filter(p => {
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
    const shuffledProducts = product.all;
    const filteredProducts = this.filter(shuffledProducts);
    const query = new URLSearchParams(this.props.location.search);
    const keyword = query.get('q') || '';
    return (
      <>
        <Navbar />
        <section className="mt-8 mb-12">
          <Container>
            <div className="flex">
              <div className="w-3/12">
                <span className="quick-sand text-lg text-gray-600 font-semibold">
                  Filter Produk
                </span>
                <div>
                  <p className="text-gray-500 mt-6 mb-3 font-bold text-sm quick-sand">Pilih label</p>
                  <CheckBox
                    checked={this.state.labels.indexOf('discount') > -1}
                    onClick={this.onCheck}
                    name="discount"
                  >
                    Diskon terbatas
                  </CheckBox>
                  <CheckBox
                    checked={this.state.labels.indexOf('inDemand') > -1}
                    onClick={this.onCheck}
                    name="inDemand"
                  >
                    Paling laris
                  </CheckBox>
                </div>
              </div>
                <div className="w-9/12">
                  {keyword ? (
                    <>
                      <p className="text-sm text-gray-600 mb-2">
                        <span>Menampilkan pencarian untuk:</span>
                        <span className="font-bold ml-2">{keyword}</span>
                      </p>
                      <hr />
                    </>
                  ) : null}
                  <div className="flex flex-wrap mt-4">
                    {filteredProducts.map(p => (
                      <div
                        key={p.id}
                        className="md:w-3/12 p-1"
                      >
                        <ProductCard data={p}/>
                      </div>
                    ))}
                  </div>
                </div>
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