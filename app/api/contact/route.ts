import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message, topic, timestamp, user_agent } = await request.json()

    // Basic validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { message: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('contacts')
      .insert([{
        name: name.trim(),
        email: email.trim().toLowerCase(),
        subject: subject?.trim() || 'No subject',
        message: message.trim(),
        topic: topic || null,
        user_agent: user_agent || null,
        ip_address: request.headers.get('x-forwarded-for') || 
                   request.headers.get('x-real-ip') || 
                   'unknown',
        created_at: timestamp || new Date().toISOString()
      }])
      .select()

    if (error) {
      throw error
    }

    return NextResponse.json({ 
      message: 'Message sent successfully',
      id: data?.[0]?.id 
    })

  } catch (error: any) {    
    return NextResponse.json(
      { 
        message: error.message || 'Failed to send message. Please try again.',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    )
  }
}