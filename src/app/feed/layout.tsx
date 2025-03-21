import React from 'react';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="p-4 bg-rose-500 w-full">
        I am a Navbar
      </div>
      <div>{children}</div>
    </div>
  );
}
