"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { differenceInDays, format, parseISO } from "date-fns";
import { ja } from "date-fns/locale";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const tabContentVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.2,
    },
  },
};

// モックデータ
const initialTasks = {
  overall: [
    {
      id: 1,
      title: "React基礎から応用までの完全習得",
      description: "Reactの基礎から応用まで、実践的なアプリケーション開発を通じて学習",
      deadline: "2024-12-31",
      status: "進行中",
      completed: false,
      goal: "react",
      monthlyTasks: [3, 4, 5, 6] // 関連する月次タスクのID
    },
    {
      id: 2,
      title: "AWS認定ソリューションアーキテクト資格取得",
      description: "AWS認定試験の合格を目指し、主要サービスの理解と実践的な構築経験を積む",
      deadline: "2025-06-30",
      status: "進行中",
      completed: false,
      goal: "aws",
      monthlyTasks: [7, 8, 9, 10] // 関連する月次タスクのID
    }
  ],
  monthly: [
    {
      id: 3,
      title: "React Hooks & Context",
      description: "Hooksの基本とContext APIによる状態管理の実装",
      deadline: "2025-04-30",
      status: "進行中",
      completed: false,
      goal: "react",
      parentTask: 1,
      weeklyTasks: [11, 12, 13, 14] // 関連する週次タスクのID
    },
    {
      id: 4,
      title: "Redux & RTK Query",
      description: "Reduxを使用した状態管理とRTK Queryによるデータフェッチング",
      deadline: "2025-05-31",
      status: "未着手",
      completed: false,
      goal: "react",
      parentTask: 1,
      weeklyTasks: []
    },
    {
      id: 5,
      title: "パフォーマンス最適化",
      description: "メモ化、コード分割、バンドルサイズ最適化の実装",
      deadline: "2025-06-30",
      status: "未着手",
      completed: false,
      goal: "react",
      parentTask: 1,
      weeklyTasks: []
    },
    {
      id: 6,
      title: "テスト駆動開発",
      description: "Jest & React Testing Libraryを使用したテストの実装",
      deadline: "2025-07-31",
      status: "未着手",
      completed: false,
      goal: "react",
      parentTask: 1,
      weeklyTasks: []
    },
    {
      id: 7,
      title: "EC2 & EBS完全理解",
      description: "EC2インスタンスとEBSの詳細設定と運用管理",
      deadline: "2025-04-30",
      status: "進行中",
      completed: false,
      goal: "aws",
      parentTask: 2,
      weeklyTasks: [15, 16, 17, 18] // 関連する週次タスクのID
    },
    {
      id: 8,
      title: "VPC & ネットワーキング",
      description: "VPCの設計とセキュリティグループの実装",
      deadline: "2025-05-31",
      status: "未着手",
      completed: false,
      goal: "aws",
      parentTask: 2,
      weeklyTasks: []
    },
    {
      id: 9,
      title: "S3 & CloudFront",
      description: "S3バケットの設定とCloudFrontによるCDNの実装",
      deadline: "2025-06-30",
      status: "未着手",
      completed: false,
      goal: "aws",
      parentTask: 2,
      weeklyTasks: []
    },
    {
      id: 10,
      title: "IAM & セキュリティ",
      description: "IAMポリシーとセキュリティベストプラクティスの実装",
      deadline: "2025-07-31",
      status: "未着手",
      completed: false,
      goal: "aws",
      parentTask: 2,
      weeklyTasks: []
    }
  ],
  weekly: [
    // React関連の週次タスク（4月分）
    {
      id: 11,
      title: "useState & useEffect実践",
      description: "基本的なHooksを使用したコンポーネントの実装",
      deadline: "2025-04-07",
      status: "完了",
      completed: true,
      goal: "react",
      parentTask: 3
    },
    {
      id: 12,
      title: "useReducer & useContext実装",
      description: "複雑な状態管理のためのHooksの実装",
      deadline: "2025-04-14",
      status: "進行中",
      completed: false,
      goal: "react",
      parentTask: 3
    },
    {
      id: 13,
      title: "カスタムHooks作成",
      description: "再利用可能なカスタムHooksの設計と実装",
      deadline: "2025-04-21",
      status: "未着手",
      completed: false,
      goal: "react",
      parentTask: 3
    },
    {
      id: 14,
      title: "Context API実践",
      description: "グローバル状態管理の実装と最適化",
      deadline: "2025-04-28",
      status: "未着手",
      completed: false,
      goal: "react",
      parentTask: 3
    },
    // AWS関連の週次タスク（4月分）
    {
      id: 15,
      title: "EC2インスタンスタイプ",
      description: "各インスタンスタイプの特徴と選定基準の理解",
      deadline: "2025-04-07",
      status: "完了",
      completed: true,
      goal: "aws",
      parentTask: 7
    },
    {
      id: 16,
      title: "EBSボリュームタイプ",
      description: "ストレージタイプの特徴と選定基準の理解",
      deadline: "2025-04-14",
      status: "進行中",
      completed: false,
      goal: "aws",
      parentTask: 7
    },
    {
      id: 17,
      title: "AMI作成と管理",
      description: "カスタムAMIの作成とライフサイクル管理",
      deadline: "2025-04-21",
      status: "未着手",
      completed: false,
      goal: "aws",
      parentTask: 7
    },
    {
      id: 18,
      title: "Auto Scaling設定",
      description: "Auto Scalingグループの設定と監視",
      deadline: "2025-04-28",
      status: "未着手",
      completed: false,
      goal: "aws",
      parentTask: 7
    }
  ]
};

const goalColors = {
  react: "border-l-violet-500",
  aws: "border-l-blue-500",
};

const goalNames = {
  react: "React.jsマスター",
  aws: "AWS認定ソリューションアーキテクト",
};

export default function TasksPage() {
  const [tasks, setTasks] = useState(initialTasks);
  const [period, setPeriod] = useState("overall");
  const [goalFilter, setGoalFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const today = new Date(2025, 3, 14); // 2025/04/14

  const getRelativeDays = (deadline: string) => {
    const days = differenceInDays(parseISO(deadline), today);
    if (days === 0) return "今日まで";
    if (days < 0) return `${Math.abs(days)}日経過`;
    return `残り${days}日`;
  };

  const filteredTasks = tasks[period as keyof typeof tasks].filter((task) => {
    const goalMatch = goalFilter === "all" ? true : task.goal === goalFilter;
    const statusMatch = statusFilter === "all" 
      ? true 
      : statusFilter === "completed" 
        ? task.completed 
        : !task.completed;

    // 月次タスクの場合、現在の月のタスクのみ表示
    if (period === "monthly") {
      const taskMonth = parseISO(task.deadline).getMonth();
      const currentMonth = today.getMonth();
      if (taskMonth !== currentMonth) return false;
    }

    // 週次タスクの場合、現在の月のタスクのみ表示
    if (period === "weekly") {
      const taskMonth = parseISO(task.deadline).getMonth();
      const currentMonth = today.getMonth();
      if (taskMonth !== currentMonth) return false;
    }

    return goalMatch && statusMatch;
  });

  const toggleTask = (taskId: number) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [period]: prevTasks[period as keyof typeof tasks].map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  return (
    <motion.div
      className="p-6 max-w-7xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">タスク管理</h1>
        <div className="flex gap-4">
          <Select value={goalFilter} onValueChange={setGoalFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="目標でフィルター" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">すべての目標</SelectItem>
              <SelectItem value="react">React.jsマスター</SelectItem>
              <SelectItem value="aws">AWS認定試験</SelectItem>
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="状態でフィルター" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">すべて</SelectItem>
              <SelectItem value="ongoing">進行中</SelectItem>
              <SelectItem value="completed">完了</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            新規タスク
          </Button>
        </div>
      </div>

      <Tabs value={period} onValueChange={setPeriod} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overall">全体</TabsTrigger>
          <TabsTrigger value="monthly">月次タスク</TabsTrigger>
          <TabsTrigger value="weekly">週次タスク</TabsTrigger>
        </TabsList>

        <AnimatePresence mode="wait">
          <motion.div
            key={period}
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <TabsContent value={period} className="space-y-4" forceMount>
              <div className="grid gap-4">
                {filteredTasks.map((task) => (
                  <motion.div key={task.id} variants={itemVariants}>
                    <Card 
                      className={`p-4 border-l-4 ${goalColors[task.goal as keyof typeof goalColors]}`}
                    >
                      <div className="flex items-start gap-4">
                        <Checkbox
                          checked={task.completed}
                          onCheckedChange={() => toggleTask(task.id)}
                        />
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="font-semibold">{task.title}</h3>
                              <span className="text-sm text-muted-foreground">
                                {goalNames[task.goal as keyof typeof goalNames]}
                              </span>
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {task.status}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {task.description}
                          </p>
                          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {format(parseISO(task.deadline), 'yyyy/MM/dd', { locale: ja })}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {getRelativeDays(task.deadline)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </motion.div>
        </AnimatePresence>
      </Tabs>
    </motion.div>
  );
}