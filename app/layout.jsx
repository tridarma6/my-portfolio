import "./globals.css";
import Navbar from './components/navbar'
export const metadata = {
  title: "Tri Darma - Portofolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`font-firacode antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
