import type {Metadata} from "next";
import {Roboto} from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
    weight: "400"
});

export const metadata: Metadata = {
    title: "Chanelle Bösiger Developer Portfolio",
    description: "NextJS Developer Portfolio",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={`${roboto.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}
