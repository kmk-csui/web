import Divider from "components/Divider/Divider";
import Filosofi from "components/Filosofi/Filosofi";
import Header from "components/Header/Header";
import Tagar from "components/Tagar/Tagar";
import VisiMisi from "components/VisiMisi/VisiMisi";
import "./HomePage.css";
import {Helmet} from "react-helmet";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home - KMK CSUI</title>
      </Helmet>
      <Header isHomePage={true}/>
      <div className="HomePage">
        <Filosofi/>
        <Divider/>
        <Tagar/>
        <Divider/>
        <VisiMisi/>
      </div>
    </>
  );
}
