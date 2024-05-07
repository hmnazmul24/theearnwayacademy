import MainFooter from "@/components/shared/MainFooter";
import Navbar from "@/components/shared/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      {children}
      <MainFooter />
    </div>
  );
}
