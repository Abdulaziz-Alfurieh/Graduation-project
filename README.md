# 🛡️ Pentest Platform | منصة اختبار الاختراق
### Graduation Project | مشروع التخرج

> A web-based penetration testing platform with AI-powered reporting and automated scanners.
> منصة ويب لاختبار الاختراق مع تقارير ذكاء اصطناعي وفحص آلي.

---

## 👥 Team | الفريق

| # | Name | الاسم | Role | المهمة |
|---|---|---|---|---|
| 1 | Member 1 | عضو 1 | Frontend + Project Lead | الواجهة + قائد المشروع |
| 2 | Member 2 | عضو 2 | Backend + API | الخادم والقاعدة |
| 3 | Member 3 | عضو 3 | AI + Reports | الذكاء الاصطناعي والتقارير |
| 4 | Member 4 | عضو 4 | Scanners + Scripts | أدوات الفحص |

---

## 🚀 How to Run | تشغيل المشروع

**Step 1 — Clone | نزّل المشروع**
```bash
git clone https://github.com/Abdulaziz-Alfurieh/Graduation-project.git
cd Graduation-project
```

**Step 2 — Install | ثبّت المكتبات**
```bash
cd pentest-platform/backend
pip install -r requirements.txt
```

**Step 3 — Configure | اضبط الإعدادات**
```bash
cp .env.template .env
nano .env
```

**Step 4 — Start | شغّل المنصة**
```bash
cd pentest-platform
bash start.sh
```

**Step 5 — Open | افتح المتصفح**http://localhost:5000---

## 📁 Project Structure | هيكل المشروع
Graduation-project/
│
├── pentest-platform/
│   ├── frontend/          # HTML pages | صفحات الواجهة
│   ├── backend/
│   │   ├── app.py         # Main server | الخادم الرئيسي
│   │   ├── ai/            # AI module | وحدة الذكاء الاصطناعي
│   │   ├── scanners/      # Scan tools | أدوات الفحص
│   │   ├── database/      # DB models | نماذج القاعدة
│   │   └── utils/         # Helpers | أدوات مساعدة
│   └── start.sh           # Quick start | تشغيل سريع
│
└── scripts/               # Standalone scripts | سكريبتات منفردة

---

## 🌿 Git Workflow | طريقة العمل مع Git

**بداية كل يوم | Start of every day**
```bash
git pull origin main
```

**أثناء الشغل | During work**
```bash
git add .
git commit -m "Type: description | وصف التغيير"
```

**نهاية اليوم | End of day**
```bash
git push origin your-branch-name
```

---

## 🌿 Branch Naming | تسمية الـ Branches

```bash
git checkout -b feature/nmap-scanner   # ميزة جديدة | New feature
git checkout -b fix/login-bug          # إصلاح خطأ | Bug fix
git checkout -b update/ai-reports      # تحديث | Update
```

---

## ✅ Commit Messages | رسائل الـ Commit

```bash
# ✅ الصح
git commit -m "Add: PDF export in Reports page"
git commit -m "Fix: Nmap scanner timeout after 30s"
git commit -m "Update: login form validation"

# ❌ الغلط
git commit -m "update"
git commit -m "fix"
git commit -m "changes"
```

---

## 🔧 Tech Stack | التقنيات

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Backend | Python, Flask |
| Database | SQLite / Supabase |
| AI | Ollama, Gemini API |
| Scanners | Nmap, SQLMap, Wfuzz, Shodan |
| Reports | PDF Generator, OWASP Mapper |

---

## ⚠️ Important | تنبيهات

- 🔴 **Never push `.env`** — contains secret keys | لا ترفع ملف `.env` أبداً
- 🟡 **Always `git pull`** before starting | دائماً pull قبل ما تبدأ
- 🟢 **Test locally** before pushing to `main` | اختبر محلياً قبل الرفع

---

*Last updated | آخر تحديث: April 2026*
