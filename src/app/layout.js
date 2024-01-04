import "@/styles/style.min.css";
import "@/styles/grid.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "PAVANMG",
  description: "Next.js Developer",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
