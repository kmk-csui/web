import "./SectionHeader.css";
import {Desktop, Mobile} from "../Responsive/Responsive";

export default function SectionHeader({children, color, isGallerypage = false}) {
  return (
    <>
      <Desktop>
        <div className="HeaderWrapper">
          <div
            style={{
              background: `linear-gradient(transparent 50%,${color} 50%)`,
            }}
          >
            <p className="HeaderText">{children}</p>
          </div>
        </div>
      </Desktop>
      <Mobile>
        {
          isGallerypage
            ? <div className="HeaderWrapper">
              <div
                style={{
                  background: `linear-gradient(transparent 50%,${color} 50%)`,
                  "font-size": "1.5rem",
                }}
              >
                <p className="HeaderText">{children}</p>
              </div>
            </div>
            : <div className="HeaderWrapperMobile">
              <div
                className="HeaderBackgroundMobile"
                style={{
                  background: color,
                }}
              >
                <p className="HeaderTextMobile">{children}</p>
              </div>
            </div>
        }
      </Mobile>
    </>
  );
}
