import { useState, useCallback } from "react";
import { loadProgress, saveProgress } from "../utils/progress";

export function useProgress() {
  const [progress, setProgress] = useState(loadProgress);

  const toggleTopic = useCallback((topicId) => {
    setProgress((prev) => {
      const next = { ...prev, [topicId]: !prev[topicId] };
      saveProgress(next);
      return next;
    });
  }, []);

  const resetProgress = useCallback(() => {
    setProgress({});
    saveProgress({});
  }, []);

  return { progress, toggleTopic, resetProgress };
}
