import { FC } from "react";

import Meta from "./Meta";

import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin", "cyrillic-ext"],
});

interface LayoutProps {
  title: string;
  className: string;
  children: JSX.Element;
}

const Layout: FC<LayoutProps> = ({ title, className, children }) => (
  <>
    <Meta title={title} />
    <div className={`wrapper ${nunito.className}`}>
      <main className={`${className}-page`}>{children}</main>
    </div>
  </>
);

export default Layout;
