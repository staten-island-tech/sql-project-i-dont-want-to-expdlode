<script>
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(
  'https://wuyfukyjgcpffyzwslge.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1eWZ1a3lqZ2NwZmZ5endzbGdlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MzIwNzkwNiwiZXhwIjoxOTk4NzgzOTA2fQ.hmCBj52q58hRA7Tr5LQTqoBkFUsVar--Nfvh583EfPQ'
)
console.log(supabase)
</script>

<template>
  <main></main>
</template>
