// 極簡靜態網站伺服器（不需安裝任何套件）。Railway 會提供 PORT 環境變數。
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, 'public');
const PORT = process.env.PORT || 3000;
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.json': 'application/json; charset=utf-8' };

// 密碼保護：在 Railway 的 Variables 設定 SITE_USER 與 SITE_PASSWORD 後才會啟用；兩個都沒設就不擋。
const crypto = require('crypto');
const USER = process.env.SITE_USER || '';
const PASS = process.env.SITE_PASSWORD || '';
function same(a, b) {
  const x = crypto.createHash('sha256').update(String(a)).digest();
  const y = crypto.createHash('sha256').update(String(b)).digest();
  return crypto.timingSafeEqual(x, y);
}
function allowed(req) {
  if (!USER || !PASS) return true;
  const h = req.headers.authorization || '';
  if (!h.startsWith('Basic ')) return false;
  const text = Buffer.from(h.slice(6), 'base64').toString('utf8');
  const i = text.indexOf(':');
  if (i < 0) return false;
  return same(text.slice(0, i), USER) & same(text.slice(i + 1), PASS) ? true : false;
}

http.createServer((req, res) => {
  // 內部預覽階段：請搜尋引擎不要收錄。正式對外時把這一行和下面的 robots.txt 拿掉。
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  if (!allowed(req)) {
    res.writeHead(401, { 'WWW-Authenticate': 'Basic realm="DRACO GROUP", charset="UTF-8"', 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('需要帳號密碼');
  }
  if ((req.url || '').split('?')[0] === '/robots.txt') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('User-agent: *\nDisallow: /\n');
  }
  let rel = decodeURIComponent((req.url || '/').split('?')[0]);
  if (rel === '/' || rel === '') rel = '/index.html';
  const file = path.normalize(path.join(ROOT, rel));
  if (!file.startsWith(ROOT + path.sep)) { res.writeHead(403); return res.end('Forbidden'); }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }); return res.end('Not found'); }
    const ext = path.extname(file).toLowerCase();
    res.writeHead(200, { 'Content-Type': TYPES[ext] || 'application/octet-stream', 'Cache-Control': ext === '.html' || ext === '.js' ? 'no-cache' : 'public, max-age=86400' });
    res.end(data);
  });
}).listen(PORT, '0.0.0.0', () => console.log('DRACO GROUP site listening on ' + PORT));
