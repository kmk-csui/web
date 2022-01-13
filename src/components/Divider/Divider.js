import {Desktop, Mobile} from "../Responsive/Responsive";

export default function Divider({isGalleryPage = false}) {
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
        {
          isGalleryPage
            ? <div
              style={{
                marginTop: "2rem",
                marginBottom: "2rem",
                height: "0.5rem",
                backgroundColor: "#F2F2F2",
                "margin-left": "2rem",
                "margin-right": "2rem",
              }}
            />
            : <div
              style={{
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
            />
        }

      </Mobile>
    </>
  );
}
