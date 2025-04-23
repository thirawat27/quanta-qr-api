# QR Code API ด้วย Next.js 15

## คำอธิบาย
โปรเจกต์นี้เป็น API สำหรับสร้าง QR Code แบบไดนามิก ด้วย Next.js 15 (App Router) และไลบรารี `qrcode` จาก npm คุณสามารถส่งข้อความผ่าน query parameter และรับภาพ PNG ของ QR Code กลับมาได้ทันที

## คุณสมบัติ
- สร้าง QR Code จากข้อความ (รองรับ UTF-8 เช่น ภาษาไทย อิโมจิ)
- ส่งกลับเป็นภาพ PNG พร้อม header `Content-Type: image/png`
- จัดการข้อผิดพลาดด้วยการคืน JSON เมื่อสร้างไม่สำเร็จ

## ไฟล์สำคัญ
```
/app
└── api
    └── qrcode
        └── route.js    // Route Handler สำหรับ GET /api/qrcode
```

## การติดตั้ง
1. โคลนหรือดาวน์โหลดโปรเจกต์
   ```bash
   git clone <repo-url>
   cd my-qr-api
   ```
2. ติดตั้ง dependency
   ```bash
   npm install
   ```
3. รันเซิร์ฟเวอร์ในโหมดพัฒนา
   ```bash
   npm run dev
   ```

## การใช้งาน
เมื่อรันเซิร์ฟเวอร์แล้ว ให้เรียก API ด้วย HTTP GET ตามรูปแบบ:
```
GET /api/qrcode?value=<ข้อความที่ต้องการเข้ารหัส>
```

- `<ข้อความที่ต้องการเข้ารหัส>` ต้องเข้ารหัส URL (URL-encode) หากมีช่องว่างหรืออักขระพิเศษ

### ตัวอย่าง
```bash
curl "http://localhost:3000/api/qrcode?value=สวัสดี+โลก" --output qrcode.png
```
ผลลัพธ์จะเป็นไฟล์ `qrcode.png` ที่เมื่อสแกนจะได้ข้อความ **สวัสดี โลก**

## ตัวเลือก (Options)
ในไฟล์ `route.js` คุณสามารถปรับแต่งพารามิเตอร์อื่น ๆ ของ `qrcode` เช่น:
```js
QRCode.toBuffer(text, {
  type: 'png',          // ประเภทของภาพ
  width: 300,           // กำหนดความกว้างของ QR Code
  margin: 2,            // ระยะขอบรอบ QR Code
  color: {              // สีของ QR Code
    dark: '#000000',    // สีจุด
    light: '#FFFFFF'    // สีพื้นหลัง
  }
})
```

## การจัดการข้อผิดพลาด
หากเกิดข้อผิดพลาดระหว่างการสร้าง QR Code API จะคืน JSON พร้อมสถานะ HTTP 500:
```json
HTTP/1.1 500 Internal Server Error
Content-Type: application/json

{ "error": "Failed to generate QR Code" }
```

## การ Deploy
คุณสามารถ deploy โปรเจกต์นี้บน Vercel, Netlify หรือ Cloud Provider ใดก็ได้ที่รองรับ Next.js 15 เพียงตั้งค่า Build Command เป็น `npm run build` และ Start Command เป็น `npm start` (หรือใช้ `vercel` CLI)

## สรุป
ด้วย README นี้ คุณสามารถติดตั้ง รัน และใช้งาน API สร้าง QR Code ได้อย่างรวดเร็ว โดยนำไปใช้ในแอปพลิเคชัน ฝั่ง client หรือระบบอื่น ๆ ตามต้องการ

---


## ใบอนุญาต (MIT License)

```
MIT License

Copyright (c) 2025 Tiny BMI API

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```