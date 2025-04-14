import {
  LayoutDashboard,
  ListChecks,
  LineChart,
  Target,
  Sun,
  Calendar,
  Compass,
  BarChart2,
} from "lucide-react";

export default function UsageScenesSection() {
  return (
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
  );
}
