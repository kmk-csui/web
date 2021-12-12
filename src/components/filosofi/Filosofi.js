import React from 'react';
import logo from '../../assets/big-logo.png';
import './Filosofi.css';

export default function Filosofi() {
  return (
    <div>
      <div className="header-background">
        <h1 className="header">Filosofi Logo</h1>
      </div>
      <div className="indent">
        <img src={logo} alt="Big KMK Logo" width={200} />
        <p>
          Salib merupakan salah satu elemen penting dari agama Katolik yang melambangkan pengorbanan Yesus Kristus
          untuk menebus dosa umat manusia. Salib yang dibuat dengan dasar sirkuit dimaksudkan untuk merepresentasikan
          keluarga mahasiswa katolik dari Fakultas Ilmu Komputer sebab salah satu elemen pembangun komputer adalah
          sirkuit.
        </p>
      </div>
      <p>
        Merpati merupakan lambang dari turunnya Roh Kudus. Adanya merpati dalam logo KMK Fasilkom UI melambangkan
        harapan KMK Fasilkom UI untuk senantiasa diberkati Tuhan serta dalam perlindungan Roh Kudus baik dalam kegiatan
        KMK maupun aktivitas sehari-hari. Selain itu, sinar yang berasal dari balik Salib melambangkan harapan KMK untuk
        menjadi terang dunia seperti yang tertulis dalam Kitab Suci.
      </p>
    </div>
  )
}