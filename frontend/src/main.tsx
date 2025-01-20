import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./queryClient";
import './index.css'
import 'rsuite/dist/rsuite.min.css';
import { CustomProvider } from 'rsuite';
import RoutesSwitch from './routes'
import AppContextProvider from './AppContextProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CustomProvider>
        <AppContextProvider>
          <RoutesSwitch />
        </AppContextProvider>
      </CustomProvider>
    </QueryClientProvider>
  </StrictMode>,
)
