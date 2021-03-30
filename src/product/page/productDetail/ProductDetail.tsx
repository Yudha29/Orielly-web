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
import {shuffle} from "../../../common/util/collection";
import ProductCard from "../../component/ProductCard";
import {Helmet} from "react-helmet";

const ProductDetail: React.FC<ProductDetailProps> = props => {
    const [quantity, setQuantity] = useState(0);
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
                    <div
                        className="py-4 px-8 border border-gray-100 shadow-md rounded-md bg-white"
                        style={{
                            minHeight: '32rem'
                        }}
                    >
                        {productData ? (
                            <div className="flex p-2">
                                <div className="md:w-5/12">
                                    <div
                                        className="w-96 h-96 bg-gray-300 rounded-sm"
                                        style={{
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundImage: `url(assets/products/${_.get(productData.photos, '[0]')})`
                                        }}
                                    />
                                </div>
                                <div>
                                    <div>
                                        <p className="text-gray-500 text-sm quick-sand mb-0">{productData.merk}</p>
                                        <p className="text-gray-700 font-semibold text-2xl mb-2 quick-sand">{productData.name}</p>
                                        <p className="text-gray-400 text-sm">{getNumberOfSoldStr(productData)} Terjual</p>
                                    </div>
                                    <div className="mt-4 mb-8 flex items-center">
                                        <p className="text-xl line-through text-gray-500 font-light mr-6">
                                            {productData.discount > 0 ? `RP ${numberWithCommas(productData.price)}` : ''}
                                        </p>
                                        <p className="text-2xl orielly-text-primary font-bold">
                                            <span>Rp{numberWithCommas(productData.discount > 0  ? getPriceAfterDiscount(productData) : productData.price)}</span>
                                        </p>
                                    </div>
                                    <div className="border-t border-gray-300 py-8">
                                        <div className="mb-4 flex items-center">
                                            <span className="mr-6 text-sm text-gray-500 font-semibold">
                                                Jumlah
                                            </span>
                                                <QuantityInput
                                                    decrement={() => setQuantity(quantity - 1)}
                                                    increment={() => setQuantity(quantity + 1)}
                                                    quantity={quantity}
                                                />
                                        </div>
                                        <Button className="rounded-md orielly-bg-primary text-white">
                                            <FontAwesomeIcon
                                                className="mr-2"
                                                icon={faShoppingBag}
                                            />
                                            Masukan Tas
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ): (
                            <div className="w-full my-20">
                                <img
                                    className="w-72 mx-auto mb-8"
                                    src="/assets/illustration/ProductNotFound.svg"
                                    alt="empty-cart"
                                />
                                <p className="text-center text-md text-gray-400">Yah tas belanja kamu kosong</p>
                            </div>
                        )}
                    </div>
                </Container>
            </section>
            <section className="my-12">
                <Container>
                    <p className="quick-sand text-2xl orielly-text-primary mb-6 font-bold">
                        Produk lainnya
                    </p>
                    <div className="flex flex-wrap">
                        {shuffle([...props.product.all]).filter((_, i) => i < 6).map(p => (
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