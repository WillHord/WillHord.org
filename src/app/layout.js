import { Major_Mono_Display } from "next/font/google";
import "./globals.css";

// const majorMonoDisplay = Major_Mono_Display({
//   subsets: ["latin"],
//   weight: 400,
//   style: "normal"
// });


export const metadata = {
  title: "WillHord.dev",
  description: "Will Hord's personal website",
};

import Footer from "../components/footer";
import Header from "../components/header";
import HeaderContext from "./context";


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="">
        <header>
            <Header />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
