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
              <p>
                Orielly adalah E-Commerce yang menjual berbagai jenis busana seperti sepatu, kemeja, kacamata dan lainnya dari berbagai merk-merk dan dengan jaminan busana-busana yang kami jual 100% adalah original
              </p>
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