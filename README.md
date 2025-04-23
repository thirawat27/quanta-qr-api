```markdown
# Quanta QR API

Quanta QR API เป็นบริการ API สำหรับสร้าง **QR Code** เป็นภาพ PNG โดยใช้ Next.js 15 App Router

---

## 🛠️ Prerequisites
- Node.js (>=16.x)
- Next.js 15 (ถ้าจะรันโค้ดในเครื่อง)

---

## 🚀 Endpoint

```
GET https://quanta-qr-api.vercel.app/api/qrcode
```

### Query Parameters
| ชื่อพารามิเตอร์ | ประเภท  | คำอธิบาย                         | ตัวอย่าง                      |
|----------------|--------|----------------------------------|--------------------------------|
| `value`        | String | ข้อความที่ต้องการเข้ารหัสเป็น QR | `สวัสดี+โลก` หรือ `Hello+World` |

> **หมายเหตุ:**
> - ถ้าไม่กำหนด `value` ระบบจะสร้าง QR Code จากข้อความเริ่มต้น `Hello, Next.js 15!`

---

## 🔍 วิธีใช้งาน

### 1. ใช้ผ่าน Curl
```bash
curl "https://quanta-qr-api.vercel.app/api/qrcode?value=สวัสดี+โลก" \
     --output qrcode.png
```
ผลลัพธ์:
- ได้ไฟล์ `qrcode.png` ซึ่งเป็นรูปภาพ QR Code

### 2. ใช้ fetch ใน JavaScript
```js
fetch('https://quanta-qr-api.vercel.app/api/qrcode?value=สวัสดี+โลก')
  .then(res => {
    if (!res.ok) throw new Error('Failed to fetch QR code');
    return res.blob();
  })
  .then(blob => {
    // สร้าง URL ชั่วคราวเพื่อแสดงหรือดาวน์โหลด
    const url = URL.createObjectURL(blob);
    const img = document.createElement('img');
    img.src = url;
    document.body.appendChild(img);
  })
  .catch(console.error);
```

### 3. ตัวอย่างในเครื่อง (Local)
```bash
# หลังจากรันเซิร์ฟเวอร์ด้วย
npm run dev

# เปิดเบราว์เซอร์ไปที่
http://localhost:3000/api/qrcode?value=สวัสดี+โลก
```

---

## 🎨 ปรับแต่งเพิ่มเติม
คุณสามารถแก้ไขโค้ดในไฟล์ `app/api/qrcode/route.js` เพื่อ:
- กำหนดขนาดของ QR Code
- เปลี่ยนสีหรือความละเอียด
- ตั้งค่าตัวเลือกอื่น ๆ ของไลบรารี `qrcode`

ตัวอย่างการปรับขนาด:
```js
// เพิ่ม options
const buffer = await QRCode.toBuffer(text, {
  type: 'png',
  width: 300,
  margin: 2,
});
```

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