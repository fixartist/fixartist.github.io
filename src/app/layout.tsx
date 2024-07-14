import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.scss";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import ThemeProvider from "@/components/templates/ThemeProvider";
import Auth0ProviderWithHistory from "@/components/templates/Auth0Provider";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next Appa",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('RootLayout rendered');
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <ThemeProvider>
            <section>
              <Header />
              <div>{children}</div>
              <Footer />
            </section>
          </ThemeProvider>
        </UserProvider>
      </body>
    </html>
  );
}
