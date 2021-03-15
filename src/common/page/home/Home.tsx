import React from "react";
import Navbar from "../../component/navigation/navbar/Navbar";
import Container from "../../component/layout/Container";
import HomeProps from "./HomeProps";

class Home extends React.Component<HomeProps> {
    render() {
        return (
            <>
                <Navbar />
                <section className="mt-8 mb-12">
                    <Container>
                        <div className="h-72 bg-gray-400 rounded-md"/>
                    </Container>
                </section>
            </>
        );
    }
}

export default Home;