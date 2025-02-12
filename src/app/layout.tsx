export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav>
          <a href="/implicit-dynamic">Implicit Dynamic</a>
          <a href="/explicit-dynamic">Explicit Dynamic</a>
          <a href="/static-with-ppr">Static with PPR</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
