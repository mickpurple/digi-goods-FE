import { FC, ReactNode } from "react";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";

export interface MainLayoutProps {
  children: ReactNode;
  navClasses?: string;
}

export const MainLayout: FC<MainLayoutProps> = ({ children, navClasses }) => (
  <>
    <Navbar
      items={[
        {
          text: "Store",
          link: "/",
          id: 1,
          sublinks: [],
        },
        {
          text: "Support",
          link: "/support",
          id: 2,
          sublinks: [],
        },
        {
          text: "Discord",
          link: "/discord",
          id: 3,
          sublinks: [],
        },
      ]}
      classes={navClasses}
    />
    {children}
    <Footer />
  </>
);
