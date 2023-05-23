import { createClient } from '@supabase/supabase-js'
const SUPABASE_URL = 'https://wuyfukyjgcpffyzwslge.supabase.co'
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1eWZ1a3lqZ2NwZmZ5endzbGdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyMDc5MDYsImV4cCI6MTk5ODc4MzkwNn0.KI0-4c2qdpsywvTJDlsuBwcZ_4f2tCx6FGHcdHbL_M4'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
export { supabase }
