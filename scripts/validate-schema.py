import json
import re
import sys
import urllib.request

url = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:3004/"
html = urllib.request.urlopen(url).read().decode("utf-8", errors="replace")
schemas = re.findall(
    r'<script[^>]*application/ld\+json[^>]*>(.*?)</script>',
    html,
    re.DOTALL,
)
print(f"URL: {url}")
print(f"Found {len(schemas)} JSON-LD blocks")
errors = 0
for i, s in enumerate(schemas):
    try:
        d = json.loads(s)
        if "@graph" in d:
            types = [n.get("@type") for n in d["@graph"] if isinstance(n, dict)]
            print(f"Block {i + 1}: @graph = {types}")
            for n in d["@graph"]:
                if not isinstance(n, dict):
                    continue
                if n.get("@type") == "Organization":
                    print(f"  org.name: {n.get('name')}")
                    print(f"  org.foundingDate: {n.get('foundingDate')}")
                    print(f"  org.employees: {n.get('numberOfEmployees', {}).get('value')}")
                    addr = n.get("address", {})
                    print(f"  org.street: {addr.get('streetAddress', '')[:70]}")
                if n.get("@type") == "LocalBusiness":
                    ar = n.get("aggregateRating", {})
                    print(f"  business.@id: {n.get('@id')}")
                    print(f"  business.rating: {ar.get('ratingValue')} / reviews: {ar.get('reviewCount')}")
        else:
            print(f"Block {i + 1}: @type = {d.get('@type')}")
            for k in ["name", "url", "description"]:
                if k in d:
                    print(f"  {k}: {str(d[k])[:80]}")
        print(f"Schema {i + 1}: VALID")
    except Exception as e:
        print(f"Schema {i + 1}: INVALID - {e}")
        errors += 1
print(f"Total: {len(schemas)} schemas, {errors} errors")
