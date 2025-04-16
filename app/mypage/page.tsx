"use client";

import { useAuth } from "@/context/AuthContext";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { UserCog, Mail, Calendar, BookOpen, Activity } from "lucide-react";
import { useState, useEffect } from "react";

export default function MyPage() {
  const { user } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>ログインしてください</p>
      </div>
    );
  }

  // メールアドレスの先頭文字を取得
  const userInitial = user.email?.[0]?.toUpperCase() || "U";

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">マイページ</h1>

      <div className="grid gap-6 md:grid-cols-12">
        {/* プロファイル情報 */}
        <Card className="p-6 md:col-span-4">
          <div className="flex flex-col items-center">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarFallback>{userInitial}</AvatarFallback>
              <AvatarImage src="" />
            </Avatar>
            <h2 className="text-xl font-semibold mb-2">{user.email}</h2>
            <p className="text-gray-500 text-sm mb-4">ユーザーID: {user.id}</p>
            <Button className="w-full mb-2">
              <UserCog className="mr-2 h-4 w-4" />
              プロフィール編集
            </Button>
          </div>
        </Card>

        {/* ユーザー情報 */}
        <div className="md:col-span-8 grid gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">ユーザー情報</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">メールアドレス</p>
                  <p>{user.email}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-gray-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">登録日</p>
                  <p>
                    {user.createdAt
                      ? new Date(user.createdAt).toLocaleDateString("ja-JP")
                      : "不明"}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <BookOpen className="h-5 w-5 text-blue-500 mr-2" />
                <h3 className="text-lg font-semibold">学習進捗</h3>
              </div>
              <p className="text-3xl font-bold">42%</p>
              <p className="text-sm text-gray-500">全体の学習進捗状況</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Activity className="h-5 w-5 text-green-500 mr-2" />
                <h3 className="text-lg font-semibold">達成目標</h3>
              </div>
              <p className="text-3xl font-bold">3/8</p>
              <p className="text-sm text-gray-500">達成した目標の数</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
