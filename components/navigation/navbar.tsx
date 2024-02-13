"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Languages, SearchIcon } from "lucide-react";
import Logo from "./logo";
import { useStore } from "@/hooks/store";
import { MobileSidebar } from "./mobile-sidebar";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

const Navbar = () => {
  const { letsSearch } = useStore();
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 z-40 w-full px-10 py-5 gap-2 bg-white flex justify-between">
      <MobileSidebar />
      <div className="hidden md:block">
        <Logo />
      </div>
      {/* <p>{t(`courses.${1}.description`)}</p> */}
      <div>
        <form
          className="flex items-center"
          onSubmit={(e) => {
            e.preventDefault();
            router.push("/");
          }}
        >
          <Input
            type="text"
            placeholder={t("searchPlaceholder")}
            onChange={(e) => letsSearch(e.target.value)}
            className="flex h-10 lg:w-[30rem] bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset w-full  rounded-lg rounded-r-none focus-visible:ring-transparent pr-8"
          />
          <Button type="submit" className="rounded-none rounded-r-lg ">
            <SearchIcon className="h-5 w-5" />
          </Button>
        </form>
      </div>
      <div>
        <Select onValueChange={(value) => i18n.changeLanguage(value)}>
          <SelectTrigger className="ring-offset-background file:border-0 file:bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset  focus-visible:ring-transparent">
            <Languages />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="hi">Hindi</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </nav>
  );
};

export default Navbar;
