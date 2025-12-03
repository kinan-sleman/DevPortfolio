import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const {
            name,
            email,
            phone,
            service,
            budget,
            hasDomainHosting,
            hasOnlinePayment,
            notes,
        } = body;

        // Validate required fields
        if (!name || !email || !service || !budget || !hasDomainHosting || !hasOnlinePayment) {
            return NextResponse.json(
                { error: "Please fill in all required fields" },
                { status: 400 }
            );
        }

        // Create email transporter
        // Note: You'll need to configure this with actual SMTP credentials
        // For Gmail, you need to use an App Password
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER || "your-email@gmail.com",
                pass: process.env.EMAIL_PASSWORD || "your-app-password",
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER || "your-email@gmail.com",
            to: "kksleman50@gmail.com",
            subject: `New Service Request from ${name}`,
            html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f9f9f9;
            }
            .header {
              background-color: #1c3452;
              color: white;
              padding: 20px;
              text-align: center;
              border-radius: 8px 8px 0 0;
            }
            .content {
              background-color: white;
              padding: 30px;
              border-radius: 0 0 8px 8px;
            }
            .field {
              margin-bottom: 20px;
              padding-bottom: 15px;
              border-bottom: 1px solid #dfd2d8;
            }
            .label {
              font-weight: bold;
              color: #1c3452;
              margin-bottom: 5px;
            }
            .value {
              color: #555;
            }
            .highlight {
              background-color: #e9d385;
              padding: 2px 6px;
              border-radius: 3px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Service Request</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Client Name:</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              ${phone ? `
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${phone}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">Requested Service:</div>
                <div class="value"><span class="highlight">${service}</span></div>
              </div>
              
              <div class="field">
                <div class="label">Budget:</div>
                <div class="value"><span class="highlight">${budget}</span></div>
              </div>
              
              <div class="field">
                <div class="label">Has Domain & Hosting:</div>
                <div class="value">${hasDomainHosting}</div>
              </div>
              
              <div class="field">
                <div class="label">Includes Online Payment:</div>
                <div class="value">${hasOnlinePayment}</div>
              </div>
              
              ${notes ? `
              <div class="field">
                <div class="label">Additional Notes:</div>
                <div class="value">${notes}</div>
              </div>
              ` : ''}
            </div>
          </div>
        </body>
        </html>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: "Email sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Failed to send email. Please try again later." },
            { status: 500 }
        );
    }
}
