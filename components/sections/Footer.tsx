import {
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

export default function Footer() {
  return (
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
  );
}
