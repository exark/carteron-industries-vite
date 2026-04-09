// Supabase Edge Function pour envoyer un email de confirmation survey
// Utilise Resend pour l'envoi d'emails

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface EmailRequest {
  to_email: string
  user_name: string
  survey_type_label: string
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const body = await req.json()
    console.log('Received body:', body)
    
    const { to_email, user_name, survey_type_label }: EmailRequest = body

    console.log('Extracted values:', { to_email, user_name, survey_type_label })

    // Validation
    if (!to_email || !user_name || !survey_type_label) {
      console.error('Validation failed:', { to_email, user_name, survey_type_label })
      throw new Error('Missing required fields')
    }

    // Email HTML template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: 'Inter', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #0b2244 0%, #1a3a5c 100%);
              color: white;
              padding: 30px;
              text-align: center;
              border-radius: 8px 8px 0 0;
            }
            .content {
              background: #ffffff;
              padding: 30px;
              border: 1px solid #e0e0e0;
              border-top: none;
            }
            .highlight {
              background: #f5f5f5;
              padding: 15px;
              border-left: 4px solid #5D7052;
              margin: 20px 0;
            }
            .footer {
              background: #f9f9f9;
              padding: 20px;
              text-align: center;
              font-size: 12px;
              color: #999;
              border-radius: 0 0 8px 8px;
            }
            .button {
              display: inline-block;
              padding: 12px 30px;
              background: #0b2244;
              color: white;
              text-decoration: none;
              border-radius: 6px;
              margin: 20px 0;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">Carteron Industries</h1>
          </div>
          
          <div class="content">
            <h2 style="color: #0b2244;">Bonjour ${user_name},</h2>
            
            <p>Merci d'avoir pris le temps de répondre à notre enquête <strong>${survey_type_label}</strong> !</p>
            
            <p>Nous avons bien reçu vos réponses et nous vous en remercions. Votre contribution est précieuse pour nous aider à développer des solutions adaptées aux besoins des golfeurs et de leurs familles.</p>
            
            <div class="highlight">
              <p style="margin: 0;"><strong>Notre équipe va étudier attentivement vos retours.</strong></p>
              <p style="margin: 10px 0 0 0;">Si vous avez indiqué souhaiter être contacté pour un partenariat, nous reviendrons vers vous très prochainement.</p>
            </div>
            
            <p>En attendant, n'hésitez pas à découvrir nos innovations sur notre site web :</p>
            
            <div style="text-align: center;">
              <a href="https://www.carteronindustries.com" class="button">Visiter notre site</a>
            </div>
            
            <p>Cordialement,<br>
            <strong>L'équipe Carteron Industries</strong></p>
          </div>
          
          <div class="footer">
            <p>Cet email a été envoyé automatiquement suite à votre participation à l'enquête sur <a href="https://www.carteronindustries.com" style="color: #5D7052;">www.carteronindustries.com</a></p>
            <p>© ${new Date().getFullYear()} Carteron Industries. Tous droits réservés.</p>
          </div>
        </body>
      </html>
    `

    // Send email via Resend
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Carteron Industries <onboarding@resend.dev>',
        to: [to_email],
        subject: 'Merci pour votre participation - Carteron Industries',
        html: htmlContent,
      }),
    })

    const data = await res.json()

    if (!res.ok) {
      throw new Error(data.message || 'Failed to send email')
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    )
  }
})
