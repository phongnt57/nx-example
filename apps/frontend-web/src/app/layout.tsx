import { UIProvider } from '@/provider/ui';
import { ReactDOM } from 'react';
import '@/style/global.scss';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <UIProvider>{children}</UIProvider>
      </body>
    </html>
  );
}
