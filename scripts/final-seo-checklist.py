import json
import re
import time
import urllib.request

URL = "https://maxwellelectrodeal.com/"


def fetch(url: str) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    return urllib.request.urlopen(req, timeout=30).read().decode("utf-8", errors="replace")


def main() -> None:
    html = fetch(URL)
    print("=== FINAL SEO CHECKLIST (PRODUCTION) ===\n")

    h1 = re.findall(r"<h1[^>]*>(.*?)</h1>", html, re.I | re.S)
    print(f"1. Homepage H1 count: {len(h1)}")
    if h1:
        text = re.sub(r"<[^>]+>", "", h1[0]).strip()
        print(f"   {text[:140]}")

    words = len(re.findall(r"\b\w+\b", re.sub(r"<[^>]+>", " ", html)))
    print(f"2. Homepage word count: {words}")

    sm = urllib.request.urlopen("https://maxwellelectrodeal.com/sitemap.xml", timeout=15)
    print(f"3. Sitemap status: {sm.status}")

    rob = fetch("https://maxwellelectrodeal.com/robots.txt")
    print(f"4. Robots: {' | '.join(rob.splitlines()[:4])}")

    print(f"5. GTM count: {html.count('GTM-TFSNMLRK')}")

    types = sorted(set(re.findall(r'"@type":"([^"]+)"', html)))
    print(f"6. Schema @type values: {', '.join(types[:15])}")

    t0 = time.time()
    fetch(URL)
    print(f"7. TTFB approx: {time.time() - t0:.3f}s")

    can = re.search(r'rel="canonical" href="([^"]+)"', html)
    print(f"8. Canonical: {can.group(1) if can else 'missing'}")

    schemas = re.findall(
        r'<script[^>]*application/ld\+json[^>]*>(.*?)</script>',
        html,
        re.S,
    )
    errors = 0
    for s in schemas:
        try:
            json.loads(s)
        except json.JSONDecodeError:
            errors += 1
    print(f"9. JSON-LD blocks: {len(schemas)}, errors: {errors}")
    print("10. Total pages (latest local build): 892")


if __name__ == "__main__":
    main()
