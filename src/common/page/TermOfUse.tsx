import React from "react";
import Navbar from "../component/navigation/navbar/Navbar";
import Footer from "../component/navigation/footer/Footer";
import Container from "../component/layout/Container";
import {Helmet} from "react-helmet";

const TermOfUse: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Syarat dan Ketentuan</title>
      </Helmet>
      <Navbar />
      <section className="my-8 text-gray-600">
        <Container>
          <div style={{lineHeight: 1.5}}>
            <p className="quick-sand text-2xl orielly-text-primary font-bold my-4">
              Syarat dan Ketentuan
            </p>
            <p className="quick-sand text-xl orielly-text-primary my-6 font-bold my-4">
              Ketentuan Umum
            </p>
            <ul className="list-disc py-2 pl-8">
              <li className="my-2">
                Dengan menggunakan, berbelanja dan/atau mendaftarkan diri Anda di Orielly Store, berarti Anda setuju untuk terikat dan patuh pada syarat dan ketentuan yang berlaku.
              </li>
              <li className="my-2">
                Syarat dan ketentuan ini dapat berubah sewaktu-waktu dan kami tidak berkewajiban untuk memberitahukannya kepada Anda.
              </li>
              <li className="my-2">
                Syarat dan ketentuan ini kami buat untuk kepentingan bersama, untuk menjaga hak dan kewajiban masing-masing pihak, dan tidak dimaksudkan untuk merugikan salah satu pihak.
              </li>
            </ul>
            <p className="quick-sand text-xl orielly-text-primary my-6 font-bold my-4">
              Informasi Produk
            </p>
            <ul className="list-disc py-2 pl-8">
              <li className="my-2">
                Dengan melakukan transaksi pemesanan secara online di Orielly Store, Anda kami anggap telah mengerti informasi produk yang akan Anda beli.
              </li>
              <li className="my-2">
                Informasi produk kami peroleh secara resmi dari katalog produk, official website, brosur, maupun informasi pendukung lainnya dari pihak penerbit
              </li>
              <li className="my-2">
                Perbedaan warna dalam foto/gambar produk yang kami tampilkan di Orielly Store bisa diakibatkan oleh faktor pencahayaan dan setting/resolusi monitor komputer, dan karena itu tidak dapat dijadikan acuan.
              </li>
              <li className="my-2">
                Harga produk dalam situs ini adalah benar pada saat dicantumkan.Harga yang tercantum adalah harga produk semata, tidak termasuk ongkos kirim. Ongkos kirim dihitung otomatis (berdasarkan harga dari jasa ekspedisi) sesuai dengan alamat pengiriman yang Anda berikan pada saat transaksi pemesanan.
              </li>
            </ul>
            <p className="quick-sand text-xl orielly-text-primary my-6 font-bold my-4">
              Pemesanan dan Pembatalan
            </p>
            <ul className="list-disc py-2 pl-8">
              <li className="my-2">
                Pemesanan bisa Anda lakukan untuk tujuan pengiriman ke seluruh wilayah yang terlayani oleh pihak jasa ekspedisi yang kami tunjuk. Untuk mempercepat proses pemesanan, silakan konfirmasi ke Customer Service kami setelah Anda melakukan pemesanan.
              </li>
              <li className="my-2">
                Keterangan mengenai produk dan cara belanja di Orielly Store kami anggap telah Anda pelajari terlebih dahulu.
              </li>
              <li className="my-2">
                Kami meng-update informasi produk setiap awal pekan. Tetapi, jika ada kesalahan teknis yang menyebabkan harga, stok, atau informasi lainnya menjadi tidak benar dan Anda terlanjur melakukan pemesanan, maka kami akan menginformasikan dan memberi pilihan kepada Anda untuk tetap memesan produk tersebut atau membatalkannya.
              </li>
              <li className="my-2">
                Harga produk dalam situs ini adalah benar pada saat dicantumkan.Harga yang tercantum adalah harga produk semata, tidak termasuk ongkos kirim. Ongkos kirim dihitung otomatis (berdasarkan harga dari jasa ekspedisi) sesuai dengan alamat pengiriman yang Anda berikan pada saat transaksi pemesanan.
              </li>
              <li className="my-2">
                Kami memberikan batas waktu pembayaran selama 2x24 jam sejak Anda menyelesaikan transaksi pembelian. Apabila Anda belum melakukan pembayaran setelah batas waktu tersebut, maka kami dapat membatalkan pesanan Anda.
              </li>
              <li className="my-2">
                Pembatalan pesanan dapat Anda lakukan sebelum pembayaran. Jika Anda telah melakukan pembayaran, pesanan tidak dapat Anda batalkan; Anda hanya diperbolehkan melakukan penukaran pesanan dengan produk lain sesuai jumlah pembayaran yang Anda tunaikan. Penukaran pesanan akan diproses melalui transaksi offline. Silakan hubungi Customer Service kami melalui telepon atau email.
              </li>
            </ul>
            <p className="quick-sand text-xl orielly-text-primary my-6 font-bold my-4">
              Informasi Produk
            </p>
            <ul className="list-disc py-2 pl-8">
              <li className="my-2">
                Dengan melakukan transaksi pemesanan secara online di Orielly Store, Anda kami anggap telah mengerti informasi produk yang akan Anda beli.
              </li>
              <li className="my-2">
                Informasi produk kami peroleh secara resmi dari katalog produk, official website, brosur, maupun informasi pendukung lainnya dari pihak penerbit
              </li>
              <li className="my-2">
                Perbedaan warna dalam foto/gambar produk yang kami tampilkan di Orielly Store bisa diakibatkan oleh faktor pencahayaan dan setting/resolusi monitor komputer, dan karena itu tidak dapat dijadikan acuan.
              </li>
              <li className="my-2">
                Harga produk dalam situs ini adalah benar pada saat dicantumkan.Harga yang tercantum adalah harga produk semata, tidak termasuk ongkos kirim. Ongkos kirim dihitung otomatis (berdasarkan harga dari jasa ekspedisi) sesuai dengan alamat pengiriman yang Anda berikan pada saat transaksi pemesanan.
              </li>
            </ul>
            <p className="quick-sand text-xl orielly-text-primary my-6 font-bold my-4">
              Pengiriman
            </p>
            <ul className="list-disc py-2 pl-8">
              <li className="my-2">
                Pesanan Anda akan kami kirim segera setelah pembayaran lunas. Status pengiriman/nomor resi akan kami informasikan melalui fitur “Akun Saya” di Orielly Store. Jika diperlukan, nomor resi pengiriman dapat kami informasikan melalui data kontak Anda (email/SMS).
              </li>
              <li className="my-2">
                Pesanan Anda akan kami kirim ke alamat yang Anda berikan saat transaksi pemesanan.
              </li>
              <li className="my-2">
                Kesalahan Anda dalam memberikan alamat pengiriman sehingga menyebabkan paket kiriman tidak sampai atau tidak Anda terima bukan tanggung jawab kami.
              </li>
              <li className="my-2">
                Pengiriman dilakukan oleh pihak jasa ekspedisi yang kami tunjuk sebagaimana telah kami tampilkan saat Anda melakukan transaksi pemesanan. Biaya pengiriman ditanggung oleh pembeli.
              </li>
              <li className="my-2">
                Lama waktu pengiriman menyesuaikan paket ekspedisi yang Anda pilih saat transaksi pemesanan. Jaminan kepastian waktu pengiriman sepenuhnya menjadi tanggung jawab pihak jasa ekspedisi. Konpensasi atas keterlambatan dan atau kehilangan barang sepenuhnya tunduk pada peraturan pihak jasa ekspedisi.
              </li>
              <li className="my-2">
                Anda dapat memantau status pengiriman melalui layanan “tracking” pada website dan Call Center pihak jasa ekspedisi yang bersangkutan. Anda juga dapat meminta bantuan kami untuk mengetahui status pengiriman pesanan Anda.
              </li>
              <li className="my-2">
                Setelah paket kiriman Anda terima, segera konfirmasikan kepada kami melalui layanan “Hubungi Kami” atau informasi kontak kami (telp/email) yang tersedia di Orielly Store. Apabila Anda tidak melakukan konfirmasi penerimaan barang setelah 7 (tujuh) hari dari batas waktu perkiraan kiriman sampai di tujuan, maka kami anggap kiriman tersebut telah Anda terima.
              </li>
            </ul>
            <p className="quick-sand text-xl orielly-text-primary my-6 font-bold my-4">
              Retur Produk
            </p>
            <ul className="list-disc py-2 pl-8">
              <li className="my-2">
                Kami pastikan pesanan Anda telah kami cek ulang sesuai data pesanan serta kami kemas dengan baik sebelum kami kirim. Pada saat menerima paket kiriman, Anda wajib melakukan pengecekan terhadap kondisi produk.
              </li>
              <li className="my-2">
                Jika produk yang Anda terima tidak sesuai data pesanan atau terdapat cacat produksi, maka produk tersebut dapat ditukarkan dengan produk yang sama kepada kami.
              </li>
              <li className="my-2">
                Biaya pengiriman/pengembalian produk tidak sesuai pesanan atau cacat produksi kepada kami ditanggung oleh pembeli, sedangkan biaya pengiriman produk pengganti kepada Anda ditanggung oleh kami.
              </li>
              <li className="my-2">
                Pemberitahuan penerimaan produk tidak sesuai pesanan atau cacat produksi kami layani paling lambat 3 (tiga) hari sejak produk Anda terima. Jika dalam batas waktu tersebut tidak ada pemberitahuan, maka produk yang kami kirimkan dianggap telah sesuai dengan data pesanan Anda dan tidak cacat produksi.
              </li>
              <li className="my-2">
                Produk pengganti akan kami kirimkan kepada Anda segera setelah kami menerima dan memverivikasi pengembalian produk tidak sesuai pesanan atau cacat produksi dari Anda. Cantumkan keterangan mengenai produk yang Anda kirimkan kembali kepada kami untuk memudahkan kami melakukan verifikasi.
              </li>
              <li className="my-2">
                Jika stok produk pengganti tidak tersedia di gudang, kami akan mengirimkannya setelah stok produk kembali tersedia. Dan jika stok produk pengganti telah habis, Anda dapat menukarnya dengan produk lain yang harganya sama (atau setara) atau Anda dapat meminta pengembalian uang sesuai jumlah yang telah Anda bayarkan kepada kami.
              </li>
              <li className="my-2">
                Produk yang Anda beli di luar Orielly Store tidak dapat dikembalikan/ditukarkan kepada kami.
              </li>
            </ul>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  )
}

export default TermOfUse;