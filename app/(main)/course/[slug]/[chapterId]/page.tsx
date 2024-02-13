"use client";
import { Course, Section, dummyCourses } from "@/data";
import React, { Suspense, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import VideoPlayer from "@/app/(main)/_components/video-player";
import ProgressBar from "@/app/(main)/_components/progress-bar";
import ChapterManage from "../../_components/chapter-manager";
import { useStore } from "@/hooks/store";
import { useTranslation } from "react-i18next";

const page = ({ params }: { params: { slug: string; chapterId: string } }) => {
  const [course, setCourse] = useState<Course>();
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [getTheCurrentCahpter, setGetTheCurrentCahpter] = useState<Section>();

  useEffect(() => {
    const selectedCourse = dummyCourses.find(
      (course) => course.slug === params.slug
    );
    if (selectedCourse) {
      setCourse(selectedCourse);

      const getTheChapter = selectedCourse.sections.find(
        (chapter) => chapter.id.toString() === params.chapterId
      );

      if (getTheChapter) {
        setGetTheCurrentCahpter(getTheChapter);
        setVideoUrl(getTheChapter.videoLink);
      }
    }
  }, [params.slug, params.chapterId]);

  const { getCourseCompletionPercentage } = useStore();
  const { t } = useTranslation();

  return (
    <div className="flex gap-5">
      <div className="w-3/5">
        <div>
          <Suspense fallback="Loading..">
            <VideoPlayer videoUrl={videoUrl} />
          </Suspense>
        </div>
        <div className="mt-2">
          {course && (
            <Card>
              <div className="flex gap-1 items-center font-medium mt-1">
                <BookOpen className="h-5 w-5" />
                <p>
                  {course?.sections.length} {t("common.chapters")}
                </p>
              </div>
              <CardTitle>{t(`courses.${course?.id - 1}.title`)}</CardTitle>
              <CardDescription className="mt-2">
                {t(`courses.${course?.id - 1}.description`)}
              </CardDescription>
              <CardContent className="px-0 pt-2 flex gap-1 flex-wrap">
                {getTheCurrentCahpter?.lessons.map((lession, i) => (
                  <div
                    className="px-1 py-1 font-medium text-xs  border-2 rounded-md"
                    key={i}
                  >
                    {t(
                      `courses.${
                        course.id - 1
                      }.sections.${course.sections.findIndex(
                        (section) => section.id == getTheCurrentCahpter.id
                      )}.lessons.${i}`
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      <div className="w-2/5">
        {course && (
          <div>
            <h1 className="font-semibold text-lg">
              {t(`courses.${course?.id - 1}.title`)}{" "}
            </h1>
            <ProgressBar value={getCourseCompletionPercentage(course?.id)} />
          </div>
        )}
        <div className="mt-2">
          {course && course?.sections.length > 0 && (
            <ChapterManage
              sections={course?.sections}
              chapterId={params.chapterId}
              slug={params.slug}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
