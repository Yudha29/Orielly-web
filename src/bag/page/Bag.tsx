import React from "react";
import BagProps from "./BagProps";
import {connect} from "react-redux";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {RootState} from "../../redux/contract/RootState";
import Container from "../../common/component/layout/Container";
import Footer from "../../common/component/navigation/footer/Footer";
import Navbar from "../../common/component/navigation/navbar/Navbar";
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import {shuffle} from "../../common/util/collection";
import ProductCard from "../../product/component/ProductCard";
import BagItem from "../component/bagItem/BagItem";
import SummaryCard from "../component/summaryCard/SummaryCard";

class Bag extends React.Component<BagProps> {
    render() {
        const {product, bag} = this.props;
        return (
            <>
                <Navbar />
                <section className="my-8">
                    <Container>
                        <p className="quick-sand text-2xl orielly-text-primary font-bold">
                            <FontAwesomeIcon icon={faShoppingBag} />
                            <span className="ml-2">Tas Belanja</span>
                        </p>
                        <div className="flex mt-6">
                            <div
                                className="w-8/12 py-4 px-8 border border-gray-100 shadow-md bg-white"
                                style={{
                                    minHeight: '32rem'
                                }}
                            >
                                {bag.items.length > 0 ? (
                                    <>
                                        <div className="py-2 text-gray-600 font-semibold">
                                            Isi tas kamu
                                        </div>
                                        {bag.items.map(e => <BagItem itemData={e} />)}
                                    </>
                                ): (
                                    <div className="w-full my-20">
                                        <img
                                            className="w-72 mx-auto mb-8"
                                            src="/assets/illustration/void.svg"
                                            alt="empty-cart"
                                        />
                                        <p className="text-center text-md text-gray-400">Yah tas belanja kamu kosong</p>
                                    </div>
                                )}
                            </div>
                            <div className="w-4/12 px-8">
                                <SummaryCard  />
                            </div>
                        </div>
                    </Container>
                </section>
                <section className="mt-8 mb-12">
                    <Container>
                        <p className="quick-sand text-2xl orielly-text-primary mb-6 font-bold">
                            Rekomendasi
                        </p>
                        <div className="flex flex-wrap">
                            {shuffle([...product.all]).filter((_, i) => i < 6).map(p => (
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
                <section className="mt-8 mb-12">
                  <Container>
                    <p className="quick-sand text-2xl orielly-text-primary mb-6 font-bold">
                      Diskon banyak loh
                    </p>
                    <div className="flex flex-wrap">
                      {shuffle([...product.all])
                        .filter(p => p.discount && p.discount > 0)
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
                <Footer />
            </>
        );
    }
}

const mapStateToProps = ({product, bag}: RootState) => ({product, bag});

export default connect(mapStateToProps, {})(Bag);