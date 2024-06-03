import { FC, useContext, useRef, useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../Button/Button";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export interface NavbarItemProps {
  text: string;
  link: string;
}

export interface NavbarDTO {
  text: string;
  link: string;
  id: number;
  sublinks: NavbarItemProps[];
}
export interface NavbarProps {
  items: NavbarDTO[];
  classes?: string;
}
export const Navbar: FC<NavbarProps> = ({ items, classes }: NavbarProps) => {
  const navRef = useRef<any>(null);
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    // disabling scrollbar when the dialog box is open
    document.body.style.overflow = openMenu ? "hidden" : "auto";

    gsap.fromTo(
      ".navItems",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
      }
    );
  }, [openMenu]);

  return (
    <>
      <div
        className={`
          navBar w-full z-50
          ${classes || ""}`}
        ref={navRef}
      >
        {openMenu ? (
          <div className="absolute top-0 left-0  w-screen h-[100dvh] bg-[#151515] z-10">
            <div
              className="flex flex-col justify-between relative "
              style={{ height: "calc(100dvh)" }}
            >
              <div className="flex flex-col justify-between mx-5 gap-5 mt-[80px] text-white">
                {items.map((item, index) => {
                  return (
                    <Link href={item.link} key={index} className="navItems">
                      <div
                        onClick={() => {
                          setOpenMenu(false);
                        }}
                      >
                        <p className="text-lg font-medium">{item.text}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="w-full px-5 pb-[25px] navItems">
                <Button
                  text="Get in Touch"
                  onClick={() => {
                    router.push("#contact");
                    setOpenMenu(false);
                  }}
                />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="relative z-20 h-[50px] md:h-[80px] bg-[#151515]">
          <div className=" px-[20px] md:px-[65px] max-w-[1800px] mx-auto  flex justify-between items-center h-full">
            <div className="h-full flex items-center">
              <Link href={"/"}>
                <p className="text-4xl font-black text-[#EEEEEE]">
                  DIGI<span className="text-[#C73659]">GOODS</span>
                </p>
              </Link>
            </div>
            <div className="hidden md:flex h-full items-center gap-10">
              {items.map((item, index) => {
                return (
                  <div
                    className="text-[#A91D3A] h-full flex items-center"
                    key={index}
                  >
                    <Link href={item.link}>
                      <p
                        key={index}
                        className="hover:text-[#C73659] font-semibold text-lg"
                      >
                        {item.text}
                      </p>
                    </Link>
                  </div>
                );
              })}
              <Button
                text="Get in Touch"
                onClick={() => {
                  router.push("#contact");
                }}
              />
            </div>

            <div
              className="md:hidden h-full flex items-center px-[20px]"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <p className="text-[#C73659] font-black cursor-pointer">
                {"///"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
