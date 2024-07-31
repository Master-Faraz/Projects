import StreamVideoProvider from '@/providers/StreamClientProvider'
import React from 'react'

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "ZOOM",
  description: "Video calling App",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  )
}

export default RootLayout