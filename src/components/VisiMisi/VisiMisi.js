import Header from "components/SectionHeader/SectionHeader";
import "./VisiMisi.css";

export default function VisiMisi() {
  return (
    <section className="visimisi">
      <Header color="#FFEFDC">Visi</Header>
      <div className="deskripsivisi">
        Menjadikan KMK Fasilkom UI sebagai rumah dan wadah bagi semua anggotanya
        untuk dapat saling mengembangkan diri dengan berlandaskan kekeluargaan
        dan cinta kasih Allah.
      </div>

      <Header color="#CFE7E7">Misi</Header>
      <div>
        <div>
          {/* <div className="fotovisimisi"><img src={logo} className="visimisilogo App-logo" alt="logo" /></div> */}
          <p>
            Mendekatkan dan mempererat tali kekeluargaan antar sesama anggota
            KMK Fasilkom UI.
          </p>
        </div>

        <div>
          {/* <div className="fotovisimisi"><img src={logo} className="visimisilogo App-logo" alt="logo" /></div> */}
          <p>
            Menjadikan KMK Fasilkom UI sebagai wadah untuk saling mengembangkan
            diri.
          </p>
        </div>

        <div>
          {/* <div className="fotovisimisi"><img src={logo} className="visimisilogo App-logo" alt="logo" /></div> */}
          <p>Melibatkan Tuhan dalam setiap kegiatan KMK Fasilkom UI.</p>
        </div>
      </div>
    </section>
  );
}
