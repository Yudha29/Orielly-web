import React from 'react';
import Footer from "../component/navigation/footer/Footer";
import Navbar from "../component/navigation/navbar/Navbar";
import {Form, Formik} from "formik";
import TextInput from "../component/form/formik/textInput/TextInput";
import TextArea from "../component/form/formik/textArea/TextArea";
import Button from "../component/button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faMapMarked, faPaperPlane, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import * as Yup from "yup";
import Container from "../component/layout/Container";
import {Helmet} from "react-helmet";
import swal from 'sweetalert';

const Contact: React.FC = () => {
  const initVal = {email: '', name: '', message: ''}
  const validSchema = Yup.object({
    name: Yup.string().required('Name harus diisi'),
    email: Yup.string().email('Email is invalid').required('Email harus diisi'),
    message: Yup.string().required('Pesan harus diisi')
  });
  return (
    <>
      <Helmet>
        <title>Kontak Kami</title>
      </Helmet>
      <Navbar />
      <section id="contact" className="mb-32">
         <Container>
           <p className="quick-sand text-center text-xl orielly-text-primary font-bold my-12">
             Hubungi Kami
           </p>
           <div className="flex">
             <div className="w-5/12 pr-8 border-r-2 border-gray-400">
               <Formik
                 initialValues={initVal}
                 validationSchema={validSchema}
                 onSubmit={(values) => swal({
                   icon: 'success',
                   text: `Terima kasih ${values.name}, pesan anda telah terkirim`
                 })}
               >
                 <Form>
                   <TextInput
                     name="name"
                     label="Nama"
                     placeholder="Masukan nama"
                   />
                   <TextInput
                     name="email"
                     label="Email"
                     placeholder="Masukan Email"
                   />
                     <TextArea
                       name="message"
                       placeholder="Masukan pesan"
                       label="Pesan"
                     />
                   <div className="flex items-center mb-8">
                     <Button
                       type="submit"
                       className="orielly-bg-primary text-white rounded-md"
                     >
                       <FontAwesomeIcon icon={faPaperPlane}/>
                       <span className="ml-2 text-sm">Kirim</span>
                     </Button>
                   </div>
                 </Form>
               </Formik>
             </div>
             <div className="w-7/12 text-gray-600 pl-8">
               <ul>
                 <li className="flex items-center">
                   <div className="w-10 my-3">
                     <FontAwesomeIcon
                       size="lg"
                       icon={faMapMarked}
                     />
                   </div>
                   <span>Jl. New Terbaru paling baru No -1 Sebelah kawah Hellas, Planet Mars</span>
                 </li>
                 <li className="flex items-center">
                   <div className="w-10 my-3">
                     <FontAwesomeIcon
                       size="lg"
                       icon={faPhoneAlt}
                     />
                   </div>
                   <span>-62 6390-6390-6390</span>
                 </li>
                 <li className="flex items-center">
                   <div className="w-10 my-3">
                     <FontAwesomeIcon
                       size="lg"
                       icon={faEnvelope}
                     />
                   </div>
                   <span>cs@orielly.com</span>
                 </li>
               </ul>
             </div>
           </div>
         </Container>
      </section>
      <Footer />
    </>
  )
}

export default Contact;