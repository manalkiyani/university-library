import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local"
const ibmPlexSans = localFont({
  src: [
    { path: '/fonts/IBMPlex-Sans-Regular.ttf', weight: '400', style: 'normal' },
    { path: '/fonts/IBMPlex-Sans-Medium.ttf', weight: '500', style: 'normal' },
    { path: '/fonts/IBMPlex-Sans-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '/fonts/IBMPlex-Sans-Bold.ttf', weight: '700', style: 'normal' }
  ]
});

const bebasNeue = localFont({
  src: [
    { path: '/fonts/BebasNeue-Regular.ttf', weight: '400', style: 'normal' },
  ],
  variable: "--font-bebas-neue",

})

export const metadata: Metadata = {
  title: "BookWise",
  description: "Bookwise is a platform that allows users to discover and read books from various genres, authors, and publishers.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.className} ${bebasNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
export default RootLayout