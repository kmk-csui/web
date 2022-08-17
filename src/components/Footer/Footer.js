import "./Footer.css";

export default function Footer() {
  return (
    <section className="Footer">
      <p>Copyright © {new Date().getFullYear()} - KMK Fasilkom UI {new Date().getFullYear()}</p>
    </section>
  );
}
