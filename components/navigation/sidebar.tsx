import { MainNav } from "@/components/navigation/main-nav";

export function Sidebar() {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-secondary/10">
      <div className="px-3 py-2 flex-1">
        <MainNav />
      </div>
    </div>
  );
}