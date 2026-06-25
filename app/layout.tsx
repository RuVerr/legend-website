import "./globals.css";
import TemplateNavigation from "./Components/AtomUI/Template/TemplateNavigation";
import TemplateBackground from "./Components/AtomUI/Template/TemplateBackground";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={``}>
      <body className="">
        {/* <TemplateNavigation /> */}
        {/* <TemplateBackground /> */}
        {children}
      </body>
    </html>
  );
}
