import "./globals.css";
import { Poppins } from "next/font/google";

import GlobalProvider from "@/components/common/GlobalProvider";
import { ReactNodeAsChildrenProps, cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400",
  display: "swap",
});
export const metadata = {
  title: "Grit",
  description: "Date range calendar component",
};

export default function RootLayout({ children }: ReactNodeAsChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          poppins.className
        )}
      >
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
