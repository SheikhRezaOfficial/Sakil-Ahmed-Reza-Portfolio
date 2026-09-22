import Link from "next/link";
import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-gray-200 shadow-lg p-6">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full flex flex-row items-start justify-center gap-20 flex-wrap">
          {FOOTER_DATA.map((column) => (
            <div key={column.title} className="min-w-[180px] flex flex-col items-center">
              <h3 className="font-bold text-base mb-2">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link key={`${column.title}-${name}`} href={link} target={link.startsWith("/") || link.startsWith("mailto:") ? undefined : "_blank"} rel={link.startsWith("/") || link.startsWith("mailto:") ? undefined : "noreferrer noopener"} className="flex items-center my-2 hover:text-cyan-300 transition">
                  {Icon && <Icon />}
                  <span className="text-sm ml-2">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-8 mb-2 text-sm text-center text-gray-400">
          © {new Date().getFullYear()} Sakil Ahmed Sheikh Reza. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
