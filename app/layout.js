export const metadata = {
  title: "Estética Automotiva Premium",
  description: "Serviços de estética automotiva com padrão de excelência.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}