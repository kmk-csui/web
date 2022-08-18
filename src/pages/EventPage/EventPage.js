import Header from "components/Header/Header";
import "./EventPage.css";
import Cards from '../../components/Cards/Cards'
import {Helmet} from "react-helmet";

export default function EventPage() {
  return (
    <>
      <Helmet>
        <title>Event - KMK CSUI</title>
      </Helmet>
      <Header headerTitle="Event KMK Fasilkom UI"/>
      <div className="EventPage">
        <Cards />
      </div>
    </>
  );
}
