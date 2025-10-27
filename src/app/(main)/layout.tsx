import Header from "@/components/Header";
import { Section } from "@radix-ui/themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Section className="w-full max-w-4xl mx-auto px-6 py-12">
        {children}
      </Section>
    </>
  );
}
