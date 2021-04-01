import React from "react";
import {connect} from 'react-redux';
import Navbar from "../../component/navigation/navbar/Navbar";
import Container from "../../component/layout/Container";
import {RootState} from "../../../redux/contract/RootState";
import HomeProps from "./HomeProps";
import CategoryCard from "../../../category/component/CategoryCard";
import ProductCard from "../../../product/component/ProductCard";
import Footer from "../../component/navigation/footer/Footer";
import {shuffle} from "../../util/collection";
import HeaderProducts from "../../../product/component/headerProducts/HeaderProducts";
import {Helmet} from "react-helmet";

class Home extends React.Component<HomeProps> {
  render() {
    const {category, product} = this.props;
    return (
      <>
        <Helmet>
          <title>O'rielly | Grab your fashion</title>
        </Helmet>
        <Navbar />
        <section className="mt-8 mb-12">
          <Container>
            <div
              className="h-96 bg-gray-400 rounded-md bg-img "
              style={{
                backgroundImage: 'url(assets/illustration/Banner.jpg)'
              }}
            />
          </Container>
        </section>
        <section className="mt-8 mb-12">
          <Container>
            <p className="quick-sand text-2xl orielly-text-primary mb-6 font-bold">
              Cari kategori apa?
            </p>
            <div className="flex flex-wrap">
              {category.all.map(c => <CategoryCard
                key={c.id}
                data={c}
              />)}
            </div>
          </Container>
        </section>
        <section className="mt-8 mb-12">
          <Container>
            <HeaderProducts
              title="Diskon nih"
              to="/search?label=discount"
            />
            <div className="flex">
              <div
                className="bg-gray-400 md:w-6/12 m-1 rounded-md bg-img"
                style={{
                  backgroundImage: 'url(assets/illustration/Discount.jpg)'
                }}
              />
              <div className="flex flex-wrap w-6/12">
                {shuffle([...product.all]).filter(p => p.discount && p.discount > 0).filter((p, i) => i < 6).map(p => (
                  <div
                    key={p.id}
                    className="md:w-2/6 p-1"
                  >
                    <ProductCard data={p}/>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
        <section className="mt-8 mb-12">
          <Container>
            <HeaderProducts
              title="Paling Populer"
              to="/search?label=inDemand"
            />
            <div className="flex flex-wrap">
              {shuffle([...product.all]).filter(e => e.numOfSold > 1000).filter((p, i) => i < 12).map(p => (
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
            <HeaderProducts
              title="Rekomendasi"
              to="/search"
            />
            <div className="flex flex-wrap">
              {shuffle([...product.all]).filter((p, i) => i < 12).map(p => (
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

const mapStateToProps = ({category, product}: RootState) => ({category, product});

export default connect(mapStateToProps, {})(Home);