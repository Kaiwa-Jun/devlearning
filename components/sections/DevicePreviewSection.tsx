import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DevicePreviewSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-blue-50 dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              あなたの学びを、もっと素敵に
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              DevLearningで学習計画を始めましょう。
              <br />
              無料で簡単に、あなただけの効率的な学習プランを作成できます。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/auth">
                <Button className="px-8 py-3 text-lg bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center">
                  プランを作成する
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/search">
                <Button
                  variant="outline"
                  className="px-8 py-3 text-lg border-gray-300 text-gray-800 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 rounded-lg"
                >
                  学習コンテンツを探す
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 lg:ml-10">
              {/* ブラウザウィンドウ風フレーム */}
              <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex items-center">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-900 h-80">
                  <div className="bg-white dark:bg-gray-800 rounded shadow p-4 h-full flex flex-col">
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mb-2"></div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-4/6 mb-6"></div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-24 bg-blue-100 dark:bg-blue-900/30 rounded"></div>
                        <div className="h-24 bg-blue-100 dark:bg-blue-900/30 rounded"></div>
                        <div className="h-24 bg-blue-100 dark:bg-blue-900/30 rounded"></div>
                        <div className="h-24 bg-blue-100 dark:bg-blue-900/30 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* スマートフォンフレーム */}
              <div className="absolute -bottom-10 -right-5 md:right-10 w-44 bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-gray-800 dark:border-gray-600">
                <div className="bg-gray-800 dark:bg-gray-900 h-6 flex justify-center items-end pb-1">
                  <div className="w-16 h-1.5 bg-gray-600 dark:bg-gray-700 rounded-full"></div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 h-72 p-2">
                  <div className="bg-white dark:bg-gray-700 rounded-lg h-full p-2 flex flex-col">
                    <div className="h-3 bg-blue-500 rounded w-1/2 mb-2"></div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-full mb-1"></div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-5/6 mb-3"></div>
                    <div className="space-y-2 flex-1">
                      <div className="h-12 bg-blue-100 dark:bg-blue-900/30 rounded"></div>
                      <div className="h-12 bg-blue-100 dark:bg-blue-900/30 rounded"></div>
                      <div className="h-12 bg-blue-100 dark:bg-blue-900/30 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 dark:bg-gray-900 h-4 flex justify-center items-center">
                  <div className="w-6 h-2 bg-gray-600 dark:bg-gray-700 rounded-full"></div>
                </div>
              </div>
            </div>
            {/* 装飾的な要素 */}
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
