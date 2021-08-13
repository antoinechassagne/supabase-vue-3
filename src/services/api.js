import supabase from "./supabase";

export function fetchPosts() {
  return supabase.from("posts").select("title, content");
}
