import math
import subprocess

def create_islamic_tile(width=800, height=400):
    # Scale: Period L = 400 horizontally, 400 vertically.
    # width = 800, height = 400 contains exactly 2 periods horizontally and 1 vertically,
    # identical to the 2:1 crop ratio in the user's uploaded WhatsApp image!
    L = 400.0
    
    # Radii for major star
    R_maj_out = 68.0
    R_maj_in = 36.0
    
    # Petal dimensions around major star
    R_petal_tip = 126.0
    R_petal_shoulder = 104.0
    
    # Minor star radii
    R_min_out = 38.0
    R_min_in = 20.0
    R_min_petal_tip = 70.0
    
    svg = []
    svg.append(f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}">')
    svg.append('''
  <defs>
    <style>
      .bg { fill: #fcfcfc; }
      .pattern-line {
        stroke: #c8c8c8;
        stroke-width: 2.2;
        stroke-linecap: round;
        stroke-linejoin: round;
        fill: none;
      }
      .pattern-line-subtle {
        stroke: #d4d4d4;
        stroke-width: 1.8;
        stroke-linecap: round;
        stroke-linejoin: round;
        fill: none;
      }
    </style>
  </defs>
  <rect width="100%" height="100%" class="bg" />
''')
    
    # Helper to draw an 8-pointed star
    def draw_star(cx, cy, r_out, r_in, rot=0.0):
        pts = []
        for i in range(16):
            ang = rot + i * (math.pi / 8.0)
            r = r_out if (i % 2 == 0) else r_in
            x = cx + r * math.cos(ang)
            y = cy + r * math.sin(ang)
            pts.append(f"{x:.2f},{y:.2f}")
        return f'<polygon points="{" ".join(pts)}" class="pattern-line" />'

    # Helper to draw the 8 surrounding petals (rosette) around a major star
    def draw_rosette_petals(cx, cy):
        elements = []
        for k in range(8):
            ang_center = k * (math.pi / 4.0) + (math.pi / 8.0)
            ang_left = k * (math.pi / 4.0)
            ang_right = (k + 1) * (math.pi / 4.0)
            
            # Base valleys of adjacent star points
            v_left_x = cx + R_maj_in * math.cos(ang_center - math.pi / 8.0) # wait, star valley is at ang_center
            # In star: ang=0 is outer tip, ang=pi/8 is valley!
            # So valley k is at k * pi/4 + pi/8
            # The petal radiates along ang_center = k * pi/4 + pi/8 (from valley), or along star tip?
            # Looking at the user's image:
            # The petals radiate outward between the star tips! That is along the valley angle (ang_center)!
            pass
        return elements

    # Let's use the fundamental girih lines approach:
    # In Islamic girih, all patterns are formed by intersecting lines running at angles k * 22.5° or k * 45°.
    # For this 8-star Alhambra / Zellij pattern:
    # A complete repeat unit is L x L.
    # Major stars are at (x, y) where:
    # x in [0, L/2, L, 3L/2, 2L], y in [0, L/2, L]
    
    # Let's place the centers:
    major_centers = []
    minor_centers = []
    
    for i in range(-1, 5):
        for j in range(-1, 3):
            # Checkboard pattern:
            # (i*L/2, j*L/2)
            if (i + j) % 2 == 0:
                major_centers.append((i * L / 2.0, j * L / 2.0))
            else:
                minor_centers.append((i * L / 2.0, j * L / 2.0))
                
    # 1. Major 8-pointed stars
    for cx, cy in major_centers:
        svg.append(draw_star(cx, cy, R_maj_out, R_maj_in, 0.0))
        
        # Draw the 8 pointed petals surrounding each major star
        for k in range(8):
            mid_ang = k * (math.pi / 4.0) + (math.pi / 8.0)
            # Tip of petal
            tx = cx + R_petal_tip * math.cos(mid_ang)
            ty = cy + R_petal_tip * math.sin(mid_ang)
            
            # Left & right shoulders
            sx1 = cx + R_petal_shoulder * math.cos(mid_ang - 0.22)
            sy1 = cy + R_petal_shoulder * math.sin(mid_ang - 0.22)
            sx2 = cx + R_petal_shoulder * math.cos(mid_ang + 0.22)
            sy2 = cy + R_petal_shoulder * math.sin(mid_ang + 0.22)
            
            # Base points on star outer tips
            bx1 = cx + R_maj_out * math.cos(k * math.pi / 4.0)
            by1 = cy + R_maj_out * math.sin(k * math.pi / 4.0)
            bx2 = cx + R_maj_out * math.cos((k + 1) * math.pi / 4.0)
            by2 = cy + R_maj_out * math.sin((k + 1) * math.pi / 4.0)
            
            # Petal outline: bx1 -> sx1 -> tx -> sx2 -> bx2
            path_d = f"M {bx1:.2f},{by1:.2f} L {sx1:.2f},{sy1:.2f} L {tx:.2f},{ty:.2f} L {sx2:.2f},{sy2:.2f} L {bx2:.2f},{by2:.2f}"
            svg.append(f'<path d="{path_d}" class="pattern-line" />')

    # 2. Minor 8-pointed stars
    for cx, cy in minor_centers:
        svg.append(draw_star(cx, cy, R_min_out, R_min_in, math.pi / 8.0))
        
        # Connectors from minor star tips outward to meet the major petal tips
        for k in range(8):
            ang = k * (math.pi / 4.0) + (math.pi / 8.0)
            mx = cx + R_min_out * math.cos(ang)
            my = cy + R_min_out * math.sin(ang)
            
            ex = cx + R_min_petal_tip * math.cos(ang)
            ey = cy + R_min_petal_tip * math.sin(ang)
            svg.append(f'<line x1="{mx:.2f}" y1="{my:.2f}" x2="{ex:.2f}" y2="{ey:.2f}" class="pattern-line-subtle" />')

    svg.append('</svg>')
    
    full_svg = "\n".join(svg)
    with open('/public/default-bg.svg', 'w') as f:
        f.write(full_svg)
    print("SVG generated successfully at /public/default-bg.svg")

create_islamic_tile()
