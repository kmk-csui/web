import BENDAHARA from "assets/division/bendahara.png";
import KETUA from "assets/division/ketua.png";
import SEKRETARIS from "assets/division/sekretaris.png";
import WAKIL from "assets/division/wakil.png";
import Header from "components/SectionHeader/SectionHeader";
import "./CoreDivision.css";
import {useMediaQuery} from "react-responsive";

export default function CoreDivision() {
  return (
    <div className="CoreDivision">
      <Header color="#ffefdc" isGallerypage={true}>Pengurus Inti</Header>
      <CoreDivisionMember
        position="Koordinator Fakultas"
        name="Gregorius Farel"
        image={KETUA}
        pos="left"
      />
      <CoreDivisionMember
        position="Wakil Koordinator Fakultas"
        name="Johanes Raka"
        image={WAKIL}
        pos="right"
      />
      <CoreDivisionMember
        position="Sekretaris"
        name="Cynthia Philander"
        image={SEKRETARIS}
        pos="left"
      />
      <CoreDivisionMember
        position="Bendahara"
        name="Paskalis Abhista"
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

  const isMobile = useMediaQuery({maxWidth: 1279});

  return (
    <div className={className}>
      {pos === "left" && <img src={image} alt={"Anggota Inti"} width={isMobile ? "100vh" : "125vh"} className="ProfileImage" />}
      <div>
        <p className="CoreDivisionHeader">{position}</p>
        <p>{name}</p>
      </div>
      {pos === "right" && (
        <img src={image} alt={"Anggota Inti"} width={isMobile ? "100vh" : "125vh"} className="ProfileImage" />
      )}
    </div>
  );
}
