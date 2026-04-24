import requests

s = requests.Session()
s.post('http://localhost:5000/api/auth/login', json={'email':'admin@security.com', 'password':'admin123'})
res = s.post('http://localhost:5000/api/scan', json={'target':'google.com', 'scan_type':'normal', 'consent':True})
print("Scan:", res.status_code, res.text)
