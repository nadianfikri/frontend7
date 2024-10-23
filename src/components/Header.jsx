import logoelang from "../logo elang.png";

const logo = {
  nama: "Eagle Hunter",
  imageUrl: "",
  imagesize: 110,
};

function Header() {
  return (
    <div calassName="header">
      <div calassName="header-logo">
        <img
          calassName="App-logo"
          src={logoelang}
          alt={"logo" + logo.nama}
          style={{ width: logo.imagesize, height: logo.imagesize }}
        />
        <h3>{logo.nama}</h3>
      </div>
      <div calassName="header-tengah">
        <h1>Eagle Hunter</h1>
        <h2>support team</h2>
      </div>
    </div>
  );
}
export default Header;
