import Header from "../components/modules/Header";
// eslint-disable-next-line
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default Layout;
