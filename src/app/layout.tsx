import Header from "@/components/Header";
import { Section, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/components.css";
import "@radix-ui/themes/styles.css";
import "@radix-ui/themes/tokens.css";
import "@radix-ui/themes/utilities.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

const vazir = localFont({
  src: "./assets/fonts/Vazir-Medium.ttf"
});

export const metadata: Metadata = {
  title: "Tornoland",
  description: "Join to tournaments, take rewards and challenge your skills",
  icons: "/logo.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={`${vazir.className} antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider enableSystem={false} attribute="class" enableColorScheme themes=
          {["dark", "light"]} defaultTheme="dark">
          <Theme accentColor="green">
            <SessionProvider>
              {children}
            </SessionProvider>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
