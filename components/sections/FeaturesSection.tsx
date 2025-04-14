import { Clock, Brain, BarChart2, Share2, Star, Settings } from "lucide-react";

export default function FeaturesSection() {
  return (
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
            <h3 className="text-xl font-bold mb-2">おすすめ学習コンテンツ</h3>
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
  );
}
