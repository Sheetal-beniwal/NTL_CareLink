import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendNotificationEmail = async (data: any) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn('⚠️ Nodemailer: EMAIL_USER or EMAIL_PASS not set. Skipping email notification.');
    return;
  }

  const mailOptions = {
    from: `"NTL CareLink Notification" <${process.env.EMAIL_USER}>`,
    to: 'amityadv747@gmail.com',
    subject: `New Registration: ${data.fullName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">New Registration Received</h2>
        <p>A new registration has been submitted with the following details:</p>
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="background-color: #f9fafb;">
            <td style="padding: 10px; font-weight: bold; border: 1px solid #eee;">Full Name:</td>
            <td style="padding: 10px; border: 1px solid #eee;">${data.fullName}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border: 1px solid #eee;">Email:</td>
            <td style="padding: 10px; border: 1px solid #eee;">${data.email}</td>
          </tr>
          <tr style="background-color: #f9fafb;">
            <td style="padding: 10px; font-weight: bold; border: 1px solid #eee;">Phone:</td>
            <td style="padding: 10px; border: 1px solid #eee;">${data.phone}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border: 1px solid #eee;">Location:</td>
            <td style="padding: 10px; border: 1px solid #eee;">${data.location || 'N/A'}</td>
          </tr>
          <tr style="background-color: #f9fafb;">
            <td style="padding: 10px; font-weight: bold; border: 1px solid #eee;">Service:</td>
            <td style="padding: 10px; border: 1px solid #eee;">${data.service}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border: 1px solid #eee;">Message:</td>
            <td style="padding: 10px; border: 1px solid #eee;">${data.message || 'N/A'}</td>
          </tr>
        </table>
        <p style="margin-top: 20px; font-size: 12px; color: #666;">This is an automated notification from the NTL CareLink system.</p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email notification sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('❌ Failed to send email notification:', error);
    throw error;
  }
};
