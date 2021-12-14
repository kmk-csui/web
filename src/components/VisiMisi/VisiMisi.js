import Header from 'components/SectionHeader/SectionHeader';
import logo from '../../logo.svg';
import './VisiMisi.css';

function VisiMisi() {
    return (
        <section className="visimisi">
            <div className="blockvisimisi">
                <Header color="#FFEFDC">Visi</Header>
                <div className="deskripsivisimisi">
                    Menjadikan KMK Fasilkom UI sebagai rumah dan wadah bagi semua anggotanya untuk dapat saling mengembangkan diri dengan berlandaskan kekeluargaan dan cinta kasih Allah.
                </div>
            </div>
            <div className="blockvisimisi">
                <Header color="#CFE7E7">Misi</Header>
                <div className="deskripsivisimisi">
                    <div className="poinvisimisi">
                        <div className="fotovisimisi"><img src={logo} className="visimisilogo App-logo" alt="logo" /></div>
                        <div className="tulisanvisimisi">
                            <div className="kotakmisi">
                                Mendekatkan dan mempererat tali kekeluargaan antar sesama anggota KMK Fasilkom UI.
                            </div>
                        </div>
                    </div>

                    <div className="poinvisimisi">
                        <div className="fotovisimisi"><img src={logo} className="visimisilogo App-logo" alt="logo" /></div>
                        <div className="tulisanvisimisi">
                            <div className="kotakmisi">
                                Menjadikan KMK Fasilkom UI sebagai wadah untuk saling mengembangkan diri.
                            </div>
                        </div>
                    </div>

                    <div className="poinvisimisi">
                        <div className="fotovisimisi"><img src={logo} className="visimisilogo App-logo" alt="logo" /></div>
                        <div className="tulisanvisimisi">
                            <div className="kotakmisi">
                                Melibatkan Tuhan dalam setiap kegiatan KMK Fasilkom UI.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default VisiMisi;
