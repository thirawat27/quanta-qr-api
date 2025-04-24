import { NextResponse } from 'next/server'
import QRCode from 'qrcode'

export async function GET(request) {
  // ดึงข้อความจาก query parameter ชื่อ value
  const { searchParams } = new URL(request.url)
  const text = searchParams.get('value') || 'Welcome to Quanta QR API 🤖 !'

  try {
    // สร้างภาพ QR Code เป็น Buffer ของ PNG
    const buffer = await QRCode.toBuffer(text, { type: 'png' })
    // ส่งกลับภาพ PNG พร้อม header ที่เหมาะสม
    return new NextResponse(buffer, {
      status: 200,
      headers: { 
      'Content-Type': 'image/png',
      'Cache-Control': 'max-age=3600',
      'Access-Control-Allow-Origin': '*'
       }

    })
  } catch (error) {
    // กรณีเกิดข้อผิดพลาด ให้คืน JSON พร้อม status 500
    return NextResponse.json({ error: 'Failed to generate QR Code ' }, { status: 500 })
  }
}