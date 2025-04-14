'use client';

import { Button } from "@/components/ui/button";
import { Target, BookOpen, Code2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  あなたの学習をサポート
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  目標設定から進捗管理まで、効率的な学習をAIがサポートします。
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/auth">
                  <Button size="lg" className="mt-6">
                    始めましょう
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 items-center">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Target className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">目標設定</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  明確な学習目標を設定し、達成までの道筋を立てます。
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <BookOpen className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">体系的な学習</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  AIが目標に合わせた学習パスとタスクを提案します。
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Code2 className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">進捗管理</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  詳細な分析と洞察で学習の進捗を可視化します。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 DevLearning. All rights reserved.
        </p>
      </footer>
    </div>
  );
}