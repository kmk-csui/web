import Header from "components/SectionHeader/SectionHeader";
import "./VisiMisi.css";

export default function VisiMisi() {
  return (
    <section className="visimisi">
      <Header color="#FFEFDC">Visi</Header>
      <div className="deskripsivisi">
        Menjadikan KMK Fasilkom UI sebagai wadah bagi mahasiswa Katolik di Fasilkom UI menjalin relasi dan saling mendukung dalam perkuliahan dan kehidupan.
      </div>

      <Header color="#CFE7E7">Misi</Header>
      <div>
        <div>
          {/* <div className="fotovisimisi"><img src={logo} className="visimisilogo App-logo" alt="logo" /></div> */}
          <p>
            Menjalin kedekatan antaranggota KMK Fasilkom UI melalui berbagai kegiatan yang bermanfaat
          </p>
        </div>

        <div>
          {/* <div className="fotovisimisi"><img src={logo} className="visimisilogo App-logo" alt="logo" /></div> */}
          <p>
            Meningkatkan rasa kepedulian dan rasa ingin saling membantu antaranggota KMK Fasilkom UI
          </p>
        </div>

        <div>
          {/* <div className="fotovisimisi"><img src={logo} className="visimisilogo App-logo" alt="logo" /></div> */}
          <p>Mengajak anggota KMK Fasilkom UI mengikuti berbagai kegiatan rohani</p>
        </div>
      </div>
    </section>
  );
}
