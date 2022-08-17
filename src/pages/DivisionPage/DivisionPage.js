import ACARA_1 from "assets/division/acara-1.png"
import ACARA_2 from "assets/division/acara-2.png"
import HPDD_1 from "assets/division/hpdd-1.png"
import HPDD_2 from "assets/division/hpdd-2.png"
import ITA_1 from "assets/division/ita-1.png";
import ITA_2 from "assets/division/ita-2.png"; 
import PSDM_1 from "assets/division/psdm-1.png";
import PSDM_2 from "assets/division/psdm-2.png";
import PSDM_3 from "assets/division/psdm-3.png";
import Divider from "components/Divider/Divider";
import Division from "components/Division/Division";
import Header from "components/Header/Header";
import "./DivisionPage.css";
import CoreDivision from "components/Division/CoreDivision";
import {Helmet} from "react-helmet";

export default function DivisionPage() {
  return (
    <>
      <Helmet>
        <title>Divisi - KMK CSUI</title>
      </Helmet>
      <Header headerTitle="Divisi KMK Fasilkom UI 2022"/>
      <div className="DivisionPage">
        <div className="MemberList">
          <CoreDivision/>
          <Divider isGalleryPage={true}/>
          <Division
            name="Acara"
            description="Divisi yang mengelola acara internal yang bertujuan untuk mengakrabkan dan meningkatkan rasa kekeluargaan antar-anggota KMK Fasilkom UI."
            chief="Adeline Sonia Sanusie"
            secondInCommands={["Michael Daw Balma"]}
            programs={["Jumatan", "Doa Bersama", "Career Path", "Pererat Tali Keakraban Angkatan (PETA)"]}
            staff={["Christopher Nathanael", "Monica Shannon", "Joan Isva Shanti"]}
            image={[ACARA_1, ACARA_2]}
          />
          <Divider isGalleryPage={true}/>
          <Division
            name="HPDD"
            description="Divisi yang bertugas membuat dan mengelola konten serta publikasi di media sosial KMK Fasilkom UI."
            chief="M. Margaretha Stella"
            secondInCommands={["Dionisius Mikael"]}
            programs={["Publikasi", "Kartu Ulang Tahun", "Kartu Ucapan Wisuda"]}
            staff={["Benedictus Jevan", "Dominikus Kern", "Maria Aurellia", "Mathilda Dellanova"]}
            image={[HPDD_1, HPDD_2]}
          />
          <Divider isGalleryPage={true}/>
          <Division
            name="PSDM"
            description="Divisi yang bertugas untuk mempererat kekeluargaan antara sesama anggota KMK Fasilkom Ui baik yang masih aktif maupun alumni."
            chief="Gerardus Abhirama"
            secondInCommands={["Robertus Aditya Sukoco", "Fransiskus David"]}
            programs={[
              "Temu Kangen Alumni", "Welcoming Maba", "Form Ucapan Wisuda", "Bonding Pengurus (BONUS)", "Pererat Tali Keakraban Angkatan (PETA)", "Weekend"
            ]}
            staff={["Alvin Widi Nugroho", "Diona Varastika", "Kaloosh Falito Verrell"]}
            image={[PSDM_1, PSDM_2, PSDM_3]}
          />
          <Divider isGalleryPage={true}/>
          <Division
            name="ITA"
            description="Divisi yang bertugas untuk membantu akademis anggota KMK Fasilkom UI dan mengembangkan teknologi informasi untuk KMK Fasilkom UI"
            chief="Christopher Bagas"
            secondInCommands={["Dimas Ignatius"]}
            programs={["Website KMK Fasilkom UI", "KMK Study Club"]}
            staff={["David Alexander", "Ferry", "Nicholas Lexi", "Nicholas Sidharta"]}
            image={[ITA_1, ITA_2]}
          />
        </div>
      </div>
    </>
  );
}
