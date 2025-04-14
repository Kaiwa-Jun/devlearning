import { Target, BookOpen, BarChart2, ArrowRight } from "lucide-react";

export default function ThreeStepsSection() {
  return (
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
  );
}
