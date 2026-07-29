import nodemailer from 'nodemailer';

export interface EmailInquiryPayload {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  projectType?: string;
  budget?: string;
  message: string;
}

export async function sendInquiryEmail(payload: EmailInquiryPayload): Promise<boolean> {
  const { name, email, phone, subject, projectType, budget, message } = payload;
  const displaySubject = subject || projectType || 'General Inquiry';
  const displayPhone = phone && phone.trim() ? phone : 'Not Provided';
  const displayBudget = budget || 'Flexible';

  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const recipientEmail =
    process.env.CONTACT_EMAIL || smtpUser || 'saisahith.kallepalli.23@gmail.com';

  const htmlContent = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; background-color: #0a0b0d; color: #f0f2f5; border-radius: 20px; overflow: hidden; border: 1px solid #222630; box-shadow: 0 12px 40px rgba(0,0,0,0.7);">
      <!-- Glowing Top Accent Gradient Bar -->
      <div style="height: 4px; background: linear-gradient(90deg, #00f2fe 0%, #7f00ff 100%); width: 100%;"></div>

      <!-- Executive Header -->
      <div style="padding: 32px 28px 24px; text-align: center; border-bottom: 1px solid #1a1e26; background: linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 100%);">
        <div style="margin-bottom: 12px;">
          <span style="background: rgba(0, 242, 254, 0.12); color: #00f2fe; border: 1px solid rgba(0, 242, 254, 0.35); padding: 5px 14px; border-radius: 999px; font-size: 11px; font-weight: 700; letter-spacing: 1.2px;">
            PORTFOLIO CONNECT • NEW INQUIRY
          </span>
        </div>
        <h1 style="margin: 14px 0 6px; color: #ffffff; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">
          KALLEPALLI SAI SAHITH
        </h1>
        <p style="margin: 0; color: #a8adb8; font-size: 14px; font-weight: 500;">
          Senior Full Stack Software Engineer • MERN &amp; Next.js Architect
        </p>
      </div>

      <!-- Main Body -->
      <div style="padding: 32px 28px;">
        <p style="font-size: 15px; color: #d0d5dd; line-height: 1.6; margin-top: 0; margin-bottom: 24px;">
          You have received a new contact inquiry through your executive portfolio website.
        </p>

        <!-- Sender Details Card -->
        <div style="background-color: #13161f; border: 1px solid #232836; border-radius: 16px; padding: 22px; margin-bottom: 26px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #8892b0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; width: 150px; border-bottom: 1px solid rgba(255,255,255,0.05);">SENDER NAME:</td>
              <td style="padding: 10px 0; color: #ffffff; font-size: 15px; font-weight: 700; border-bottom: 1px solid rgba(255,255,255,0.05);">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #8892b0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid rgba(255,255,255,0.05);">EMAIL ADDRESS:</td>
              <td style="padding: 10px 0; font-size: 15px; font-weight: 600; border-bottom: 1px solid rgba(255,255,255,0.05);">
                <a href="mailto:${email}" style="color: #00f2fe; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #8892b0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid rgba(255,255,255,0.05);">PHONE / WHATSAPP:</td>
              <td style="padding: 10px 0; font-size: 15px; font-weight: 600; border-bottom: 1px solid rgba(255,255,255,0.05);">
                ${
                  displayPhone !== 'Not Provided'
                    ? `<a href="tel:${displayPhone}" style="color: #10B981; text-decoration: none; font-weight: 700;">${displayPhone}</a>`
                    : `<span style="color: #718096;">Not Provided</span>`
                }
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #8892b0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid rgba(255,255,255,0.05);">SUBJECT:</td>
              <td style="padding: 10px 0; color: #ffffff; font-size: 15px; font-weight: 600; border-bottom: 1px solid rgba(255,255,255,0.05);">${displaySubject}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #8892b0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">BUDGET RANGE:</td>
              <td style="padding: 10px 0; color: #ffffff; font-size: 15px; font-weight: 600;">${displayBudget}</td>
            </tr>
          </table>
        </div>

        <!-- Message Card -->
        <div style="margin-bottom: 30px;">
          <div style="font-size: 12px; font-weight: 700; color: #8892b0; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">
            MESSAGE CONTENTS:
          </div>
          <div style="background-color: #10121a; border: 1px solid #232836; border-left: 4px solid #00f2fe; padding: 22px; border-radius: 12px; color: #e2e8f0; font-size: 15px; line-height: 1.7; white-space: pre-wrap; font-family: 'SF Pro Text', -apple-system, sans-serif;">${message}</div>
        </div>

        <!-- Action Buttons -->
        <div style="text-align: center; margin-top: 32px;">
          <a href="mailto:${email}?subject=Re: Your Inquiry to KALLEPALLI Sai Sahith" style="display: inline-block; background: #ffffff; color: #0a0b0d; font-weight: 700; text-decoration: none; padding: 13px 28px; border-radius: 999px; font-size: 14px; margin: 4px 6px; box-shadow: 0 4px 15px rgba(255,255,255,0.15);">
            Reply via Email
          </a>
          ${
            displayPhone !== 'Not Provided'
              ? `<a href="tel:${displayPhone}" style="display: inline-block; background: rgba(0, 242, 254, 0.12); color: #00f2fe; border: 1px solid rgba(0, 242, 254, 0.4); font-weight: 600; text-decoration: none; padding: 13px 24px; border-radius: 999px; font-size: 14px; margin: 4px 6px;">
                  Call / WhatsApp
                </a>`
              : ''
          }
        </div>
      </div>

      <!-- Executive Footer -->
      <div style="background-color: #07080a; padding: 20px; text-align: center; border-top: 1px solid #1a1e26; font-size: 12px; color: #8892b0; line-height: 1.5;">
        &copy; ${new Date().getFullYear()} KALLEPALLI Sai Sahith. All rights reserved.<br />
        <span style="color: #4a5568;">Automated Executive Portfolio Notification System</span>
      </div>
    </div>
  `;

  // If SMTP credentials are not yet configured, log a friendly preview so local dev works smoothly
  if (!smtpUser || !smtpPass) {
    console.log('\n======================================================');
    console.log('📧 [DEV EMAIL PREVIEW - NO SMTP CREDENTIALS SET IN .env.local]');
    console.log(`To: ${recipientEmail}`);
    console.log(`Subject: [Portfolio Contact] New Message from ${name} (${displaySubject})`);
    console.log(`Reply-To: ${email}`);
    console.log(`Phone: ${displayPhone} | Project: ${displaySubject} | Budget: ${displayBudget}`);
    console.log(`Message:\n${message}`);
    console.log('======================================================\n');
    console.log(
      '💡 Tip: To send real emails, create a .env.local file in the root directory with:\n' +
        'SMTP_USER="saisahith.kallepalli.23@gmail.com"\n' +
        'SMTP_PASS="your-gmail-app-password"\n'
    );
    return true;
  }

  // Create SMTP transport and send live email
  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for 587
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"Sai Sahith Portfolio" <${smtpUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `[Portfolio Contact] New Message from ${name}: ${displaySubject}`,
      html: htmlContent,
      text: `New Portfolio Inquiry from ${name} (${email})\nPhone: ${displayPhone}\nSubject: ${displaySubject}\n\nMessage:\n${message}`,
    });

    console.log(`✅ [MAIL SUCCESS] Email sent to ${recipientEmail} from ${email}`);
    return true;
  } catch (err) {
    console.error('❌ [MAIL ERROR] Failed to send email via Nodemailer:', err);
    throw err;
  }
}
