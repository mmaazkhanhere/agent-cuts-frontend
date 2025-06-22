import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

type props = {
  navItem: { link: string; name: string }[];
  isMenuOpen: boolean;
};
const MobileNavMenu = ({ navItem, isMenuOpen }: props) => {
  return (
    <>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800/50 rounded-lg mt-2 border border-gray-700/50">
            {navItem.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="text-gray-300 hover:text-teal-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button className="w-full bg-teal-600 hover:bg-teal-500 text-white">
                <Link href="/upload">Upload</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavMenu;
