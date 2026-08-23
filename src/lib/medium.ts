import { useQuery } from "@tanstack/react-query";

// Your Medium username (the part after the @ in your profile URL)
export const MEDIUM_USERNAME = "rihashehzadi2003";
export const MEDIUM_PROFILE_URL = `https://medium.com/@${MEDIUM_USERNAME}`;

const RSS_URL = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
const FEED_ENDPOINT = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
  RSS_URL,
)}`;

// How many posts to feature on the homepage before showing "View All"
export const HOMEPAGE_POST_LIMIT = 3;

export interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail?: string;
  categories?: string[];
}

interface RssToJsonResponse {
  status: string;
  items: MediumPost[];
}

export function stripHtml(html: string) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
}

export function estimateReadTime(text: string) {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

export function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

async function fetchMediumPosts(): Promise<MediumPost[]> {
  const res = await fetch(FEED_ENDPOINT);
  if (!res.ok) {
    throw new Error("Failed to fetch Medium posts");
  }
  const data: RssToJsonResponse = await res.json();
  if (data.status !== "ok") {
    throw new Error("Medium feed unavailable");
  }
  return data.items;
}

/**
 * Fetches all posts available from the RSS feed (Medium's RSS typically
 * returns the ~10 most recent posts). Used by both the homepage teaser
 * (which slices the first few) and the full "/blog" page (which shows all).
 */
export function useMediumPosts() {
  return useQuery({
    queryKey: ["medium-posts", MEDIUM_USERNAME],
    queryFn: fetchMediumPosts,
    staleTime: 1000 * 60 * 30, // 30 minutes
    retry: 1,
  });
}