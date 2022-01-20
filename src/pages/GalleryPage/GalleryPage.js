import Gallery from "components/Gallery/Gallery";
import Header from "components/Header/Header";
import "./GalleryPage.css";
import {Helmet} from "react-helmet";

export default function GalleryPage() {
  return (
    <>
      <Helmet>
        <title>Galeri - KMK CSUI</title>
      </Helmet>
      <Header headerTitle="Galeri KMK Fasilkom UI"/>
      <div className="GalleryPage">
        <Gallery/>
      </div>
    </>
  );
}
