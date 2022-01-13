import "./SectionHeader.css";
import {Desktop, Mobile} from "../Responsive/Responsive";

export default function SectionHeader({children, color}) {
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
        <div className="HeaderWrapperMobile">
          <div
            className="HeaderBackgroundMobile"
            style={{
              background: color,
            }}
          >
            <p className="HeaderTextMobile">{children}</p>
          </div>
        </div>
      </Mobile>
    </>
  );
}
