"""Generate favicon assets from the Maxwell M logo source image."""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public" / "logo-mark.png"

OUTPUTS = {
    ROOT / "src" / "app" / "icon.png": 512,
    ROOT / "src" / "app" / "apple-icon.png": 180,
    ROOT / "public" / "logo-mark.png": 512,
    ROOT / "public" / "icon.png": 512,
    ROOT / "public" / "apple-icon.png": 180,
}


def make_square_icon(img: Image.Image, size: int, padding_ratio: float = 0.08) -> Image.Image:
    rgba = img.convert("RGBA")
    bbox = rgba.getbbox()
    if bbox:
        rgba = rgba.crop(bbox)

    w, h = rgba.size
    side = max(w, h)
    pad = int(side * padding_ratio)
    canvas = Image.new("RGBA", (side + pad * 2, side + pad * 2), (255, 255, 255, 0))
    offset = ((canvas.width - w) // 2, (canvas.height - h) // 2)
    canvas.paste(rgba, offset, rgba)

    return canvas.resize((size, size), Image.Resampling.LANCZOS)


def main() -> None:
    if not SOURCE.exists():
        raise SystemExit(f"Source logo not found: {SOURCE}")

    source = Image.open(SOURCE)

    for path, size in OUTPUTS.items():
        path.parent.mkdir(parents=True, exist_ok=True)
        icon = make_square_icon(source, size)
        icon.save(path, format="PNG", optimize=True)
        print(f"Wrote {path} ({size}x{size})")

    favicon_path = ROOT / "src" / "app" / "favicon.ico"
    favicon_public = ROOT / "public" / "favicon.ico"
    ico_sizes = [16, 32, 48]
    ico_images = [make_square_icon(source, s) for s in ico_sizes]
    favicon_path.parent.mkdir(parents=True, exist_ok=True)
    ico_images[0].save(
        favicon_path,
        format="ICO",
        sizes=[(s, s) for s in ico_sizes],
        append_images=ico_images[1:],
    )
    ico_images[0].save(
        favicon_public,
        format="ICO",
        sizes=[(s, s) for s in ico_sizes],
        append_images=ico_images[1:],
    )
    print(f"Wrote {favicon_path}")
    print(f"Wrote {favicon_public}")


if __name__ == "__main__":
    main()
