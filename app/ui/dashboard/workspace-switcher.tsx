"use client";

import { useState, useRef, useEffect } from "react";
import {
  User,
  UserPlus,
  Tag,
  PlusCircle,
  ChevronsUpDown,
  Check,
} from "lucide-react";

import type { UserResponse } from "@/lib/api/client";

export interface WorkspaceItem {
  id: string;
  name: string;
  email: string;
  avatarColor?: string;
}

interface WorkspaceSwitcherProps {
  user?: UserResponse;
  currentWorkspace?: WorkspaceItem;
  onSelectAction?: (actionId: string) => void;
}

const DEFAULT_WORKSPACES: WorkspaceItem[] = [
  {
    id: "ws-1",
    name: "Lemberg Group Inc",
    email: "info@lemberg.com",
    avatarColor: "#0f0f11",
  },
  {
    id: "ws-2",
    name: "Raygust Workspace",
    email: "team@raygust.com",
    avatarColor: "#18181b",
  },
];

export default function WorkspaceSwitcher({
  user,
  currentWorkspace,
  onSelectAction,
}: WorkspaceSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Compute active workspace using real user data if present
  const initialWorkspace: WorkspaceItem = currentWorkspace ?? {
    id: user?.id ?? DEFAULT_WORKSPACES[0].id,
    name: user?.email
      ? `${user.email.split("@")[0].replace(/[\._-]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} Group Inc`
      : DEFAULT_WORKSPACES[0].name,
    email: user?.email ?? DEFAULT_WORKSPACES[0].email,
    avatarColor: "#0f0f11",
  };

  const [selectedWorkspace, setSelectedWorkspace] = useState<WorkspaceItem>(initialWorkspace);
  const [activeItem, setActiveItem] = useState<string>("account");
  const containerRef = useRef<HTMLDivElement>(null);

  // Synchronize when real user arrives
  useEffect(() => {
    if (user?.email) {
      setSelectedWorkspace({
        id: user.id,
        name: `${user.email.split("@")[0].replace(/[\._-]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} Group Inc`,
        email: user.email,
        avatarColor: "#0f0f11",
      });
    }
  }, [user]);

  // Close when clicking outside
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
      label: "Account",
      icon: User,
    },
    {
      id: "add-user",
      label: "Add user",
      icon: UserPlus,
    },
    {
      id: "pricing-plans",
      label: "Pricing plans",
      icon: Tag,
    },
    {
      id: "create-team",
      label: "Create team",
      icon: PlusCircle,
    },
  ];

  return (
    <div className="relative w-full select-none" ref={containerRef}>
      {/* Workspace Switcher Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="group flex w-full items-center justify-between gap-3 rounded-2xl border border-zinc-200/80 bg-white p-2.5 text-left shadow-xs transition-all duration-150 hover:border-zinc-300 hover:shadow-sm active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
      >
        <div className="flex items-center gap-3 min-w-0">
          {/* Avatar badge matching design */}
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-white shadow-xs overflow-hidden">
            {/* Mascot / lion stylized emblem */}
            <svg
              className="h-5 w-5 text-amber-500 transition-transform duration-200 group-hover:scale-105"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3 0 1.14-.64 2.13-1.58 2.63-.44.24-.72.7-.72 1.2v.67h-1.4v-.67c0-.5-.28-.96-.72-1.2C9.64 10.13 9 9.14 9 8c0-1.66 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
            </svg>
          </div>

          {/* Org details */}
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold tracking-tight text-zinc-900 leading-tight">
              {selectedWorkspace.name}
            </p>
            <p className="truncate text-xs font-normal text-zinc-400 mt-0.5 leading-tight">
              {selectedWorkspace.email}
            </p>
          </div>
        </div>

        {/* Dual Chevron */}
        <ChevronsUpDown
          className={`h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-200 ${
            isOpen ? "text-zinc-700 rotate-180" : "group-hover:text-zinc-600"
          }`}
        />
      </button>

      {/* Floating Popover Menu matching Screenshot 1 & 4 */}
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
                  onClick={() => {
                    setActiveItem(action.id);
                    if (onSelectAction) onSelectAction(action.id);
                    setIsOpen(false);
                  }}
                  className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-150 text-left ${
                    isActive
                      ? "bg-accent/10 text-accent font-medium shadow-2xs"
                      : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 font-normal"
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 shrink-0 transition-colors duration-150 ${
                      isActive
                        ? "text-accent"
                        : "text-zinc-400 group-hover:text-zinc-600"
                    }`}
                  />
                  <span className="flex-1">{action.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
