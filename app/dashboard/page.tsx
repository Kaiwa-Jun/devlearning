"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// モックデータ
const todaysTasks = [
  {
    id: 1,
    title: "React Hooksの基礎学習",
    description: "useState, useEffectの使い方を学ぶ",
    deadline: "14:00",
    completed: false,
    goal: "react",
  },
  {
    id: 2,
    title: "TypeScriptの型定義",
    description: "インターフェースについて学習",
    deadline: "16:00",
    completed: true,
    goal: "react",
  },
  {
    id: 3,
    title: "AWS EC2の基本",
    description: "EC2インスタンスの作成と管理について学習",
    deadline: "15:00",
    completed: false,
    goal: "aws",
  },
  {
    id: 4,
    title: "AWS IAMの理解",
    description: "ユーザー、グループ、ロールの概念を理解する",
    deadline: "17:00",
    completed: false,
    goal: "aws",
  },
];

const goalColors = {
  react: "border-l-violet-500",
  aws: "border-l-blue-500",
};

const goalNames = {
  react: "React.jsマスター",
  aws: "AWS認定ソリューションアーキテクト",
};

const learningData = [
  { date: "3/1", hours: 2 },
  { date: "3/2", hours: 3 },
  { date: "3/3", hours: 1.5 },
  { date: "3/4", hours: 4 },
  { date: "3/5", hours: 2.5 },
  { date: "3/6", hours: 3.5 },
  { date: "3/7", hours: 3 },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export default function DashboardPage() {
  return (
    <motion.div
      className="h-full p-4 space-y-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">ダッシュボード</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <motion.div variants={itemVariants}>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">今日のタスク</h3>
            <div className="space-y-4">
              {todaysTasks.map((task) => (
                <motion.div
                  key={task.id}
                  className={`flex items-start space-x-4 p-3 border-l-4 rounded-md ${
                    goalColors[task.goal as keyof typeof goalColors]
                  }`}
                  variants={itemVariants}
                >
                  <Checkbox checked={task.completed} />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{task.title}</p>
                        <span className="text-sm text-muted-foreground">
                          {goalNames[task.goal as keyof typeof goalNames]}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {task.deadline}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {task.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">学習時間の推移</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart data={learningData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="hours"
                    stroke="#2196F3"
                    strokeWidth={2}
                  />
                </RechartsLineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </motion.div>
      </div>

      <motion.div variants={itemVariants}>
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">目標達成度</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span>React.jsマスター</span>
                <span>65%</span>
              </div>
              <Progress value={65} />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span>AWS認定試験</span>
                <span>30%</span>
              </div>
              <Progress value={30} />
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}