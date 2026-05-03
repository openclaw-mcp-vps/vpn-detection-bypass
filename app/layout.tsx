import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ProxyShift — Bypass Government VPN Blocks Automatically",
  description: "Rotating proxy service that automatically switches protocols when governments block VPN access. Stay connected with OpenVPN, WireGuard, SOCKS5, and HTTP fallback."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e414a1c5-3208-4473-beb5-1fd2961dea7b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
