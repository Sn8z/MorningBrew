import logo from "/src/assets/mb.png";

const Logo = ({ size = 48 }) => {
  return <img src={logo} alt='MorningBrew logo' width={size} height={size} />;
};

export default Logo;
