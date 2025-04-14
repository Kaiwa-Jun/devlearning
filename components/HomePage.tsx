"use client";

import { Button } from "@/components/ui/button";
import {
  Target,
  BookOpen,
  BarChart2,
  ArrowRight,
  Clock,
  Brain,
  Share2,
  Users,
  Star,
  Settings,
  LayoutDashboard,
  ListChecks,
  LineChart,
  Sun,
  Calendar,
  Compass,
  ChevronRight,
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
// import { Header } from "@/components/navigation/header";
import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import ThreeStepsSection from "@/components/sections/ThreeStepsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import UsageScenesSection from "@/components/sections/UsageScenesSection";
import DevicePreviewSection from "@/components/sections/DevicePreviewSection";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <Header /> */}

      <main className="flex-1">
        <HeroSection />
        <ThreeStepsSection />
        <FeaturesSection />
        <UsageScenesSection />
        <DevicePreviewSection />
      </main>

      <Footer />
    </div>
  );
}
