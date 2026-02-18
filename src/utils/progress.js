const STORAGE_KEY = "nffmw-progress";

export function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

export function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function isTopicComplete(progress, topicId) {
  return !!progress[topicId];
}

export function getPhaseCompletion(progress, topics) {
  if (!topics.length) return 0;
  const done = topics.filter((t) => progress[t.id]).length;
  return Math.round((done / topics.length) * 100);
}

export function getOverallCompletion(progress, allTopics) {
  if (!allTopics.length) return 0;
  const done = allTopics.filter((t) => progress[t.id]).length;
  return Math.round((done / allTopics.length) * 100);
}

export function getSpeedRank(percentage) {
  if (percentage === 100) return { label: "Finished", color: "text-nfs-yellow" };
  if (percentage >= 50) return { label: "Speeding", color: "text-nfs-green" };
  if (percentage > 0) return { label: "Cruising", color: "text-nfs-cyan" };
  return { label: "Parked", color: "text-nfs-gray" };
}
