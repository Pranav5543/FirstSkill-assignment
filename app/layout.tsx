import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "StreamDash - Premium Streaming Dashboard",
  description:
    "Discover and explore movies with our premium streaming dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-20 px-4 sm:px-6 lg:px-8">{children}</main>
      </body>
    </html>
  );
}
