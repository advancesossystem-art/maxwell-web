export default function BookConsultationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <link rel="preconnect" href="https://assets.calendly.com" />
      {children}
    </>
  );
}
