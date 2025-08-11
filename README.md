# Abhishek Kumar Portfolio - Complete Setup Guide

## Prerequisites
- Node.js 18+ installed
- Git installed
- Supabase account

## Step 1: Project Setup

```bash
# Clone or download the project
cd abhishek-portfolio

# Install dependencies
npm install
```

## Step 2: Environment Configuration

Create `.env.local` file in root directory:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Step 3: Supabase Database Setup

1. **Create Supabase Project:**
   - Go to [supabase.com](https://supabase.com)
   - Click "New Project"
   - Choose organization and enter project details

2. **Create Database Table:**
   - Go to SQL Editor in Supabase dashboard
   - Run this SQL:

```sql
-- Create contacts table
-- Create contacts table with enhanced fields
CREATE TABLE contacts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) DEFAULT 'No subject',
    message TEXT NOT NULL,
    topic VARCHAR(100),
    user_agent TEXT,
    ip_address VARCHAR(45),
    status VARCHAR(20) DEFAULT 'new',
    priority VARCHAR(10) DEFAULT 'normal',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for better performance
CREATE INDEX idx_contacts_email ON contacts(email);
CREATE INDEX idx_contacts_created_at ON contacts(created_at);
CREATE INDEX idx_contacts_status ON contacts(status);

-- Enable Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts
CREATE POLICY "Allow public inserts" ON contacts
    FOR INSERT WITH CHECK (true);

-- Create policy to allow admin reads (you can modify this based on your needs)
CREATE POLICY "Allow admin reads" ON contacts
    FOR SELECT USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_contacts_updated_at 
    BEFORE UPDATE ON contacts 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Create a view for contact statistics (optional)
CREATE VIEW contact_stats AS
SELECT 
    COUNT(*) as total_contacts,
    COUNT(CASE WHEN status = 'new' THEN 1 END) as new_contacts,
    COUNT(CASE WHEN status = 'replied' THEN 1 END) as replied_contacts,
    COUNT(CASE WHEN created_at >= NOW() - INTERVAL '7 days' THEN 1 END) as contacts_this_week,
    COUNT(CASE WHEN created_at >= NOW() - INTERVAL '30 days' THEN 1 END) as contacts_this_month
FROM contacts;
```

3. **Get API Credentials:**
   - Go to Settings → API
   - Copy "Project URL" and "anon public" key
   - Update `.env.local` with these values

## Step 4: Add Profile Image

Replace `/public/abhishek.jpeg` with your profile photo:
- Recommended size: 400x400px or larger
- Square aspect ratio preferred
- Format: JPG, PNG, or WebP

## Step 5: Add Resume File

Add your resume as `/public/Abhishek_Resume.pdf`

## Step 6: Run Development Server

```bash
npm run dev
```

Visit: http://localhost:3000

## Step 7: Test Contact Form

1. Scroll to contact section
2. Fill out the form
3. Submit to test Supabase integration
4. Check Supabase dashboard → Table Editor → contacts

## Step 8: Build for Production

```bash
npm run build
npm start
```

## Troubleshooting

**Contact form not working:**
- Check `.env.local` has correct Supabase credentials
- Verify contacts table exists in Supabase
- Check browser console for errors

**Images not loading:**
- Ensure files are in `/public/` directory
- Check file names match exactly
- Verify image formats are supported

**Build errors:**
- Run `npm install` to ensure all dependencies
- Check TypeScript errors in terminal
- Verify all imports are correct

## Deployment Options

**Vercel (Recommended):**
1. Push code to GitHub
2. Connect GitHub repo to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

**Netlify:**
1. Build project: `npm run build`
2. Upload `out` folder to Netlify
3. Configure environment variables

## File Structure
```
abhishek-portfolio/
├── app/
│   ├── api/contact/route.ts
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── contact.tsx
│   ├── hero.tsx
│   └── ...
├── lib/
│   └── supabase.ts
├── public/
│   ├── abhishek.jpeg
│   └── Abhishek_Resume.pdf
├── .env.local
└── package.json
```

## Support

If you encounter issues:
1. Check this guide first
2. Verify all steps completed
3. Check browser console for errors
4. Ensure Supabase credentials are correct