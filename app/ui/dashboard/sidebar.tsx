"use client";

import WorkspaceSwitcher from "./workspace-switcher";
import type { UserResponse } from "@/lib/api/client";

export default function Sidebar({ user }: { user?: UserResponse }) {
  return (
    <aside className="w-64 shrink-0 h-screen p-4 flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <WorkspaceSwitcher user={user} />

        <div className="space-y-3 pt-2">
          <div className="h-10 rounded-xl bg-zinc-200/50 border border-dashed border-zinc-300 flex items-center px-3 text-xs text-zinc-400">
            Search bar (upcoming)
          </div>

          <div className="space-y-1.5 pt-1">
            <div className="h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center px-3 text-xs font-medium text-accent">
              Dashboard (active preview)
            </div>
            <div className="h-9 rounded-xl bg-zinc-200/30 flex items-center px-3 text-xs text-zinc-400">
              Documents
            </div>
            <div className="h-9 rounded-xl bg-zinc-200/30 flex items-center px-3 text-xs text-zinc-400">
              Conversations
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-zinc-200/60">
        <div className="h-12 rounded-xl bg-zinc-200/30 border border-dashed border-zinc-300 flex items-center px-3 text-xs text-zinc-400">
          User profile (upcoming)
        </div>
      </div>
    </aside>
  );
}
