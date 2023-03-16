import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ujuyvlqophqlzdblrukv.supabase.co";
const supabaseAnonKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqdXl2bHFvcGhxbHpkYmxydWt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY1MzE2ODQsImV4cCI6MTk5MjEwNzY4NH0.Y7L7CwgmAGsLpt9ZIF-cLIz2wSQ4dhdzvbnLDLIr6jc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
