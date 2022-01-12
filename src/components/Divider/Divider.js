import {Desktop, Mobile} from "../Responsive/Responsive";

export default function Divider() {
  return (
    <>
      <Desktop>
        <div
          style={{
            marginTop: "4rem",
            marginBottom: "4rem",
            height: "0.5rem",
            backgroundColor: "#F2F2F2",
          }}
        />
      </Desktop>
      <Mobile>
        <div
          style={{
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        />
      </Mobile>
    </>
  );
}
