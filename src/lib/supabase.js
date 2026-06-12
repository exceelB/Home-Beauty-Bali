import { createClient }
from '@supabase/supabase-js'

export const supabase =
createClient(
  'https://oqbpkteunutiqfczassg.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xYnBrdGV1bnV0aXFmY3phc3NnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEyNDkzNDUsImV4cCI6MjA5NjgyNTM0NX0.VSXpf2hbiLu_fBribtUCDZqN_c82uHoyrK6YanDTiYo'
)