import HomeComponent from "./HomeComponent";
import ProfileComponent from "./ProfileComponent";
import HomeIcon from "../assets/HomeLogo.svg";
import ProfileIcon from "../assets/ProfileLogo.svg";

export default function LeftMenueComponent() {
  return (
    <div className="leftmenu-layout">
      <p> LeftMenu will go here</p>
      <button>
      <img src={HomeIcon} alt="Home" />
        Home
        <HomeComponent />
      </button>
      <button>
      <img src={ProfileIcon} alt="Profile" />
        Profile
        <ProfileComponent />
      </button>
    </div>
  );
}
