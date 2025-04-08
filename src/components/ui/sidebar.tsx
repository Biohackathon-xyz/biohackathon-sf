
import React from 'react';
import { cn } from '@/lib/utils';

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Sidebar({ className, children, ...props }: SidebarProps) {
  return (
    <div className={cn("h-full flex flex-col space-y-4 py-4 bg-background", className)} {...props}>
      {children}
    </div>
  );
}

interface SidebarSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: React.ReactNode;
}

export function SidebarSection({ className, title, children, ...props }: SidebarSectionProps) {
  return (
    <div className={cn("space-y-2", className)} {...props}>
      {title && <h3 className="text-sm font-medium px-3">{title}</h3>}
      <div className="space-y-1">{children}</div>
    </div>
  );
}

interface SidebarItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  title: string;
  icon?: React.ReactNode;
  href?: string;
  active?: boolean;
}

export function SidebarItem({ className, title, icon, href = "#", active = false, ...props }: SidebarItemProps) {
  const Component = href ? "a" : "button";
  
  return (
    // @ts-ignore
    <Component
      href={href}
      className={cn(
        "flex items-center gap-2 px-3 py-1.5 text-sm rounded-md w-full",
        active ? "bg-accent text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground",
        className
      )}
      {...props}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      <span>{title}</span>
    </Component>
  );
}

interface SidebarNavProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function SidebarNav({ className, children, ...props }: SidebarNavProps) {
  return (
    <nav className={cn("space-y-1", className)} {...props}>
      {children}
    </nav>
  );
}
