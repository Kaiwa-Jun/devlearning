'use client';

import { Button } from "@/components/ui/button";
import { Code2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/dashboard", label: "ダッシュボード" },
    { href: "/goals", label: "目標設定" },
    { href: "/tasks", label: "タスク管理" },
    { href: "/progress", label: "進捗管理" },
  ];

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b bg-white dark:bg-gray-900">
      <Link className="flex items-center justify-center" href="/">
        <Code2 className="h-6 w-6" />
        <span className="ml-2 text-lg font-semibold">DevLearning</span>
      </Link>
      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === item.href
                ? "text-primary"
                : "text-muted-foreground"
            )}
          >
            {item.label}
          </Link>
        ))}
        <Button asChild>
          <Link href="/dashboard">
            マイページへ
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </nav>
    </header>
  );
}