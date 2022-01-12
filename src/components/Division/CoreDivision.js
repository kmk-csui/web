import BENDAHARA from "assets/division/bendahara.png";
import KETUA from "assets/division/ketua.png";
import SEKRETARIS from "assets/division/sekretaris.png";
import WAKIL from "assets/division/wakil.png";
import Header from "components/SectionHeader/SectionHeader";
import "./CoreDivision.css";

export default function CoreDivision() {
  return (
    <div className="CoreDivision">
      <Header color="#CFE7E7">Pengurus Inti</Header>
      <CoreDivisionMember
        position="Koordinator Fakultas"
        name="Cornelita Lugita Santoso"
        image={KETUA}
        pos="left"
      />
      <CoreDivisionMember
        position="Wakil Koordinator Fakultas"
        name="Dionisius Baskoro Samudra"
        image={WAKIL}
        pos="right"
      />
      <CoreDivisionMember
        position="Sekretaris"
        name="Francis Wibisono"
        image={SEKRETARIS}
        pos="left"
      />
      <CoreDivisionMember
        position="Wakil Sekretaris"
        name="Marta Junike Dewi Anugrah"
        image={BENDAHARA}
        pos="right"
      />
    </div>
  );
}

function CoreDivisionMember({position, name, image, pos}) {
  let className = "CoreDivisionMember";
  if (pos === "left") {
    className += " Left";
  } else {
    className += " Right";
  }

  return (
    <div className={className}>
      {pos === "left" && <img src={image} alt={"Anggota Inti"} width="125vh"/>}
      <div>
        <p className="CoreDivisionHeader">{position}</p>
        <p>{name}</p>
      </div>
      {pos === "right" && (
        <img src={image} alt={"Anggota Inti"} width="125vh"/>
      )}
    </div>
  );
}
