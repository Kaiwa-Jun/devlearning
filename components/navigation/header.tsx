"use client";

import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  ArrowRight,
  LayoutDashboard,
  Target,
  ListTodo,
  FileBarChart,
  User,
  LogOut,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";

export function Header() {
  const pathname = usePathname();
  const { user, signOut } = useAuth();
  const [mounted, setMounted] = useState(false);

  // クライアントサイドでのレンダリングを確認
  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    {
      href: "/dashboard",
      label: "ダッシュボード",
      icon: <LayoutDashboard className="h-4 w-4 mr-1" />,
    },
    {
      href: "/goals",
      label: "目標設定",
      icon: <Target className="h-4 w-4 mr-1" />,
    },
    {
      href: "/tasks",
      label: "タスク管理",
      icon: <ListTodo className="h-4 w-4 mr-1" />,
    },
    {
      href: "/progress",
      label: "進捗管理",
      icon: <FileBarChart className="h-4 w-4 mr-1" />,
    },
  ];

  // ログアウト処理
  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("ログアウトエラー:", error);
    }
  };

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b bg-white dark:bg-gray-900">
      <Link className="flex items-center justify-center" href="/">
        <GraduationCap className="h-6 w-6 text-blue-600" />
        <span className="ml-2 text-lg font-semibold">DevLearning</span>
      </Link>
      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center text-sm font-medium transition-colors hover:text-primary",
              pathname === item.href ? "text-primary" : "text-muted-foreground"
            )}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}

        {mounted && user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="max-w-[150px] truncate">{user.email}</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  マイページ
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={handleLogout}
                className="flex items-center gap-2 cursor-pointer text-red-500"
              >
                <LogOut className="h-4 w-4" />
                ログアウト
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/auth">
              ログイン
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        )}
      </nav>
    </header>
  );
}
