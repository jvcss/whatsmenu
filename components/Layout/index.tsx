import Toolbar from "@mui/material/Toolbar";
import Footer from "../Footer";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <main>
        <Toolbar />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
