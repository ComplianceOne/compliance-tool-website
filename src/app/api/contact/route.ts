import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

console.log("resend", resend);

export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        const body = await request.json();
        const {
            fullName,
            email,
            companyName,
            jobTitle,
            phone,
            contactReason,
            frameworks,
            complianceJourney,
            documentationStatus,
            biggestChallenge,
            companySize,
            source,
        } = body;

        // --- Validation ---
        if (
            !fullName ||
            !email ||
            !companyName ||
            !jobTitle ||
            !contactReason ||
            contactReason.length === 0 ||
            !frameworks ||
            frameworks.length === 0 ||
            !complianceJourney ||
            !documentationStatus ||
            !biggestChallenge
        ) {
            return NextResponse.json(
                { message: "Please fill in all required fields." },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { message: "Please provide a valid email address." },
                { status: 400 }
            );
        }

        const emailContent = {
            text: `
        You have received a new contact form submission.

        Contact Details:
        Name: ${fullName}
        Email: ${email}
        Company: ${companyName}
        Job Title: ${jobTitle}
        Phone: ${phone || "N/A"}
        Company Size: ${companySize || "N/A"}
        Source: ${source || "N/A"}

        Compliance Details:
        Contact Reason: ${contactReason.join(", ")}
        Frameworks: ${frameworks.join(", ")}
        Journey Stage: ${complianceJourney}
        Documentation Status: ${documentationStatus}

        Challenge:
        ${biggestChallenge}
      `,
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 20px auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #35497D; color: white; padding: 20px;">
            <h2 style="margin: 0;">New Contact Submission</h2>
          </div>
          <div style="padding: 20px;">
            <p>You have received a new message from your website's contact form.</p>
            
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
              <h3 style="margin-top: 0; color: #35497D;">Contact Details</h3>
              <p style="margin: 5px 0;"><strong>Name:</strong> ${fullName}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #35497D;">${email}</a></p>
              <p style="margin: 5px 0;"><strong>Company:</strong> ${companyName}</p>
               <p style="margin: 5px 0;"><strong>Job Title:</strong> ${jobTitle}</p>
              <p style="margin: 5px 0;"><strong>Phone:</strong> ${phone || "N/A"}</p>
               <p style="margin: 5px 0;"><strong>Company Size:</strong> ${companySize || "N/A"}</p>
                <p style="margin: 5px 0;"><strong>Referral Source:</strong> ${source || "N/A"}</p>
            </div>

            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
               <h3 style="margin-top: 0; color: #35497D;">Compliance Information</h3>
               <p style="margin: 5px 0;"><strong>Contact Reason:</strong> ${contactReason.join(", ")}</p>
               <p style="margin: 5px 0;"><strong>Frameworks:</strong> ${frameworks.join(", ")}</p>
               <p style="margin: 5px 0;"><strong>Compliance Journey:</strong> ${complianceJourney}</p>
               <p style="margin: 5px 0;"><strong>Documentation Status:</strong> ${documentationStatus}</p>
            </div>

            <h3 style="border-bottom: 2px solid #eee; padding-bottom: 10px; margin-top: 0;">Biggest Challenge</h3>
            <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${biggestChallenge}</p>
          </div>
          <div style="background-color: #f4f4f4; text-align: center; padding: 10px; font-size: 12px; color: #777;">
            <p>This email was sent from the contact form on your website.</p>
          </div>
        </div>
      `,
        };

        // --- Send Email with Resend ---
        const { error } = await resend.emails.send({
            from: `"${fullName}" <${process.env.EMAIL_FROM}>`,
            to: process.env.EMAIL_TO as string,
            replyTo: email,
            subject: `New Contact Form Submission: ${fullName} - ${companyName}`,
            text: emailContent.text,
            html: emailContent.html,
        });

        if (error) {
            console.error("Error sending email with Resend:", error);
            return NextResponse.json(
                { message: "Failed to send message. Please try again later." },
                { status: 500 }
            );
        }

        return NextResponse.json({
            message:
                "Your message has been sent successfully! We will get back to you shortly.",
        });
    } catch (error) {
        console.error("Error in contact API:", error);

        return NextResponse.json(
            { message: "An unexpected error occurred. Please try again later." },
            { status: 500 }
        );
    }
}
