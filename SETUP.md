# Contact Form Setup with Supabase

## 1. Supabase Setup
1. Go to [supabase.com](https://supabase.com) and create a new project
2. In the SQL Editor, run the queries from `supabase-setup.sql`
3. Go to Settings > API to get your project URL and anon key

## 2. Environment Variables
Update `.env.local` with your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

## 3. Install Dependencies
```bash
npm install
```

## 4. Run Development Server
```bash
npm run dev
```

## 5. Test Contact Form
Visit http://localhost:3000 and scroll to the contact section to test the form.