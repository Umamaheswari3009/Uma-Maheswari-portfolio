import subprocess
import os
import shutil

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
edge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
html_path = os.path.join(os.path.dirname(__file__), "resume.html")
pdf_public = os.path.join(BASE_DIR, "public", "resume.pdf")
pdf_dist = os.path.join(BASE_DIR, "dist", "resume.pdf")

if os.path.exists(pdf_public):
    os.remove(pdf_public)

file_url = "file:///" + html_path.replace("\\", "/")

cmd = [
    edge_path,
    "--headless",
    "--disable-gpu",
    "--run-all-compositor-stages-before-draw",
    "--no-pdf-header-footer",
    f"--print-to-pdf={pdf_public}",
    file_url
]

print("Running command:", " ".join(cmd))
res = subprocess.run(cmd, capture_output=True, text=True, timeout=15)
print("Return code:", res.returncode)

if os.path.exists(pdf_public):
    print("SUCCESS! File created in public/resume.pdf, size:", os.path.getsize(pdf_public))
    if os.path.exists(os.path.dirname(pdf_dist)):
        shutil.copyfile(pdf_public, pdf_dist)
        print("Copied to dist/resume.pdf")
else:
    print("PDF was not created.")
