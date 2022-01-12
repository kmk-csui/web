import Header from "components/SectionHeader/SectionHeader";
import "./Division.css";

export default function Division({
                                   name,
                                   description,
                                   chief,
                                   secondInCommands,
                                   programs,
                                   image,
                                 }) {
  return (
    <section className="Division">
      <img src={image} alt={`Anggota Divisi ${name}`} width="175vh"/>
      <div>
        <Header color="#CFE7E7">Divisi {name}</Header>
        <p className="HeaderDivision">Tentang Divisi</p>
        <p>{description}</p>
        <div className="Person">
          <div>
            <p className="HeaderDivision">PJ</p>
            <p>{chief}</p>
          </div>
          <div>
            <p className="HeaderDivision">Wakil PJ</p>
            {secondInCommands.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </div>
        </div>
        <p className="HeaderDivision Program">Program Kerja</p>
        <ul>
          {programs.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </section>
  );
}
