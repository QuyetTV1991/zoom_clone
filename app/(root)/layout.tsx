import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Yoom",
  description: "Yoom - Video Call App",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
