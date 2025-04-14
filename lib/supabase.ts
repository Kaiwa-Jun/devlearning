import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://apgpapedbjhugfpqvyjb.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwZ3BhcGVkYmpodWdmcHF2eWpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2NDI4NzMsImV4cCI6MjA2MDIxODg3M30.po8toAW9eeIrN-mSeb0aGjsh7cZK7uay5BP8mvOjD-I";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
