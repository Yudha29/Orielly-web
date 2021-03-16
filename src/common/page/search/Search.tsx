import React from "react";
import SearchProps from "./SearchProps";
import Navbar from "../../component/navigation/navbar/Navbar";
import Footer from "../../component/navigation/footer/Footer";
import Container from "../../component/layout/Container";
import {shuffle} from "../../util/collection";
import ProductCard from "../../../product/component/ProductCard";
import {RootState} from "../../../redux/contract/RootState";
import {connect} from "react-redux";

class Search extends React.Component<SearchProps> {
    render() {
        const {product} = this.props;
        return (
            <>
                <Navbar />
                <section className="mt-8 mb-12">
                    <Container>
                        <p className="text-sm text-gray-600 mb-2">
                            Menampilkan hasil untuk: Tas
                        </p>
                        <hr />
                        <div className="flex flex-wrap mt-4">
                            {shuffle([...product.all]).map(p => (
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

export default connect(mapStateToProps, {})(Search);