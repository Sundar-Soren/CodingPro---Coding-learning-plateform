import { Progress } from "@/components/ui/progress";
import React from "react";
import { useTranslation } from "react-i18next";

const ProgressBar = ({ value }: { value: number }) => {
  const { t } = useTranslation();

  return (
    <div>
      <Progress value={value} />
      <p className="pt-2">
        {value} % {t("common.pcompleted")}
      </p>
    </div>
  );
};

export default ProgressBar;
