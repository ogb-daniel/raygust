"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Key,
  BookOpen,
  LogOut,
  ChevronsUpDown,
  ExternalLink,
} from "lucide-react";
import type { UserResponse } from "@/lib/api/client";

export interface WorkspaceItem {
  id: string;
  name: string;
  email: string;
}

interface WorkspaceSwitcherProps {
  user?: UserResponse;
  currentWorkspace?: WorkspaceItem;
  onSelectAction?: (actionId: string) => void;
}

export default function WorkspaceSwitcher({
  user,
  currentWorkspace,
  onSelectAction,
}: WorkspaceSwitcherProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const formattedName = user?.email
    ? `${user.email
        .split("@")[0]
        .replace(/[\._-]/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase())}'s Workspace`
    : "Raygust Workspace";

  const initialWorkspace: WorkspaceItem = currentWorkspace ?? {
    id: user?.id ?? "default-ws",
    name: formattedName,
    email: user?.email ?? "developer@raygust.com",
  };

  const [selectedWorkspace, setSelectedWorkspace] =
    useState<WorkspaceItem>(initialWorkspace);
  const [activeItem, setActiveItem] = useState<string>("account");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (user?.email) {
      setSelectedWorkspace({
        id: user.id,
        name: `${user.email
          .split("@")[0]
          .replace(/[\._-]/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase())}'s Workspace`,
        email: user.email,
      });
    }
  }, [user]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const menuActions = [
    {
      id: "account",
      label: "Account Settings",
      icon: User,
      href: "/dashboard/settings",
    },
    {
      id: "api-keys",
      label: "API Keys",
      icon: Key,
      href: "/dashboard/api-keys",
    },
    {
      id: "docs",
      label: "Documentation",
      icon: BookOpen,
      href: "/docs",
      external: true,
    },
  ];

  const handleActionClick = (action: {
    id: string;
    href: string;
    external?: boolean;
  }) => {
    setActiveItem(action.id);
    if (onSelectAction) onSelectAction(action.id);
    setIsOpen(false);

    if (action.external) {
      window.open(action.href, "_blank", "noopener,noreferrer");
    } else {
      router.push(action.href);
    }
  };

  const handleLogout = () => {
    setIsOpen(false);
    router.push("/api/auth/logout");
  };

  return (
    <div className="relative w-full select-none" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="group flex w-full items-center justify-between gap-3 rounded-2xl border border-zinc-200/80 bg-white p-2.5 text-left shadow-xs transition-all duration-150 hover:border-zinc-300 hover:shadow-sm active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-white shadow-xs overflow-hidden">
            <span className="font-bold text-base tracking-tight bg-linear-to-br from-white to-zinc-400 bg-clip-text text-transparent">
              R
            </span>
            <div className="absolute inset-0 ring-1 ring-white/10 rounded-xl" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold tracking-tight text-zinc-900 leading-tight">
              {selectedWorkspace.name}
            </p>
            <p className="truncate text-xs font-normal text-zinc-400 mt-0.5 leading-tight">
              {selectedWorkspace.email}
            </p>
          </div>
        </div>

        <ChevronsUpDown
          className={`h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-200 ${
            isOpen ? "text-zinc-700 rotate-180" : "group-hover:text-zinc-600"
          }`}
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute left-0 right-0 top-full mt-2 z-50 overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-1.5 shadow-xl shadow-zinc-900/5 transition-all animate-in fade-in-0 zoom-in-95 duration-150"
        >
          <div className="flex flex-col gap-0.5">
            {menuActions.map((action) => {
              const Icon = action.icon;
              const isActive = activeItem === action.id;

              return (
                <button
                  key={action.id}
                  type="button"
                  role="menuitem"
                  onMouseEnter={() => setActiveItem(action.id)}
                  onClick={() => handleActionClick(action)}
                  className={`group flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm transition-all duration-150 text-left ${
                    isActive
                      ? "bg-accent/10 text-accent font-medium shadow-2xs"
                      : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 font-normal"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Icon
                      className={`h-4 w-4 shrink-0 transition-colors duration-150 ${
                        isActive
                          ? "text-accent"
                          : "text-zinc-400 group-hover:text-zinc-600"
                      }`}
                    />
                    <span className="truncate">{action.label}</span>
                  </div>

                  {action.external && (
                    <ExternalLink className="h-3.5 w-3.5 text-zinc-400 opacity-60" />
                  )}
                </button>
              );
            })}

            <div className="my-1 border-t border-zinc-100" />

            <button
              type="button"
              role="menuitem"
              onClick={handleLogout}
              className="group flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-zinc-600 hover:bg-red-50/70 hover:text-red-600 transition-all duration-150 text-left font-normal"
            >
              <LogOut className="h-4 w-4 shrink-0 text-zinc-400 group-hover:text-red-500 transition-colors duration-150" />
              <span>Sign out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
