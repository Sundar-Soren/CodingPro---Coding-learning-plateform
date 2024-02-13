"use client";
import React, { useEffect, useState } from "react";
import { Next13ProgressBar } from "next13-progressbar";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return true;

  return (
    <>
      {children}
      <Next13ProgressBar
        height="4px"
        color="#0A2FFF"
        options={{ showSpinner: false }}
        showOnShallow
      />
    </>
  );
};

export default Providers;
