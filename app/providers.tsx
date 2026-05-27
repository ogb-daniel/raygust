"use client"
import { ThemeProvider } from "next-themes";
import { RootProvider } from 'fumadocs-ui/provider/next';

import React from "react";

export function Providers({children}:{children:React.ReactNode}){
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
    >
        
        <RootProvider>{children}</RootProvider>
    </ThemeProvider>
  );
}