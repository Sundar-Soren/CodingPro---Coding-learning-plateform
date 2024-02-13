import { Course } from "@/data";
import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import Image from "next/image";
import { BookOpen } from "lucide-react";
import Link from "next/link";
import ProgressBar from "./progress-bar";
import { useStore } from "@/hooks/store";
import { useTranslation } from "react-i18next";

type CoursesCardProps = {
  course: Course;
};

const CoursesCard: React.FC<CoursesCardProps> = ({ course }) => {
  const { getCourseCompletionPercentage } = useStore();

  const { t } = useTranslation();

  return (
    <Link href={`/course/${course.slug}/${course.sections[0].id}`}>
      <Card className="rounded-md shadow-sm p-2">
        <CardContent className="relative h-48">
          <Image
            src={course.thumbnail}
            alt={`${course.title} Thumbnail`}
            fill
            className="object-cover rounded-lg"
          />
        </CardContent>
        <CardTitle className="text-lg py-2">
          {t(`courses.${course.id - 1}.title`)}
        </CardTitle>
        <div className="flex gap-1 items-center font-medium">
          <BookOpen className="h-5 w-5" />
          <p>
            {course.sections.length} {t("common.chapters")}
          </p>
        </div>
        <div className="pt-5 pb-3">
          <ProgressBar value={getCourseCompletionPercentage(course.id)} />
        </div>
      </Card>
    </Link>
  );
};

export default CoursesCard;
