"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Pencil, Trash2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface LearningMaterial {
  id: string;
  type: string;
  title: string;
  url: string;
}

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

// サンプルデータ
const initialGoals = [
  {
    id: 1,
    title: "React.jsマスター",
    description: "Reactの基礎から応用まで学習し、実践的なアプリケーションを作成する",
    deadline: "2024-12-31",
    progress: 65,
    type: "short",
    monthlyGoals: [
      {
        id: 1,
        title: "React Hooks",
        deadline: "2024-05-31",
        progress: 80,
      },
      {
        id: 2,
        title: "状態管理（Redux）",
        deadline: "2024-06-30",
        progress: 60,
      },
      {
        id: 3,
        title: "パフォーマンス最適化",
        deadline: "2024-07-31",
        progress: 40,
      },
      {
        id: 4,
        title: "テスト駆動開発",
        deadline: "2024-08-31",
        progress: 20,
      }
    ],
    weeklyGoals: [
      {
        id: 1,
        title: "useStateとuseEffect",
        deadline: "2024-05-07",
        progress: 90,
      },
      {
        id: 2,
        title: "useContextとuseReducer",
        deadline: "2024-05-14",
        progress: 70,
      },
      {
        id: 3,
        title: "カスタムフック作成",
        deadline: "2024-05-21",
        progress: 50,
      }
    ]
  },
  {
    id: 2,
    title: "AWS認定ソリューションアーキテクト",
    description: "AWS認定試験に合格し、クラウドアーキテクチャの知識を深める",
    deadline: "2025-06-30",
    progress: 30,
    type: "long",
    monthlyGoals: [
      {
        id: 1,
        title: "EC2とEBS",
        deadline: "2024-05-31",
        progress: 70,
      },
      {
        id: 2,
        title: "VPCとネットワーク",
        deadline: "2024-06-30",
        progress: 50,
      },
      {
        id: 3,
        title: "S3とストレージ",
        deadline: "2024-07-31",
        progress: 30,
      }
    ],
    weeklyGoals: [
      {
        id: 1,
        title: "EC2インスタンスタイプ",
        deadline: "2024-05-07",
        progress: 80,
      },
      {
        id: 2,
        title: "EBSボリュームタイプ",
        deadline: "2024-05-14",
        progress: 60,
      },
      {
        id: 3,
        title: "AMIとスナップショット",
        deadline: "2024-05-21",
        progress: 40,
      }
    ]
  }
];

export default function GoalsPage() {
  const [goals, setGoals] = useState(initialGoals);
  const [isOpen, setIsOpen] = useState(false);
  const [newGoal, setNewGoal] = useState({
    title: "",
    description: "",
    deadline: "",
    type: "short",
    category: "",
    difficulty: "medium",
    learningMethod: "",
    prerequisites: "",
    expectedOutcome: "",
    resources: "",
  });
  const [learningMaterials, setLearningMaterials] = useState<LearningMaterial[]>([]);
  const [selectedTabs, setSelectedTabs] = useState<{ [key: number]: string }>(
    goals.reduce((acc, goal) => ({ ...acc, [goal.id]: "overall" }), {})
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = goals.length + 1;
    setGoals([
      ...goals,
      {
        id: newId,
        ...newGoal,
        progress: 0,
        monthlyGoals: [],
        weeklyGoals: []
      },
    ]);
    setSelectedTabs(prev => ({ ...prev, [newId]: "overall" }));
    setIsOpen(false);
    setNewGoal({
      title: "",
      description: "",
      deadline: "",
      type: "short",
      category: "",
      difficulty: "medium",
      learningMethod: "",
      prerequisites: "",
      expectedOutcome: "",
      resources: "",
    });
    setLearningMaterials([]);
  };

  const handleTabChange = (goalId: number, value: string) => {
    setSelectedTabs(prev => ({ ...prev, [goalId]: value }));
  };

  const addLearningMaterial = () => {
    const newMaterial: LearningMaterial = {
      id: crypto.randomUUID(),
      type: "book",
      title: "",
      url: "",
    };
    setLearningMaterials([...learningMaterials, newMaterial]);
  };

  const updateLearningMaterial = (id: string, field: keyof LearningMaterial, value: string) => {
    setLearningMaterials(materials =>
      materials.map(material =>
        material.id === id ? { ...material, [field]: value } : material
      )
    );
  };

  const removeLearningMaterial = (id: string) => {
    setLearningMaterials(materials => materials.filter(material => material.id !== id));
  };

  return (
    <motion.div
      className="p-6 max-w-7xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">目標設定</h1>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              新しい目標を追加
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] lg:max-w-[800px] max-h-[90vh] p-0">
            <form onSubmit={handleSubmit}>
              <DialogHeader className="px-6 pt-6">
                <DialogTitle>新しい目標の設定</DialogTitle>
                <DialogDescription>
                  目標の詳細を入力してください。AIが最適な学習計画を生成します。
                </DialogDescription>
              </DialogHeader>
              <div className="px-6 py-4 overflow-y-auto max-h-[calc(90vh-200px)]">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">目標タイトル</Label>
                    <Input
                      id="title"
                      value={newGoal.title}
                      onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
                      placeholder="例: React.jsマスター"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">詳細説明</Label>
                    <Textarea
                      id="description"
                      value={newGoal.description}
                      onChange={(e) => setNewGoal({ ...newGoal, description: e.target.value })}
                      placeholder="目標の詳細を記述してください"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="deadline">目標期限</Label>
                      <Input
                        id="deadline"
                        type="date"
                        value={newGoal.deadline}
                        onChange={(e) => setNewGoal({ ...newGoal, deadline: e.target.value })}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="category">カテゴリー</Label>
                      <Select
                        value={newGoal.category}
                        onValueChange={(value) => setNewGoal({ ...newGoal, category: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="カテゴリーを選択" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="programming">プログラミング</SelectItem>
                          <SelectItem value="infrastructure">インフラ</SelectItem>
                          <SelectItem value="design">デザイン</SelectItem>
                          <SelectItem value="management">マネジメント</SelectItem>
                          <SelectItem value="certification">資格</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="difficulty">難易度</Label>
                      <Select
                        value={newGoal.difficulty}
                        onValueChange={(value) => setNewGoal({ ...newGoal, difficulty: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="難易度を選択" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">入門</SelectItem>
                          <SelectItem value="easy">簡単</SelectItem>
                          <SelectItem value="medium">中級</SelectItem>
                          <SelectItem value="advanced">上級</SelectItem>
                          <SelectItem value="expert">エキスパート</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="learningMethod">学習方法</Label>
                      <Select
                        value={newGoal.learningMethod}
                        onValueChange={(value) => setNewGoal({ ...newGoal, learningMethod: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="学習方法を選択" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="reading">読書</SelectItem>
                          <SelectItem value="practice">実践</SelectItem>
                          <SelectItem value="video">動画学習</SelectItem>
                          <SelectItem value="project">プロジェクト</SelectItem>
                          <SelectItem value="mixed">複合的</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="prerequisites">前提知識・スキル</Label>
                    <Textarea
                      id="prerequisites"
                      value={newGoal.prerequisites}
                      onChange={(e) => setNewGoal({ ...newGoal, prerequisites: e.target.value })}
                      placeholder="必要な前提知識やスキルを記述してください"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="expectedOutcome">期待する成果</Label>
                    <Textarea
                      id="expectedOutcome"
                      value={newGoal.expectedOutcome}
                      onChange={(e) => setNewGoal({ ...newGoal, expectedOutcome: e.target.value })}
                      placeholder="目標達成時に期待する具体的な成果を記述してください"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Label>学習教材</Label>
                      <Button type="button" onClick={addLearningMaterial} variant="outline" size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        教材を追加
                      </Button>
                    </div>
                    <div className="space-y-4">
                      {learningMaterials.map((material) => (
                        <div key={material.id} className="flex gap-4 items-start">
                          <div className="flex-1 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <Select
                                value={material.type}
                                onValueChange={(value) => updateLearningMaterial(material.id, 'type', value)}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="教材タイプ" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="book">書籍</SelectItem>
                                  <SelectItem value="video">動画</SelectItem>
                                  <SelectItem value="course">オンラインコース</SelectItem>
                                  <SelectItem value="document">ドキュメント</SelectItem>
                                </SelectContent>
                              </Select>
                              <Input
                                placeholder="教材タイトル"
                                value={material.title}
                                onChange={(e) => updateLearningMaterial(material.id, 'title', e.target.value)}
                              />
                            </div>
                            <Input
                              placeholder="URL"
                              value={material.url}
                              onChange={(e) => updateLearningMaterial(material.id, 'url', e.target.value)}
                            />
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removeLearningMaterial(material.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="resources">その他のリソース</Label>
                    <Textarea
                      id="resources"
                      value={newGoal.resources}
                      onChange={(e) => setNewGoal({ ...newGoal, resources: e.target.value })}
                      placeholder="その他の利用予定のリソースを記述してください"
                    />
                  </div>
                </div>
              </div>
              <DialogFooter className="px-6 py-4 border-t">
                <Button type="submit">AIで学習計画を生成</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6">
        {goals.map((goal) => (
          <motion.div key={goal.id} variants={itemVariants}>
            <Card className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{goal.title}</h3>
                  <p className="text-muted-foreground mt-1">{goal.description}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Tabs 
                defaultValue="overall" 
                className="space-y-4"
                value={selectedTabs[goal.id]}
                onValueChange={(value) => handleTabChange(goal.id, value)}
              >
                <TabsList>
                  <TabsTrigger value="overall">全体</TabsTrigger>
                  <TabsTrigger value="monthly">月次目標</TabsTrigger>
                  <TabsTrigger value="weekly">週次目標</TabsTrigger>
                </TabsList>

                <AnimatePresence mode="wait">
                  {selectedTabs[goal.id] === "overall" && (
                    <motion.div
                      key="overall"
                      variants={tabContentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <TabsContent value="overall" className="space-y-4" forceMount>
                        <div>
                          <div className="flex justify-end text-sm mb-2">
                            <span>{goal.progress}%</span>
                          </div>
                          <Progress value={goal.progress} />
                        </div>
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>期限: {goal.deadline}</span>
                          <span>{goal.type === "short" ? "短期目標" : "長期目標"}</span>
                        </div>
                      </TabsContent>
                    </motion.div>
                  )}

                  {selectedTabs[goal.id] === "monthly" && (
                    <motion.div
                      key="monthly"
                      variants={tabContentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <TabsContent value="monthly" className="space-y-4" forceMount>
                        {goal.monthlyGoals.map((monthlyGoal) => (
                          <div key={monthlyGoal.id} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <h4 className="font-medium">{monthlyGoal.title}</h4>
                              <span className="text-sm text-muted-foreground">
                                期限: {monthlyGoal.deadline}
                              </span>
                            </div>
                            <div className="flex justify-end text-sm mb-1">
                              <span>{monthlyGoal.progress}%</span>
                            </div>
                            <Progress value={monthlyGoal.progress} />
                          </div>
                        ))}
                      </TabsContent>
                    </motion.div>
                  )}

                  {selectedTabs[goal.id] === "weekly" && (
                    <motion.div
                      key="weekly"
                      variants={tabContentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <TabsContent value="weekly" className="space-y-4" forceMount>
                        {goal.weeklyGoals.map((weeklyGoal) => (
                          <div key={weeklyGoal.id} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <h4 className="font-medium">{weeklyGoal.title}</h4>
                              <span className="text-sm text-muted-foreground">
                                期限: {weeklyGoal.deadline}
                              </span>
                            </div>
                            <div className="flex justify-end text-sm mb-1">
                              <span>{weeklyGoal.progress}%</span>
                            </div>
                            <Progress value={weeklyGoal.progress} />
                          </div>
                        ))}
                      </TabsContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Tabs>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}