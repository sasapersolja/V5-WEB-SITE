export const metadata = {
  title: "MP3 Shop",
  description: "Buy my track securely with Stripe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Mobile viewport & iOS safe rendering */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Preload background to avoid white flashes on mobile */}
        <link rel="preload" as="image" href="/background2.png" />
        {/* Stripe preconnect for faster checkout */}
        <link rel="preconnect" href="https://checkout.stripe.com" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
