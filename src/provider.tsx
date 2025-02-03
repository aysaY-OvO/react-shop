import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient();

interface ProviderProps {
  children: React.ReactNode;
}

export default function Provider({children}: ProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
