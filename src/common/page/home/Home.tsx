import React from "react";
import {connect} from 'react-redux';
import Navbar from "../../component/navigation/navbar/Navbar";
import Container from "../../component/layout/Container";
import {RootState} from "../../../redux/contract/RootState";
import HomeProps from "./HomeProps";
import CategoryCard from "../../../category/component/CategoryCard";

class Home extends React.Component<HomeProps> {
    render() {
        const {category} = this.props;
        return (
            <>
                <Navbar />
                <section className="mt-8 mb-12">
                    <Container>
                        <div className="h-72 bg-gray-400 rounded-md"/>
                    </Container>
                </section>
                <section className="mt-8 mb-12">
                    <Container>
                        <p className="quick-sand text-2xl orielly-text-primary mb-6 font-bold">
                            Cari kategori apa?
                        </p>
                        <div className="flex flex-wrap">
                            {category.all.map(c => <CategoryCard data={c} />)}
                        </div>
                    </Container>
                </section>
            </>
        );
    }
}

const mapStateToProps = ({category}: RootState) => ({category});

export default connect(mapStateToProps, {})(Home);