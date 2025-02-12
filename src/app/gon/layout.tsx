export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
        <div>곤레이아웃</div>
        {children}
        <div>곤레이아웃</div>
      </div>
  );
}
