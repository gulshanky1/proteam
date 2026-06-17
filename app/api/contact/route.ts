import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      phone,
      service,
      message,
    } = await req.json();

    if (
      !name ||
      !email ||
      !phone ||
      !service ||
      !message
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 }
      );
    }

   const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

    // Verify SMTP connection
    await transporter.verify();

    // Mail to Admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_RECEIVER,
      subject: `New Inquiry - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Contact Form Inquiry</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service:</strong> ${service}</p>

          <hr />

          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    // Auto Reply to User
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You For Contacting PROTEAM",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Hello ${name},</h2>

          <p>
            Thank you for contacting
            <strong>PROTEAM Management Services Pvt Ltd</strong>.
          </p>

          <p>
            We have successfully received your inquiry regarding
            <strong>${service}</strong>.
          </p>

          <p>
            Our team will review your requirement and get back to you shortly.
          </p>

          <br />

          <p>
            Regards,<br />
            PROTEAM Management Services Pvt Ltd
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Email Sent Successfully",
    });
  } catch (error) {
    console.error("Email Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed To Send Email",
      },
      { status: 500 }
    );
  }
}