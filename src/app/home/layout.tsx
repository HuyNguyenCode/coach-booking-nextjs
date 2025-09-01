import "../globals.scss"; // Global SCSS (áp dụng cho toàn app)
import Header from "@/app/home/components/Header";
import Footer from "@/app/home/components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="wrapper">
      <Header />
      <div className="layout-container">
        <div className="content">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
