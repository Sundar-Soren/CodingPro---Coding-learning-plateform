import { Course, Section, dummyCourses } from "@/data";
import { useStore } from "@/hooks/store";
import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  MoreVertical,
  PauseCircleIcon,
  PlayCircleIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const CourseChapter: React.FC<{
  chapter: Section;
  chapterId: string;
  slug: string;
}> = ({ chapter, chapterId, slug }) => {
  const { updateUserProgress, userProgress } = useStore();

  const [course, setCourse] = useState<Course>();
  const { t } = useTranslation();

  useEffect(() => {
    const course = dummyCourses.find((course) => course.slug === slug);
    if (course) setCourse(course);
  }, [slug]);

  const sectionStatus =
    (course && userProgress[course?.id]?.[chapter.id]) || "not-started";

  const handleToggleSectionStatus = () => {
    const newStatus =
      sectionStatus === "completed" ? "not-started" : "completed";
    if (course)
      updateUserProgress(course?.id, chapter.id.toString(), newStatus);
  };

  return (
    <div className="relative">
      <Link href={`/course/${slug}/${chapter.id}`}>
        <div
          className={cn(
            " flex  items-center gap-2 py-5 px-2 rounded-md hover:bg-gray-100",
            chapterId === chapter.id.toString() && "bg-gray-200"
          )}
        >
          {sectionStatus === "completed" ? (
            <CheckCircle2 className="text-green-600" />
          ) : chapterId === chapter.id.toString() ? (
            <PauseCircleIcon />
          ) : (
            <PlayCircleIcon />
          )}
          {course && (
            <p className="font-medium">
              {t(
                `courses.${course?.id - 1}.sections.${course.sections.findIndex(
                  (section) => section.id === chapter.id
                )}.title`
              )}
            </p>
          )}
        </div>
      </Link>
      <div className="absolute right-2 top-5 z-10">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreVertical />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel> {t("common.progress")} </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {sectionStatus === "completed" ? (
              <DropdownMenuItem onClick={handleToggleSectionStatus}>
                {t("common.markAsNotCompleted")}
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem onClick={handleToggleSectionStatus}>
                {t("common.markAsCompleted")}
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default CourseChapter;
