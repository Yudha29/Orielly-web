import React from 'react';
import Navbar from "../component/navigation/navbar/Navbar";
import Footer from "../component/navigation/footer/Footer";
import Container from "../component/layout/Container";
import {Helmet} from "react-helmet";

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Tentang Orielly</title>
      </Helmet>
      <Navbar />
      <section className="my-8">
        <Container>
          <div className="flex mb-32">
            <div className="w-5/12 flex justify-center items-center">
              <img
                src="/assets/logo-light.png"
                alt="logo"
              />
            </div>
            <div className="w-7/12 text-gray-600">
              <p className="quick-sand text-xl orielly-text-primary font-bold my-4">
                Tentang kami
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
          <div className="mb-32">
            <p className="quick-sand text-center text-xl orielly-text-primary font-bold my-12">
              Mengapa Kami
            </p>
            <div className="flex">
              <div className="w-1/3">
                <img className="w-6/12 mx-auto mb-16" src="/assets/illustration/Secure.svg" alt="Secure" />
                <p className="font-bold text-gray-500 text-center">Aman</p>
              </div>
              <div className="w-1/3">
                <img className="w-6/12 mx-auto mb-16" src="/assets/illustration/Time.svg" alt="Speed" />
                <p className="font-bold text-gray-500 text-center">Tepat waktu</p>
              </div>
              <div className="w-1/3">
                <img className="w-6/12 mx-auto mb-16" src="/assets/illustration/World.svg" alt="World-wide" />
                <p className="font-bold text-gray-500 text-center">Pengiriman dimana saja</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  )
}

export default About;