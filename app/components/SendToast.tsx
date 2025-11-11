"use client";

import { useEffect, ReactNode } from "react";
import { toast } from "sonner";

type ToastType =
  | "message"
  | "success"
  | "error"
  | "info"
  | "warning"
  | "loading";

interface SendToastProps {
  toastContent: ReactNode;
  toastDuration?: number;
  timeDelay?: number;
  toastType?: ToastType;
}

export default function SendToast({
  toastContent,
  toastDuration = 4000,
  timeDelay = 1000,
  toastType = "message",
}: SendToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Safely select the correct toast method
      const showToast = (() => {
        switch (toastType) {
          case "success":
            return toast.success;
          case "error":
            return toast.error;
          case "info":
            return toast.info;
          case "warning":
            return toast.warning;
          case "loading":
            return toast.loading;
          default:
            return toast;
        }
      })();

      showToast(toastContent, { duration: toastDuration });
    }, timeDelay);

    return () => clearTimeout(timer);
  }, [toastContent, toastDuration, timeDelay, toastType]);

  return null;
}
