import React from 'react';
import './globals.css'; 

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
};

export default Layout;