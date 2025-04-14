"use client";

import { Button } from "@/components/ui/button";
import {
  Target,
  BookOpen,
  BarChart2,
  ArrowRight,
  Clock,
  Brain,
  Share2,
  Users,
  Star,
  Settings,
  LayoutDashboard,
  ListChecks,
  LineChart,
  Sun,
  Calendar,
  Compass,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  GraduationCap,
  Mail,
  HelpCircle,
  Info,
  FileText,
  Shield,
} from "lucide-react";
import Link from "next/link";
// import { Header } from "@/components/navigation/header";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <Header /> */}

      <main className="flex-1">
        {/* ヒーローセクション */}
        <section className="w-full py-16 md:py-24 lg:py-32 xl:py-40">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-3 max-w-3xl">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  あなたの学習を
                  <br />
                  サポート
                </h1>
                <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl dark:text-gray-400">
                  目標設定から進捗管理まで、効率的な学習をAIがサポートします
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <Link href="/goals">
                  <Button
                    size="lg"
                    className="text-md px-8 bg-blue-600 hover:bg-blue-700"
                  >
                    始めましょう
                  </Button>
                </Link>
                <Link href="/auth">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-md px-8 border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    ログイン
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3ステップセクション */}
        <section className="w-full py-16 md:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                簡単3ステップで学習計画
              </h2>
              <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
                DevLearningなら、目標設定から進捗管理までをシンプルな3ステップで実現できます
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-3 items-start">
              <div className="flex flex-col items-center space-y-4 text-center relative">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full mb-4">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold">目標設定</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  明確な学習目標を設定し、達成までの道筋を立てます
                </p>
                {/* デスクトップでの矢印 */}
                <div className="hidden lg:block absolute top-8 right-[-30px] transform translate-x-1/2">
                  <ArrowRight className="h-8 w-24 text-gray-300" />
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4 text-center relative">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full mb-4">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold">体系的な学習</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  AIが目標に合わせた学習パスとタスクを提案します
                </p>
                {/* デスクトップでの矢印 */}
                <div className="hidden lg:block absolute top-8 right-[-30px] transform translate-x-1/2">
                  <ArrowRight className="h-8 w-24 text-gray-300" />
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full mb-4">
                  <BarChart2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold">進捗管理</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  詳細な分析と洞察で学習の進捗を可視化します
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 特徴セクション */}
        <section className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                学習がもっと楽しくなる
              </h2>
              <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
                DevLearningを使えば、目標設定から進捗管理まで、すべてがスムーズに。あなたの学びをより良いものにする機能が満載です。
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* カード1 */}
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-800">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">効率的な学習計画</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  最適な学習スケジュールで学習時間を最小限に。より多くの知識を効率よく吸収することができます。
                </p>
              </div>

              {/* カード2 */}
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-800">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mb-4">
                  <Brain className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">AIによる学習サポート</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  AIが学習パターンを分析し、最適な学習コンテンツと方法を提案。初めての分野でも安心して学べます。
                </p>
              </div>

              {/* カード3 */}
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-800">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mb-4">
                  <BarChart2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">進捗の可視化</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  学習データと達成状況を追跡し、成長の記録を自動で管理。後から振り返るのも簡単です。
                </p>
              </div>

              {/* カード4 */}
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-800">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mb-4">
                  <Share2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">学習内容の共有</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  作成した学習プランを共有して、友達や仲間と一緒に学習を進めることができます。
                </p>
              </div>

              {/* カード5 */}
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-800">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mb-4">
                  <Star className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  おすすめ学習コンテンツ
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  人気の学習リソースや参考情報をAIが提案。新しい発見のある学びを実現します。
                </p>
              </div>

              {/* カード6 */}
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-800">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mb-4">
                  <Settings className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">カスタマイズ自由</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  予算や時間に合わせて柔軟に学習計画を調整。あなたにぴったりの学習方法を作成できます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 使用シーンセクション */}
        <section className="w-full py-16 md:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                こんな時に便利です
              </h2>
              <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
                あなたの学習スタイルに合わせて、最適なサポートを提供します
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2 items-start">
              {/* ダッシュボード */}
              <div className="flex flex-col space-y-6">
                <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 shadow-md">
                  <div className="bg-gray-100 dark:bg-gray-700 aspect-video relative flex items-center justify-center">
                    <LayoutDashboard className="h-24 w-24 text-blue-600 opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">ダッシュボード</h3>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold flex items-center mb-4">
                    <Sun className="mr-2 h-5 w-5 text-blue-600" />
                    毎日の学習計画
                  </h3>
                  <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                    <li className="flex items-center">
                      <div className="bg-blue-600 rounded-full h-1.5 w-1.5 mr-2"></div>
                      今日の学習タスクを一目で確認
                    </li>
                    <li className="flex items-center">
                      <div className="bg-blue-600 rounded-full h-1.5 w-1.5 mr-2"></div>
                      優先度順に表示されるタスクリスト
                    </li>
                    <li className="flex items-center">
                      <div className="bg-blue-600 rounded-full h-1.5 w-1.5 mr-2"></div>
                      最近の学習進捗がグラフで分かる
                    </li>
                  </ul>
                </div>
              </div>

              {/* 目標管理 */}
              <div className="flex flex-col space-y-6">
                <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 shadow-md">
                  <div className="bg-gray-100 dark:bg-gray-700 aspect-video relative flex items-center justify-center">
                    <Target className="h-24 w-24 text-blue-600 opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">目標管理</h3>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold flex items-center mb-4">
                    <Calendar className="mr-2 h-5 w-5 text-blue-600" />
                    長期的な学習目標
                  </h3>
                  <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                    <li className="flex items-center">
                      <div className="bg-blue-600 rounded-full h-1.5 w-1.5 mr-2"></div>
                      複数の目標を同時に管理
                    </li>
                    <li className="flex items-center">
                      <div className="bg-blue-600 rounded-full h-1.5 w-1.5 mr-2"></div>
                      目標到達までのロードマップを作成
                    </li>
                    <li className="flex items-center">
                      <div className="bg-blue-600 rounded-full h-1.5 w-1.5 mr-2"></div>
                      柔軟なスケジュール調整に対応
                    </li>
                  </ul>
                </div>
              </div>

              {/* タスク管理 */}
              <div className="flex flex-col space-y-6">
                <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 shadow-md">
                  <div className="bg-gray-100 dark:bg-gray-700 aspect-video relative flex items-center justify-center">
                    <ListChecks className="h-24 w-24 text-blue-600 opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">タスク管理</h3>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold flex items-center mb-4">
                    <Compass className="mr-2 h-5 w-5 text-blue-600" />
                    体系的な学習パス
                  </h3>
                  <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                    <li className="flex items-center">
                      <div className="bg-blue-600 rounded-full h-1.5 w-1.5 mr-2"></div>
                      AIが最適な学習順序を提案
                    </li>
                    <li className="flex items-center">
                      <div className="bg-blue-600 rounded-full h-1.5 w-1.5 mr-2"></div>
                      タスクの依存関係を視覚的に表示
                    </li>
                    <li className="flex items-center">
                      <div className="bg-blue-600 rounded-full h-1.5 w-1.5 mr-2"></div>
                      ドラッグ＆ドロップで簡単にタスク調整
                    </li>
                  </ul>
                </div>
              </div>

              {/* 進捗管理 */}
              <div className="flex flex-col space-y-6">
                <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 shadow-md">
                  <div className="bg-gray-100 dark:bg-gray-700 aspect-video relative flex items-center justify-center">
                    <LineChart className="h-24 w-24 text-blue-600 opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">進捗管理</h3>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold flex items-center mb-4">
                    <BarChart2 className="mr-2 h-5 w-5 text-blue-600" />
                    データ分析と可視化
                  </h3>
                  <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                    <li className="flex items-center">
                      <div className="bg-blue-600 rounded-full h-1.5 w-1.5 mr-2"></div>
                      詳細な学習時間と進捗のグラフ表示
                    </li>
                    <li className="flex items-center">
                      <div className="bg-blue-600 rounded-full h-1.5 w-1.5 mr-2"></div>
                      強みと弱みを分析してフィードバック
                    </li>
                    <li className="flex items-center">
                      <div className="bg-blue-600 rounded-full h-1.5 w-1.5 mr-2"></div>
                      達成感を高めるマイルストーン表示
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* デバイスプレビューセクション */}
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
      </main>

      {/* 新しいフッター */}
      <footer className="bg-gray-50 border-t dark:bg-gray-900 dark:border-gray-800">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* ブランド情報 */}
            <div className="space-y-4">
              <div className="flex items-center">
                <GraduationCap className="h-6 w-6 text-blue-600 mr-2" />
                <span className="text-xl font-bold">DevLearning</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                効率的な学習作成から目標達成まで、
                <br />
                学びのすべてをサポートします。
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-blue-500">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-blue-500">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-blue-500">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-blue-500">
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* サービス */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                サービス
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/goals"
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm"
                  >
                    目標設定
                  </Link>
                </li>
                <li>
                  <Link
                    href="/learning"
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm"
                  >
                    学習プラン作成
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tasks"
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm"
                  >
                    タスク管理
                  </Link>
                </li>
                <li>
                  <Link
                    href="/progress"
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm"
                  >
                    進捗管理
                  </Link>
                </li>
              </ul>
            </div>

            {/* サポート */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                サポート
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm flex items-center"
                  >
                    <HelpCircle className="h-4 w-4 mr-1" />
                    よくある質問
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm flex items-center"
                  >
                    <Mail className="h-4 w-4 mr-1" />
                    お問い合わせ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help"
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm flex items-center"
                  >
                    <HelpCircle className="h-4 w-4 mr-1" />
                    ヘルプセンター
                  </Link>
                </li>
              </ul>
            </div>

            {/* 会社情報 */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                会社情報
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm flex items-center"
                  >
                    <Info className="h-4 w-4 mr-1" />
                    会社概要
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm flex items-center"
                  >
                    <FileText className="h-4 w-4 mr-1" />
                    利用規約
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm flex items-center"
                  >
                    <Shield className="h-4 w-4 mr-1" />
                    プライバシーポリシー
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2025 DevLearning. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
