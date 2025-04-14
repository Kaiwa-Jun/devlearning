"use client";

import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { useState } from "react";

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

const mockData = {
  week: {
    lineChart: [
      { name: "月", value: 2 },
      { name: "火", value: 3 },
      { name: "水", value: 1.5 },
      { name: "木", value: 4 },
      { name: "金", value: 2.5 },
      { name: "土", value: 3.5 },
      { name: "日", value: 3 },
    ],
    pieChart: [
      { name: "完了", value: 35 },
      { name: "進行中", value: 45 },
      { name: "未着手", value: 20 },
    ],
  },
  month: {
    lineChart: [
      { name: "第1週", value: 12 },
      { name: "第2週", value: 15 },
      { name: "第3週", value: 18 },
      { name: "第4週", value: 14 },
    ],
    pieChart: [
      { name: "完了", value: 45 },
      { name: "進行中", value: 35 },
      { name: "未着手", value: 20 },
    ],
  },
  year: {
    lineChart: [
      { name: "1月", value: 45 },
      { name: "2月", value: 52 },
      { name: "3月", value: 48 },
      { name: "4月", value: 60 },
      { name: "5月", value: 55 },
      { name: "6月", value: 65 },
      { name: "7月", value: 58 },
      { name: "8月", value: 62 },
      { name: "9月", value: 70 },
      { name: "10月", value: 68 },
      { name: "11月", value: 72 },
      { name: "12月", value: 75 },
    ],
    pieChart: [
      { name: "完了", value: 55 },
      { name: "進行中", value: 30 },
      { name: "未着手", value: 15 },
    ],
  },
};

const COLORS = ["#4CAF50", "#2196F3", "#9E9E9E"];

const periodLabels = {
  week: "週間",
  month: "月間",
  year: "年間",
};

export default function ProgressPage() {
  const [period, setPeriod] = useState<"week" | "month" | "year">("week");

  return (
    <motion.div
      className="p-6 max-w-7xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">進捗管理</h1>
        <Select value={period} onValueChange={(value: "week" | "month" | "year") => setPeriod(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={`${periodLabels[period]}で表示`} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week">週間</SelectItem>
            <SelectItem value="month">月間</SelectItem>
            <SelectItem value="year">年間</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={itemVariants}>
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">
              {periodLabels[period]}学習時間の推移
            </h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockData[period].lineChart}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#2196F3"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">
              {periodLabels[period]}タスク完了状況
            </h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={mockData[period].pieChart}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {mockData[period].pieChart.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="md:col-span-2">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">目標達成度</h2>
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
      </div>
    </motion.div>
  );
}