import { Section } from "@radix-ui/themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Section className="flex items-center justify-center px-6 py-12">
        {children}
      </Section>
    </>
  );
}
