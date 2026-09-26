import math
import subprocess

# Let's create an accurate, high-resolution rendering of the Islamic 8-fold arabesque pattern.
# We will use super-sampling (2x) for beautiful, smooth anti-aliased lines.

WIDTH = 1200
HEIGHT = 600
SCALE = 2 # Super-sampling factor
SW = WIDTH * SCALE
SH = HEIGHT * SCALE

# In the user image:
# Width to Height is 2:1.
# Horizontally, there are exactly 2 repeating units (periods).
# Vertically, there is 1 repeating unit.
PERIOD = SW // 2  # 1200 pixels in super-sampled space

# Allocate RGB buffer: initialize with off-white (251, 251, 251)
bg_r, bg_g, bg_b = 251, 251, 251
line_r, line_g, line_b = 210, 210, 210

# To be fast and memory efficient, let's create an SVG first with exact geometry,
# then we can use a Python script with anti-aliased line rasterizer or render via SVG.
# Let's write the SVG!

def build_svg():
    # Tile dimensions: 800 x 400
    W = 800
    H = 400
    L = 400 # 1 period = 400 px
    
    # In one period (400x400):
    # Center: (200, 200) -> Major 8-pointed star rosette
    # Corners: (0,0), (400,0), (0,400), (400,400) -> Major 8-pointed star rosettes
    # Edge centers: (200, 0), (0, 200), (400, 200), (200, 400) -> Minor 8-pointed stars
    
    # Major star dimensions
    R_out = 58.0
    R_in = 31.0
    
    # Petal tips around major star
    R_tip = 118.0
    R_shoulder = 98.0
    
    # Minor star dimensions
    r_min_out = 32.0
    r_min_in = 17.0
    
    paths = []
    
    def add_star(cx, cy, ro, ri, rot=0.0):
        pts = []
        for i in range(16):
            ang = rot + i * (math.pi / 8.0)
            r = ro if i % 2 == 0 else ri
            x = cx + r * math.cos(ang)
            y = cy + r * math.sin(ang)
            pts.append(f"{x:.1f},{y:.1f}")
        paths.append(f'<polygon points="{" ".join(pts)}" class="line" />')
        
    def add_rosette(cx, cy):
        add_star(cx, cy, R_out, R_in, 0.0)
        
        # 8 surrounding petals
        for k in range(8):
            mid_ang = k * (math.pi / 4.0) + (math.pi / 8.0)
            
            # Tip
            tx = cx + R_tip * math.cos(mid_ang)
            ty = cy + R_tip * math.sin(mid_ang)
            
            # Left & right shoulders
            sx1 = cx + R_shoulder * math.cos(mid_ang - 0.22)
            sy1 = cy + R_shoulder * math.sin(mid_ang - 0.22)
            sx2 = cx + R_shoulder * math.cos(mid_ang + 0.22)
            sy2 = cy + R_shoulder * math.sin(mid_ang + 0.22)
            
            # Star tips
            bx1 = cx + R_out * math.cos(k * math.pi / 4.0)
            by1 = cy + R_out * math.sin(k * math.pi / 4.0)
            bx2 = cx + R_out * math.cos((k + 1) * math.pi / 4.0)
            by2 = cy + R_out * math.sin((k + 1) * math.pi / 4.0)
            
            paths.append(f'<path d="M {bx1:.1f},{by1:.1f} L {sx1:.1f},{sy1:.1f} L {tx:.1f},{ty:.1f} L {sx2:.1f},{sy2:.1f} L {bx2:.1f},{by2:.1f}" class="line" />')
            
            # Interlacing ribbon line continuing from petal tip towards neighbor
            nx = cx + (R_tip + 22.0) * math.cos(mid_ang)
            ny = cy + (R_tip + 22.0) * math.sin(mid_ang)
            paths.append(f'<line x1="{tx:.1f}" y1="{ty:.1f}" x2="{nx:.1f}" y2="{ny:.1f}" class="line" />')

    # Add all rosettes and minor stars across a 2x1 grid (with bleed for seamless edges)
    # Centers at (x, y):
    for gx in [-0.5, 0, 0.5, 1.0, 1.5, 2.0, 2.5]:
        for gy in [-0.5, 0, 0.5, 1.0, 1.5]:
            cx = gx * L
            cy = gy * L
            
            # Checkboard pattern:
            # If gx * 2 + gy * 2 is even -> major rosette
            step_x = int(round(gx * 2))
            step_y = int(round(gy * 2))
            
            if (step_x + step_y) % 2 == 0:
                add_rosette(cx, cy)
            else:
                add_star(cx, cy, r_min_out, r_min_in, math.pi / 8.0)
                # Outer connector diamonds around minor star
                for k in range(8):
                    ang = k * (math.pi / 4.0) + (math.pi / 8.0)
                    x1 = cx + r_min_out * math.cos(ang)
                    y1 = cy + r_min_out * math.sin(ang)
                    x2 = cx + (r_min_out + 20.0) * math.cos(ang)
                    y2 = cy + (r_min_out + 20.0) * math.sin(ang)
                    paths.append(f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2:.1f}" y2="{y2:.1f}" class="line" />')

    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">
  <defs>
    <style>
      .bg {{ fill: #fafafa; }}
      .line {{
        stroke: #c8c8c8;
        stroke-width: 1.8;
        stroke-linecap: round;
        stroke-linejoin: round;
        fill: none;
      }}
    </style>
  </defs>
  <rect width="100%" height="100%" class="bg" />
  {' '.join(paths)}
</svg>'''

    with open('/public/default-bg.svg', 'w') as f:
        f.write(svg_content)
    print("Vector SVG generated at /public/default-bg.svg")

build_svg()
