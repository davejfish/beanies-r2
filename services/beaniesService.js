const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getBeanies(name, starSign, { start, end }) {
    let response = client
        .from('beanie_babies')
        .select(`
        title, 
        id, 
        image, 
        astroSign`,
        { count: 'exact' });
    if (name) response = response.ilike('title', `%${name}%`);
    if (starSign) response = response.ilike('astroSign', `%${starSign}%`);

    response = response.range(start, end);

    const query = await response;
    return query;
}

export async function getBeanie(id) {
    const response = await client
        .from('beanie_babies')
        .select('*')
        .match({ id: id })
        .single();
    
    return response.data;
}