import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import appRouter from "./routes/Routes.jsx";

import { createAppKit } from "@reown/appkit/react";
import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet, bsc } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

import "./App.css";

const queryClient = new QueryClient()

const metadata = {
  name: 'POCO Token',
  description: 'POCO Token Presale - Connect your wallet to participate',
  url: window.location.origin, // Uses current domain
  icons: [window.location.origin + '/assets/images/png/logo.webp']
}

const projectId = '0471566f19c8ba8ee6264da2774e823d';

const networks = [mainnet, bsc]

const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: false // Changed to false for better wallet detection
})

createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    analytics: true,
    socials: false,
    email: false,
    onramp: false
  },
  themeMode: 'light',
  enableWalletGuide: true,
  enableNetworkView: true
})

export function AppKitProvider({ children }) {
  return (
    <WagmiProvider adapter={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}

const App = () => {

  return (
    <>
      <WagmiProvider config={wagmiAdapter.wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={appRouter}>
          </RouterProvider>
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              style: {
                fontSize: '0.8rem',
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
                textAlign: 'center'
              },
            }}
          />
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );

}

export default App;
