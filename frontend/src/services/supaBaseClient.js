
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://edgslmxymwbjnvdzutdv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkZ3NsbXh5bXdiam52ZHp1dGR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxMDU5ODcsImV4cCI6MjA2MzY4MTk4N30.dfebhCqrQyLtHwuiXmjtR_vD3R4MrMqXQ7-n6PjpZV4')

export default supabase