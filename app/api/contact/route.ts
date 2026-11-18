import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { fullName, email, subject, category, message } = body

    if (!fullName || !email || !subject || !category || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      )
    }

    console.log("Contact form submission:", {
      fullName,
      email,
      subject,
      category,
      message,
      receivedAt: new Date().toISOString(),
    })

    return NextResponse.json(
      { success: true, message: "Message received." },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { error: "Failed to process submission." },
      { status: 500 }
    )
  }
}
