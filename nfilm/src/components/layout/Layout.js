import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <div>
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
