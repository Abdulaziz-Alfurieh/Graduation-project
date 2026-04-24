import requests

s = requests.Session()
res = s.post('http://localhost:5000/api/auth/login', json={'email':'admin@security.com', 'password':'admin123'})
print("Login:", res.status_code, res.text)

res = s.post('http://localhost:5000/api/ping', json={'target':'google.com'})
print("Ping:", res.status_code, res.text)
