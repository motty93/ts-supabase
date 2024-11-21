import { createClient } from '@supabase/supabase-js'
import type { Database } from '../supabase/types'

export const supabase = createClient<Database>(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_ANON_KEY || '',
)

async function fetchAggregatedData() {
  try {
    const { data, error } = await supabase.rpc('fetch_invoices_count_by_status')

    if (error) {
      console.error('Error executing query:', error)
      return
    }

    console.log(data)
  } catch (err) {
    console.error('Unexpected error:', err)
  }
}

fetchAggregatedData()
