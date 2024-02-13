"use client";
import React, { useEffect, useState } from "react";
import CoursesCard from "./_components/courses-card";
import { Course, dummyCourses } from "@/data";
import { useStore } from "@/hooks/store";

interface UserProgress {
  courseProgress: Record<number, Record<string, string>>;
}

const Home = () => {
  const { search } = useStore();

  const filterCourses = (course: Course) => {
    if (search.trim() === "") {
      return true;
    }
    return (
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.description.toLowerCase().includes(search.toLowerCase()) ||
      course.sections.some(
        (section) =>
          section.title.toLowerCase().includes(search.toLowerCase()) ||
          section.lessons.some((lesson) =>
            lesson.toLowerCase().includes(search.toLowerCase())
          )
      )
    );
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {dummyCourses.filter(filterCourses).map((course, i) => (
          <>
            <CoursesCard key={i} course={course} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Home;
