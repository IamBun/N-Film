import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <>
      <NavBar />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
