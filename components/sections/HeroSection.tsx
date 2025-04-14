import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
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
  );
}
