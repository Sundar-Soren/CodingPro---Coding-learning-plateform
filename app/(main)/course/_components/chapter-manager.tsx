import React from "react";
import CourseChapter from "../../_components/course-chapter";
import { Section } from "@/data";

const ChapterManage: React.FC<{
  sections: Section[];
  chapterId: string;
  slug: string;
}> = ({ chapterId, sections, slug }) => {
  return (
    <div>
      {sections.map((chapter) => (
        <CourseChapter
          key={chapter.id}
          chapter={chapter}
          chapterId={chapterId}
          slug={slug}
        />
      ))}
    </div>
  );
};

export default ChapterManage;
