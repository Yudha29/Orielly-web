import React, {useState} from "react";
import {ProductDetailProps} from "./ProductDetailProps";
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {RootState} from "../../../redux/contract/RootState";
import Navbar from "../../../common/component/navigation/navbar/Navbar";
import Footer from "../../../common/component/navigation/footer/Footer";
import Container from "../../../common/component/layout/Container";
import {getUnitLevel, getUnitName, numberWithCommas} from "../../../common/util/numberUtil";
import ProductDocument from "../../state/contract/ProductDocument";
import Button from "../../../common/component/button/Button";
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import QuantityInput from "../../../bag/component/quantityInput/QuantityInput";
import _ from "lodash";
import ProductCard from "../../component/ProductCard";
import {Helmet} from "react-helmet";
import HeaderProducts from "../../component/headerProducts/HeaderProducts";

const ProductDetail: React.FC<ProductDetailProps> = props => {
  const [quantity, setQuantity] = useState(1);
  const id = props.match.params.id;
  const productData = props.product.all.find(e => e.id === id) || null;
  const getPriceAfterDiscount = (productDocument: ProductDocument) => {
    const {price, discount} = productDocument;
    return Math.round(price - price * discount);
  }
  const getNumberOfSoldStr = (productDocument: ProductDocument) => {
    const {numOfSold} = productDocument
    const unitLevel = getUnitLevel(numOfSold);
    const numOfSoldDigits = typeof numOfSold === 'number' ? String(Math.floor(numOfSold/Math.pow(1000, unitLevel))).length : 0;
    const hasValidDigits = numOfSoldDigits > 0;
    const numOfSoldStr = hasValidDigits ? String(numOfSold).substr(0, numOfSoldDigits) : String(numOfSold);
    return `${numOfSoldStr}${getUnitName(numOfSold)}`
  }
  return (
    <>
      <Helmet>
        <title>{productData?.name}</title>
      </Helmet>
      <Navbar />
      <section className="my-8">
        <Container>
          <div>
            {productData ? (
              <div className="flex items-start">
                <div className="flex w-9/12 p-4 border-gray-100 shadow-md rounded-md bg-white mr-4">
                  <div className="w-5/12">
                    <div
                      className="h-72 rounded-sm"
                      style={{
                        backgroundPosition: 'center',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: `url(assets/products/${_.get(productData.photos, '[0]')})`
                      }}
                    />
                  </div>
                  <div className="w-7/12 ml-4">
                    <div>
                      <p className="text-gray-500 text-sm quick-sand mb-0">{productData.merk}</p>
                      <p className="text-gray-700 font-semibold text-2xl mb-2 quick-sand">{productData.name}</p>
                      <p className="text-gray-400 text-sm">{getNumberOfSoldStr(productData)} Terjual</p>
                    </div>
                    <div className="mt-4 mb-4">
                      {productData.discount > 0 ? (
                        <p className="text-md mb-1 line-through text-gray-500 font-light mr-6">
                          { `RP ${numberWithCommas(productData.price)}`}
                        </p>
                      ) : null}
                      <p className="text-2xl orielly-text-primary font-bold">
                        <span>Rp{numberWithCommas(productData.discount > 0  ? getPriceAfterDiscount(productData) : productData.price)}</span>
                      </p>
                    </div>
                    <div
                      className="mb-8 mt-2 text-sm text-gray-600"
                      dangerouslySetInnerHTML={{
                      __html: productData.description
                      }}
                    />
                  </div>
                </div>
                <div className="border-gray-100 shadow-md w-3/12 rounded-md bg-white mr-4 p-4">
                  <p className="text-gray-500 mb-4 font-bold text-lg quick-sand">Atur jumlah</p>
                  <div className="mb-4 flex items-center">
                    <span className="mr-6 text-sm text-gray-500 font-semibold">
                      Jumlah
                    </span>
                    <div className="ml-auto">
                      <QuantityInput
                        decrement={() => setQuantity(quantity - 1)}
                        increment={() => setQuantity(quantity + 1)}
                        quantity={quantity}
                      />
                    </div>
                  </div>
                  <hr />
                  <div className="flex my-3">
                    <span className="text-gray-500">Total</span>
                    <span className="orielly-text-primary ml-auto font-bold">
                      Rp{numberWithCommas((productData.discount > 0  ? getPriceAfterDiscount(productData) : productData.price) * quantity)}
                    </span>
                  </div>
                  <Button className="rounded-md orielly-bg-primary text-white  w-full">
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={faShoppingBag}
                    />
                    Masukan Tas
                  </Button>
                </div>
              </div>
            ):null}
          </div>
        </Container>
      </section>
      {productData ? (
        <section className="my-12">
          <Container>
            <HeaderProducts
              title="Produk Serupa"
              to={`/search?category=${productData.categories[0]}`}
            />
            <div className="flex flex-wrap">
              {props.product.all
                .filter(p => p.categories.some(e => productData?.categories.indexOf(e) > -1))
                .filter((_, i) => i < 6)
                .map(p => (
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
      ) : null}
      <section className="mt-8 mb-12">
        <Container>
          <HeaderProducts
            title="Rekomendasi"
            to="/search"
          />
          <div className="flex flex-wrap">
            {props.product.all.filter((p, i) => i < 6).map(p => (
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
  )
}
const mapStateToProps = ({product}: RootState) => ({product});
export default connect(mapStateToProps, {})(withRouter(ProductDetail));