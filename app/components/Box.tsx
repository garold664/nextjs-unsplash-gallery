import React from 'react';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Box({ children, className, ...props }: BoxProps) {
  return (
    <div
      {...props}
      className={`${className} h-20 flex items-center justify-center`}
    >
      {children}
    </div>
  );
}
