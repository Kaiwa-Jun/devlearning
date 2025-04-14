'use client';

import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import { BookMarked, Home, LineChart, Settings, Target } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: 'ホーム',
    icon: Home,
    href: '/dashboard',
    color: 'text-sky-500',
  },
  {
    label: '目標設定',
    icon: Target,
    href: '/goals',
    color: 'text-violet-500',
  },
  {
    label: 'タスク管理',
    icon: BookMarked,
    href: '/tasks',
    color: 'text-pink-700',
  },
  {
    label: '進捗管理',
    icon: LineChart,
    color: 'text-orange-700',
    href: '/progress',
  },
  {
    label: '設定',
    icon: Settings,
    href: '/settings',
  },
];

export function MainNav() {
  const pathname = usePathname();
  const { userId } = useAuth();

  if (!userId) return null;

  return (
    <nav className="flex flex-col gap-2">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-primary/10 rounded-lg transition",
            pathname === route.href ? "bg-primary/10" : "transparent",
          )}
        >
          <div className="flex items-center flex-1">
            <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
            {route.label}
          </div>
        </Link>
      ))}
    </nav>
  );
}