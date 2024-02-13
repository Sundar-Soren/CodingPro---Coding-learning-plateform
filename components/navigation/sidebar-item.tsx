import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next13-progressbar";
import React from "react";
import { useTranslation } from "react-i18next";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

const SidebarItem = ({ href, icon: Icon, label }: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useTranslation();
  const isActive =
    pathname === href ||
    (pathname.startsWith("/course") && label === "Courses");

  return (
    <div className=" w-4/5 mx-auto mt-2 ">
      <button
        onClick={() => router.push(href)}
        className={cn(
          "flex w-full rounded-lg px-5 py-3 ",
          isActive ? "bg-black/90 text-white hover:bg-black" : "hover:bg-white"
        )}
      >
        <div className={cn("flex gap-2 font-medium")}>
          <Icon size={22} />
          {t(`common.${label}`)}
        </div>
        <div />
      </button>
    </div>
  );
};

export default SidebarItem;
