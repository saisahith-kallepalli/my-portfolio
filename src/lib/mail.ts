import nodemailer from 'nodemailer';

export interface EmailInquiryPayload {
  name: string;
  email: string;
  subject?: string;
  projectType?: string;
  budget?: string;
  message: string;
}

export async function sendInquiryEmail(payload: EmailInquiryPayload): Promise<boolean> {
  const { name, email, subject, projectType, budget, message } = payload;
  const displaySubject = subject || projectType || 'General Inquiry';

  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const recipientEmail =
    process.env.CONTACT_EMAIL || smtpUser || 'saisahith.kallepalli.23@gmail.com';

  const htmlContent = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0b0c10; color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #1f2833;">
      <div style="background: linear-gradient(135deg, #00f2fe 0%, #7f00ff 100%); padding: 24px; text-align: center;">
        <h2 style="margin: 0; color: #0b0c10; font-size: 22px; font-weight: 800;">
          NEW PORTFOLIO INQUIRY
        </h2>
        <p style="margin: 6px 0 0; color: #0b0c10; font-size: 14px; font-weight: 600;">
          KALLEPALLI Sai Sahith — Senior Full Stack Software Engineer
        </p>
      </div>

      <div style="padding: 28px;">
        <p style="font-size: 15px; color: #c5c6c7; line-height: 1.6; margin-top: 0;">
          You have received a new contact inquiry through your Next.js portfolio website.
        </p>

        <div style="background-color: #1f2833; border-left: 4px solid #00f2fe; padding: 18px; border-radius: 8px; margin: 20px 0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #8892b0; font-size: 13px; font-weight: 600; text-transform: uppercase; width: 140px;">Sender Name:</td>
              <td style="padding: 8px 0; color: #ffffff; font-size: 15px; font-weight: 700;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #8892b0; font-size: 13px; font-weight: 600; text-transform: uppercase;">Email Address:</td>
              <td style="padding: 8px 0; color: #00f2fe; font-size: 15px; font-weight: 600;"><a href="mailto:${email}" style="color: #00f2fe; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #8892b0; font-size: 13px; font-weight: 600; text-transform: uppercase;">Subject:</td>
              <td style="padding: 8px 0; color: #ffffff; font-size: 15px;">${displaySubject}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #8892b0; font-size: 13px; font-weight: 600; text-transform: uppercase;">Budget Range:</td>
              <td style="padding: 8px 0; color: #ffffff; font-size: 15px; font-weight: 600;">${budget || 'N/A'}</td>
            </tr>
          </table>
        </div>

        <h4 style="color: #ffffff; font-size: 15px; margin: 24px 0 8px; font-weight: 700;">
          Message Details:
        </h4>
        <div style="background-color: rgba(255,255,255,0.03); border: 1px solid #1f2833; padding: 18px; border-radius: 8px; color: #e0e0e0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</div>

        <div style="margin-top: 28px; text-align: center;">
          <a href="mailto:${email}?subject=Re: Your Inquiry to KALLEPALLI Sai Sahith" style="display: inline-block; background: linear-gradient(135deg, #00f2fe, #7f00ff); color: #0b0c10; font-weight: 700; text-decoration: none; padding: 12px 28px; border-radius: 999px; font-size: 14px;">
            Reply Directly to ${name}
          </a>
        </div>
      </div>

      <div style="background-color: #07080a; padding: 16px; text-align: center; border-top: 1px solid #1f2833; font-size: 12px; color: #8892b0;">
        &copy; ${new Date().getFullYear()} KALLEPALLI Sai Sahith. Automated Portfolio Notification System.
      </div>
    </div>
  `;

  // If SMTP credentials are not yet configured, log a friendly preview so local dev works smoothly
  if (!smtpUser || !smtpPass) {
    console.log('\n======================================================');
    console.log('📧 [DEV EMAIL PREVIEW - NO SMTP CREDENTIALS SET IN .env.local]');
    console.log(`To: ${recipientEmail}`);
    console.log(`Subject: [Portfolio Contact] New Message from ${name} (${projectType})`);
    console.log(`Reply-To: ${email}`);
    console.log(`Project: ${projectType} | Budget: ${budget}`);
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
      text: `New Portfolio Inquiry from ${name} (${email})\nSubject: ${displaySubject}\n\nMessage:\n${message}`,
    });

    console.log(`✅ [MAIL SUCCESS] Email sent to ${recipientEmail} from ${email}`);
    return true;
  } catch (err) {
    console.error('❌ [MAIL ERROR] Failed to send email via Nodemailer:', err);
    throw err;
  }
}
