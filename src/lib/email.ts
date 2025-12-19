import nodemailer from 'nodemailer'

// Create transporter lazily to ensure env vars are available
function getTransporter() {
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASSWORD
  const smtpHost = process.env.SMTP_HOST
  const smtpPort = process.env.SMTP_PORT

  if (!smtpUser || !smtpPass) {
    throw new Error('SMTP credentials not configured. Check SMTP_USER and SMTP_PASSWORD environment variables.')
  }

  return nodemailer.createTransport({
    host: smtpHost || 'smtp.mail.us-east-1.awsapps.com',
    port: parseInt(smtpPort || '465'),
    secure: true,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  })
}

function getFromEmail() {
  return process.env.SMTP_FROM || 'cindy@cmqheadshots.com'
}

function getAdminEmail() {
  return process.env.ADMIN_EMAIL || 'cindy@cmqheadshots.com'
}

function getAppUrl() {
  return process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
}

// Email template wrapper with CMQ branding
function wrapInTemplate(content: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background-color: #575757; padding: 15px; text-align: center;">
              <img src="https://www.cmqheadshots.com/images/cmq-logo-white.webp" alt="CMQ Headshots" style="max-width: 200px; height: auto;">
            </td>
          </tr>
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              ${content}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f8f8; padding: 25px 30px; text-align: center; border-top: 1px solid #eee;">
              <p style="margin: 0 0 10px 0; color: #666; font-size: 14px;">
                CMQ Headshots | Professional Photography
              </p>
              <p style="margin: 0; color: #999; font-size: 12px;">
                <a href="https://www.cmqheadshots.com" style="color: #5577a5; text-decoration: none;">www.cmqheadshots.com</a>
                &nbsp;|&nbsp;
                <a href="mailto:cindy@cmqheadshots.com" style="color: #5577a5; text-decoration: none;">cindy@cmqheadshots.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`
}

// ===========================================
// ADMIN NOTIFICATIONS
// ===========================================

// Notify admin when client submits proof selections
export async function sendProofSelectionsNotification(data: {
  firstName: string
  lastName: string
  clientEmail: string
  sessionName: string
  selectedCount: number
  selectedPhotos: string[]
  proofGalleryId: string
}): Promise<void> {
  const { firstName, lastName, clientEmail, sessionName, selectedCount, selectedPhotos, proofGalleryId } = data
  const fullName = `${firstName} ${lastName}`

  const content = `
    <h1 style="color: #5577a5; margin: 0 0 20px 0; font-size: 24px;">
      New Proof Selections Submitted!
    </h1>
    <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
      Great news! <strong>${fullName}</strong> has submitted their proof selections.
    </p>
    <table style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; width: 100%; margin-bottom: 25px;">
      <tr>
        <td style="padding: 8px 0;">
          <strong style="color: #5577a5;">Client:</strong>
          <span style="color: #333; margin-left: 10px;">${fullName}</span>
        </td>
      </tr>
      <tr>
        <td style="padding: 8px 0;">
          <strong style="color: #5577a5;">Email:</strong>
          <span style="color: #333; margin-left: 10px;">${clientEmail}</span>
        </td>
      </tr>
      <tr>
        <td style="padding: 8px 0;">
          <strong style="color: #5577a5;">Session:</strong>
          <span style="color: #333; margin-left: 10px;">${sessionName}</span>
        </td>
      </tr>
      <tr>
        <td style="padding: 8px 0;">
          <strong style="color: #5577a5;">Photos Selected:</strong>
          <span style="color: #333; margin-left: 10px;">${selectedCount}</span>
        </td>
      </tr>
    </table>
    <p style="color: #333; font-size: 14px; margin: 0 0 15px 0;">
      <strong>Selected files:</strong>
    </p>
    <ul style="color: #666; font-size: 14px; margin: 0 0 25px 0; padding-left: 20px;">
      ${selectedPhotos.map(photo => `<li style="margin-bottom: 5px;">${photo}</li>`).join('')}
    </ul>
    <a href="${getAppUrl()}/admin/proofs/${proofGalleryId}"
       style="display: inline-block; background-color: #5577a5; color: white; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: 600;">
      View Selections in Admin
    </a>
  `

  await getTransporter().sendMail({
    from: `"CMQ Headshots" <${getFromEmail()}>`,
    to: getAdminEmail(),
    subject: `Proof Selections Submitted - ${fullName}`,
    html: wrapInTemplate(content),
  })
}

// ===========================================
// CLIENT NOTIFICATIONS
// ===========================================

// Send email to client when proofs are ready
export async function sendProofsReadyEmail(data: {
  firstName: string
  clientEmail: string
  sessionName: string
  proofLink: string
  expiresAt: Date
}): Promise<void> {
  const { firstName, clientEmail, sessionName, proofLink, expiresAt } = data

  const expiresFormatted = expiresAt.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const content = `
    <h1 style="color: #5577a5; margin: 0 0 20px 0; font-size: 24px;">
      Your Proofs Are Ready!
    </h1>
    <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
      Hi ${firstName},
    </p>
    <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
      Great news! Your proofs from <strong>CMQ HEADSHOTS</strong> are now ready for you to review.
    </p>
    <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 25px 0;">
      Click the button below to view your photos and select your favorites:
    </p>
    <p style="text-align: center; margin: 0 0 25px 0;">
      <a href="${proofLink}"
         style="display: inline-block; background-color: #5577a5; color: white; padding: 16px 32px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">
        View Your Proofs
      </a>
    </p>
    <div style="background-color: #fff3cd; border: 1px solid #ffc107; border-radius: 6px; padding: 15px; margin: 25px 0;">
      <p style="color: #856404; font-size: 14px; margin: 0;">
        <strong>Important:</strong> Your proofs will expire on <strong>${expiresFormatted}</strong>.
        Please make your selections before this date.
      </p>
    </div>
    <p style="color: #666; font-size: 14px; line-height: 1.6; margin: 20px 0 0 0;">
      If you have any questions, feel free to reply to this email or contact me at
      <a href="mailto:cindy@cmqheadshots.com" style="color: #5577a5;">cindy@cmqheadshots.com</a>.
    </p>
    <p style="color: #333; font-size: 16px; margin: 25px 0 0 0;">
      Best regards,<br>
      <strong>Cindy</strong><br>
      CMQ Headshots
    </p>
  `

  await getTransporter().sendMail({
    from: `"CMQ Headshots" <${getFromEmail()}>`,
    to: clientEmail,
    subject: `Your Proofs Are Ready - ${sessionName}`,
    html: wrapInTemplate(content),
  })
}

// Send email to client when final gallery is ready
export async function sendGalleryReadyEmail(data: {
  firstName: string
  clientEmail: string
  sessionName: string
  galleryLink: string
  expiresAt: Date
}): Promise<void> {
  const { firstName, clientEmail, sessionName, galleryLink, expiresAt } = data

  const expiresFormatted = expiresAt.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const content = `
    <h1 style="color: #5577a5; margin: 0 0 20px 0; font-size: 24px;">
      Your Photos Are Ready!
    </h1>
    <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
      Hi ${firstName},
    </p>
    <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
      Exciting news! Your edited photos from <strong>CMQ HEADSHOTS</strong> are now ready for download.
    </p>
    <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 25px 0;">
      Click the button below to access your gallery and download your images:
    </p>
    <p style="text-align: center; margin: 0 0 25px 0;">
      <a href="${galleryLink}"
         style="display: inline-block; background-color: #5577a5; color: white; padding: 16px 32px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">
        Access Your Gallery
      </a>
    </p>
    <div style="background-color: #d4edda; border: 1px solid #28a745; border-radius: 6px; padding: 15px; margin: 25px 0;">
      <p style="color: #155724; font-size: 14px; margin: 0;">
        <strong>Tip:</strong> You can download individual photos or all photos at once from your gallery.
      </p>
    </div>
    <div style="background-color: #fff3cd; border: 1px solid #ffc107; border-radius: 6px; padding: 15px; margin: 25px 0;">
      <p style="color: #856404; font-size: 14px; margin: 0;">
        <strong>Note:</strong> Your gallery will be available until <strong>${expiresFormatted}</strong>.
        Please download your photos before this date.
      </p>
    </div>
    <p style="color: #666; font-size: 14px; line-height: 1.6; margin: 20px 0 0 0;">
      Thank you for choosing CMQ Headshots! If you're happy with your photos, I'd love it if you could
      leave a review on Google. It really helps!
    </p>
    <p style="color: #333; font-size: 16px; margin: 25px 0 0 0;">
      Best regards,<br>
      <strong>Cindy</strong><br>
      CMQ Headshots
    </p>
  `

  await getTransporter().sendMail({
    from: `"CMQ Headshots" <${getFromEmail()}>`,
    to: clientEmail,
    subject: `Your Photos Are Ready! - ${sessionName}`,
    html: wrapInTemplate(content),
  })
}

// Test email function
export async function sendTestEmail(to: string): Promise<void> {
  const content = `
    <h1 style="color: #5577a5; margin: 0 0 20px 0; font-size: 24px;">
      Test Email
    </h1>
    <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
      This is a test email from the CMQ Client Gallery System.
    </p>
    <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
      If you're seeing this, your email configuration is working correctly!
    </p>
  `

  await getTransporter().sendMail({
    from: `"CMQ Headshots" <${getFromEmail()}>`,
    to,
    subject: 'Test Email - CMQ Gallery System',
    html: wrapInTemplate(content),
  })
}
