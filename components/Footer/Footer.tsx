import React, { FC } from "react";
import Link from "next/link";
import styles from "./footer.module.css";

export const Footer: FC = () => (
  <>
    <div className="bg-[#151515] text-white">
      <div className="flex flex-col md:flex-row justify-between md:gap-16 xl:gap-20 items-center px-[65px] max-w-[1800px] mx-auto pb-[54px] pt-[45px] w-full">
        <Link href={"/"}>
          {/* <img
            src="/images/logo-white.png"
            alt="Chaturvedi Cargo Care"
            className="max-w-[262px] md:max-w-[300px] xl:max-w-[412px]"
          /> */}
          <p className="text-4xl font-black text-[#EEEEEE]">
            DIGI<span className="text-[#C73659]">GOODS</span>
          </p>
        </Link>
        {/* desktop footer  grid */}
        <div className="hidden md:flex gap-10">
          <Link href={"/"}>
            <p className="text-[18px] xl:text-[22px] font-medium">Store</p>
          </Link>
          <Link href={"#support"}>
            <p className="text-[18px] xl:text-[22px] font-medium">Support</p>
          </Link>
          <Link href={"#discord"}>
            <p className="text-[18px] xl:text-[22px] font-medium">Discord</p>
          </Link>
        </div>

        {/* mobile footer */}
        <div className="flex flex-col items-center md:hidden">
          <div className="w-full flex flex-col items-center gap-[25px] mt-[45px]">
            <Link href={"/"}>
              <p className="text-[18px] xl:text-[22px] font-medium">Store</p>
            </Link>
            <Link href={"#support"}>
              <p className="text-[18px] xl:text-[22px] font-medium">Support</p>
            </Link>
            <Link href={"#discord"}>
              <p className="text-[18px] xl:text-[22px] font-medium">Discord</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Footer;
