import ACARA from "assets/division/acara.png";
import HPDD from "assets/division/hpdd.png";
import ITA from "assets/division/ita.png";
import PSDM from "assets/division/psdm.png";
import Divider from "components/Divider/Divider";
import Division from "components/Division/Division";
import Header from "components/Header/Header";
import "./DivisionPage.css";
import CoreDivision from "components/Division/CoreDivision";

export default function DivisionPage() {
  return (
    <>
      <Header headerTitle="Divisi KMK Fasilkom UI 2021"/>
      <div className="DivisionPage">
        <div className="MemberList">
          <CoreDivision/>
          <Divider isGalleryPage={true}/>
          <Division
            name="Acara"
            description="Divisi yang mengelola acara internal yang bertujuan untuk mengakrabkan dan meningkatkan rasa kekeluargaan antar-anggota KMK Fasilkom UI."
            chief="Julian Fernando"
            secondInCommands={["Marcia Nadin Pramasiwi"]}
            programs={["Jumatan", "Doa Bersama"]}
            image={ACARA}
          />
          <Divider isGalleryPage={true}/>
          <Division
            name="HPDD"
            description="Divisi yang bertugas membuat dan mengelola konten serta publikasi di media sosial KMK Fasilkom UI."
            chief="Nathania Calista"
            secondInCommands={["Nadya Aprillia"]}
            programs={["Publikasi", "Kartu Ulang Tahun", "Kartu Ucapan Wisuda"]}
            image={HPDD}
          />
          <Divider isGalleryPage={true}/>
          <Division
            name="PSDM"
            description="Divisi yang bertugas untuk mempererat kekeluargaan antara sesama anggota KMK Fasilkom Ui baik yang masih aktif maupun alumni."
            chief="Samuel"
            secondInCommands={["Bonafisius Erlangga"]}
            programs={[
              "Temu Kangen Alumni",
              "Welcoming Maba",
              "Form Ucapan Wisuda",
            ]}
            image={PSDM}
          />
          <Divider isGalleryPage={true}/>
          <Division
            name="ITA"
            description="Divisi yang bertugas untuk membantu akademis anggota KMK Fasilkom UI dan mengembangkan teknologi informasi untuk KMK Fasilkom UI"
            chief="Olivia Monica"
            secondInCommands={["Kristianto Desun", "Teofanus Gary Setiawan"]}
            programs={["Website KMK Fasilkom UI", "KMK Study Club"]}
            image={ITA}
          />
        </div>
      </div>
    </>
  );
}
