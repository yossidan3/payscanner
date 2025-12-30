export const metadata = {
  title: "Payscanner",
  description: "Compare acquiring banks worldwide"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
