import math
import subprocess

# We will create an ultra-precise replica of image.png.
# In image.png:
# Background color: warm clean off-white #faf8f5 / #fcfbfa
# Pattern line color: warm light taupe / grey #dedbd5 (with slight soft antialiasing)
# Line width: approx 3.2px

W = 600
H = 600
D = 300.0 # Distance between stars (2 periods in 600px)

# Star parameters matching image.png:
R_star_out = 66.0
R_star_in = 33.0

# Petals:
# Around each 8-pointed star, 8 petals radiate from the valleys (angles: pi/8 + k*pi/4)
# Distance to petal tip:
R_petal_tip = 146.0
R_petal_shoulder = 118.0

svg_lines = []

def star_pts(cx, cy, ro, ri, rot=0.0):
    pts = []
    for i in range(16):
        ang = rot + i * (math.pi / 8.0)
        r = ro if i % 2 == 0 else ri
        pts.append((cx + r * math.cos(ang), cy + r * math.sin(ang)))
    return pts

def add_star_and_rosette(cx, cy):
    # 8-pointed star
    pts = star_pts(cx, cy, R_star_out, R_star_in, 0.0)
    pt_str = " ".join([f"{x:.1f},{y:.1f}" for x, y in pts])
    svg_lines.append(f'<polygon points="{pt_str}" class="pat-line" />')
    
    # 8 radiating petals around the star
    for k in range(8):
        # Valley angle where petal originates
        valley_ang = (k * math.pi / 4.0) + (math.pi / 8.0)
        
        # Star tips on either side of the valley
        t1_ang = k * math.pi / 4.0
        t2_ang = (k + 1) * math.pi / 4.0
        
        bx1 = cx + R_star_out * math.cos(t1_ang)
        by1 = cy + R_star_out * math.sin(t1_ang)
        bx2 = cx + R_star_out * math.cos(t2_ang)
        by2 = cy + R_star_out * math.sin(t2_ang)
        
        # Shoulder points
        sx1 = cx + R_petal_shoulder * math.cos(valley_ang - 0.23)
        sy1 = cy + R_petal_shoulder * math.sin(valley_ang - 0.23)
        sx2 = cx + R_petal_shoulder * math.cos(valley_ang + 0.23)
        sy2 = cy + R_petal_shoulder * math.sin(valley_ang + 0.23)
        
        # Outer tip of petal
        tx = cx + R_petal_tip * math.cos(valley_ang)
        ty = cy + R_petal_tip * math.sin(valley_ang)
        
        d = f"M {bx1:.1f},{by1:.1f} L {sx1:.1f},{sy1:.1f} L {tx:.1f},{ty:.1f} L {sx2:.1f},{sy2:.1f} L {bx2:.1f},{by2:.1f}"
        svg_lines.append(f'<path d="{d}" class="pat-line" />')

# Place stars on grid with 1 bleed cell on all sides for seamless boundary
for gx in [-1, 0, 1, 2, 3]:
    for gy in [-1, 0, 1, 2, 3]:
        cx = gx * D
        cy = gy * D
        add_star_and_rosette(cx, cy)

svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">
  <defs>
    <style>
      .bg {{ fill: #faf8f5; }}
      .pat-line {{
        stroke: #dedad4;
        stroke-width: 3.2;
        stroke-linecap: round;
        stroke-linejoin: round;
        fill: none;
      }}
    </style>
  </defs>
  <rect width="100%" height="100%" class="bg" />
  {' '.join(svg_lines)}
</svg>'''

with open('/public/default-bg.svg', 'w') as f:
    f.write(svg_content)

print("SVG generated successfully at /public/default-bg.svg")
