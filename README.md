# 🔳 Quanta QR API

API สำหรับสร้าง **QR Code** แบบเรียลไทม์ผ่าน HTTP โดยใช้ Next.js 15  
​ใช้งานง่าย ส่งข้อความผ่าน Query Parameter แล้วรับกลับเป็นรูปภาพ QR Code ทันที!

> 📌 URL หลักของ API:  
> `https://quanta-qr-api.vercel.app/api/qrcode`

---

## 📌 วิธีใช้งาน

### 🔗 Endpoint
```
GET https://quanta-qr-api.vercel.app/api/qrcode
```

### 📥 พารามิเตอร์ที่รองรับ

| พารามิเตอร์ | คำอธิบาย                      | ตัวอย่าง                    |
|-------------|-------------------------------|-----------------------------|
| `value`     | ข้อความที่ต้องการแปลงเป็น QR | `สวัสดี โลก`, `Hello+QR!`  |

> ✅ **หมายเหตุ**: ต้องส่งค่า `value` แบบ URL encoded หากมีช่องว่างหรืออักขระพิเศษ

---

## ✅ ตัวอย่างการเรียกใช้งาน

### 1. ผ่านเบราว์เซอร์
```
https://quanta-qr-api.vercel.app/api/qrcode?value=สวัสดี+โลก
```
​จะได้ภาพ PNG ของ QR Code เมื่อสแกนได้ข้อความว่า `สวัสดี โลก`

---

### 2. cURL
```bash
curl -o qr.png "https://quanta-qr-api.vercel.app/api/qrcode?value=Hello%20World"
```
จะดาวน์โหลดไฟล์ `qr.png` มาในโฟลเดอร์ปัจจุบัน

---

### 3. JavaScript (fetch ใน Browser)
```html
<img id="qrImage" alt="QR Code" />

<script>
  const url = 'https://quanta-qr-api.vercel.app/api/qrcode?value=Next.js+QR';
  fetch(url)
    .then(res => res.blob())
    .then(blob => {
      document.getElementById('qrImage').src = URL.createObjectURL(blob);
    })
    .catch(console.error);
</script>
```

---

### 4. Node.js (ใช้ axios)
```js
import fs from 'fs';
import axios from 'axios';

async function generateQR() {
  const url = 'https://quanta-qr-api.vercel.app/api/qrcode?value=Node.js+QR';
  const response = await axios.get(url, { responseType: 'arraybuffer' });
  fs.writeFileSync('qr-node.png', response.data);
  console.log('QR saved to qr-node.png');
}

generateQR().catch(console.error);
```

---

### 5. Python (ใช้ requests)
```python
import requests

def download_qr(text, filename='qr_py.png'):
    url = 'https://quanta-qr-api.vercel.app/api/qrcode'
    params = {'value': text}
    r = requests.get(url, params=params)
    if r.status_code == 200:
        with open(filename, 'wb') as f:
            f.write(r.content)
        print(f'QR saved to {filename}')
    else:
        print('Error:', r.status_code, r.text)

download_qr('สวัสดี+Python')
```

---

### 6. PHP (ใช้ cURL)
```php
<?php
$text = 'สวัสดี+PHP';
$url = "https://quanta-qr-api.vercel.app/api/qrcode?value={$text}";

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$data = curl_exec($ch);
curl_close($ch);

file_put_contents('qr_php.png', $data);
echo "QR saved to qr_php.png\n";
?>
```

---

### 7. React Component
```jsx
import { useState, useEffect } from 'react';

export default function QRGenerator({ text }) {
  const [src, setSrc] = useState('');

  useEffect(() => {
    const encoded = encodeURIComponent(text);
    setSrc(`https://quanta-qr-api.vercel.app/api/qrcode?value=${encoded}`);
  }, [text]);

  return (
    <div>
      <h3>QR for: {text}</h3>
      <img src={src} alt={`QR code for ${text}`} />
    </div>
  );
}
```
```jsx
// ใช้งานในเพจ
<QRGenerator text="สวัสดี React" />
```

---

## ⚠️ ข้อควรระวัง
- ค่าที่ส่งผ่าน `value` **ต้องเข้ารหัส URL (URL encode)** เสมอ  
- หากไม่ส่งค่า `value` ระบบจะใช้ข้อความดีฟอลต์ `Hello, Next.js 15!`  

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