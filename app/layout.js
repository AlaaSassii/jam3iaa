import { Alexandria } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";

const inter = Alexandria({ subsets: ["latin"] });

export const metadata = {
  title: "Association - arij",
  description: "Arij est une association caritative créée en Mars 2018 et qui œuvre dans le social, la santé et l'éducation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
