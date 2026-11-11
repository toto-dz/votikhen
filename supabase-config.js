window.nabnihaSupabase = window.supabase && typeof window.supabase.createClient === 'function'
  ? window.supabase.createClient(
      'https://qpjpearbzqbiuqxnkemt.supabase.co',
      'sb_publishable_7BuDhxlhOv-7BPBXJZaQag_2IULewYP'
    )
  : null;
