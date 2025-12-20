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
    bcc: getAdminEmail(),
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
  templateType?: 'business' | 'actor'
}): Promise<void> {
  const { firstName, clientEmail, sessionName, galleryLink, expiresAt, templateType = 'business' } = data

  const expiresFormatted = expiresAt.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  // CMQ Brand Blue
  const brandBlue = '#5577a5'

  let content: string

  if (templateType === 'actor') {
    // Actor template
    content = `
      <h1 style="color: ${brandBlue}; margin: 0 0 20px 0; font-size: 24px; font-weight: 600;">
        Your Acting Headshots Are Ready!
      </h1>
      <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Hi <strong style="color: ${brandBlue};">${firstName}</strong>,
      </p>
      <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Your headshot images gallery is ready to download.
      </p>
      <p style="text-align: center; margin: 0 0 25px 0;">
        <a href="${galleryLink}"
           style="display: inline-block; background-color: ${brandBlue}; color: white; padding: 16px 32px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">
          Access Your Gallery
        </a>
      </p>
      <div style="background-color: #f0f4f8; border-left: 4px solid ${brandBlue}; padding: 15px; margin: 25px 0;">
        <p style="color: #333; font-size: 14px; margin: 0;">
          <strong style="color: ${brandBlue};">Important:</strong> This link will expire on <strong>${expiresFormatted}</strong>.
          We do not keep images for more than a month. Ensure you save your images to two different locations,
          as we will not be able to provide them to you in the future.
        </p>
      </div>
      <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 15px 0;">
        It was a pleasure working with you and I hope to see you again. Thank you for allowing me to capture you.
      </p>
      <p style="color: ${brandBlue}; font-size: 16px; line-height: 1.6; margin: 20px 0 10px 0; font-weight: 600;">
        Each selected image is delivered in multiple formats. The file name extension indicates how each version is intended to be used:
      </p>
      <table style="width: 100%; margin: 0 0 20px 0; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 10px; border-bottom: 1px solid #eee;">
            <strong style="color: ${brandBlue};">-1x1</strong>
            <span style="color: #333;"> — Square crop (ideal for Instagram and profile images)</span>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 10px; border-bottom: 1px solid #eee;">
            <strong style="color: ${brandBlue};">-B&W</strong>
            <span style="color: #333;"> — Black & white version optimized for social media</span>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 10px; border-bottom: 1px solid #eee;">
            <strong style="color: ${brandBlue};">-full</strong>
            <span style="color: #333;"> — Full image, high resolution (10-inch-long edge) for print and professional use</span>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 10px; border-bottom: 1px solid #eee;">
            <strong style="color: ${brandBlue};">-vert</strong>
            <span style="color: #333;"> — Vertical crop (10-inch-long edge)</span>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 10px;">
            <strong style="color: ${brandBlue};">-horz-5x4</strong>
            <span style="color: #333;"> — Horizontal 5×4 crop (10-inch-long edge)</span>
          </td>
        </tr>
      </table>
      <p style="color: #666; font-size: 14px; line-height: 1.6; margin: 20px 0 0 0;">
        Check the file name to determine its use.
      </p>
      <p style="color: #333; font-size: 16px; margin: 25px 0 0 0;">
        Thanks again and I wish you continued success!<br><br>
        <strong style="color: ${brandBlue};">Cindy Quinn</strong><br>
        CMQ Headshots
      </p>
    `
  } else {
    // Business template (default)
    content = `
      <h1 style="color: ${brandBlue}; margin: 0 0 20px 0; font-size: 24px; font-weight: 600;">
        Your Professional Headshots Are Ready!
      </h1>
      <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Hi <strong style="color: ${brandBlue};">${firstName}</strong>,
      </p>
      <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Your headshot images gallery is ready to download.
      </p>
      <p style="text-align: center; margin: 0 0 25px 0;">
        <a href="${galleryLink}"
           style="display: inline-block; background-color: ${brandBlue}; color: white; padding: 16px 32px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">
          Access Your Gallery
        </a>
      </p>
      <div style="background-color: #f0f4f8; border-left: 4px solid ${brandBlue}; padding: 15px; margin: 25px 0;">
        <p style="color: #333; font-size: 14px; margin: 0;">
          <strong style="color: ${brandBlue};">Important:</strong> This link will expire on <strong>${expiresFormatted}</strong>.
          We do not keep images for more than a month. Ensure you save your images to two different locations,
          as we will not be able to provide them to you in the future.
        </p>
      </div>
      <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 15px 0;">
        It was a pleasure working with you and I hope to see you again. Thank you for allowing me to capture you.
      </p>
      <p style="color: ${brandBlue}; font-size: 16px; line-height: 1.6; margin: 20px 0 10px 0; font-weight: 600;">
        I have created several different versions of your images. You are receiving:
      </p>
      <table style="width: 100%; margin: 0 0 20px 0; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 10px; border-bottom: 1px solid #eee;">
            <span style="color: ${brandBlue}; font-weight: bold;">•</span>
            <span style="color: #333;"> 1 full-resolution 7x5 at 300 dpi of each image</span>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 10px; border-bottom: 1px solid #eee;">
            <span style="color: ${brandBlue}; font-weight: bold;">•</span>
            <span style="color: #333;"> 1 for your LinkedIn profile version of each image</span>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 10px; border-bottom: 1px solid #eee;">
            <span style="color: ${brandBlue}; font-weight: bold;">•</span>
            <span style="color: #333;"> 1 for your Facebook profile version of each image</span>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 10px; border-bottom: 1px solid #eee;">
            <span style="color: ${brandBlue}; font-weight: bold;">•</span>
            <span style="color: #333;"> 1 for your Instagram profile version of each image</span>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 10px; border-bottom: 1px solid #eee;">
            <span style="color: ${brandBlue}; font-weight: bold;">•</span>
            <span style="color: #333;"> 1 Black & White social media version of each image</span>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 10px;">
            <span style="color: ${brandBlue}; font-weight: bold;">•</span>
            <span style="color: #333;"> 1 Teams profile version of each image</span>
          </td>
        </tr>
      </table>
      <p style="color: #666; font-size: 14px; line-height: 1.6; margin: 20px 0 0 0;">
        Some versions will look blurry — they are sized for their final use. Check the file name to determine its use.
      </p>
      <p style="color: #333; font-size: 16px; margin: 25px 0 0 0;">
        Thanks again for your business and I wish you continued success!<br><br>
        <strong style="color: ${brandBlue};">Cindy Quinn</strong><br>
        CMQ Headshots
      </p>
    `
  }

  await getTransporter().sendMail({
    from: `"CMQ Headshots" <${getFromEmail()}>`,
    to: clientEmail,
    bcc: getAdminEmail(),
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
