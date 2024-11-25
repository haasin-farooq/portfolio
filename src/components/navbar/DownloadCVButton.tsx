"use client";

import { type FC } from "react";
import { Button } from "../common/Button";

interface DownloadCVButtonProps {
  className?: string;
}

export const DownloadCVButton: FC<DownloadCVButtonProps> = ({ className }) => {
  const onDownloadCV = () => {
    const pdfUrl = "cv.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Haasin Farooq CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button className={className} label="Download CV" onClick={onDownloadCV} />
  );
};
