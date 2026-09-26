import math
import subprocess

W = 600
H = 600
SS = 2
SW = W * SS
SH = H * SS
D = 300.0 * SS

# Warm ivory background #faf8f5 = (250, 248, 245)
bg = (250, 248, 245)
# Soft warm taupe line #dedad4 = (222, 218, 212)
line_color = (222, 218, 212)

buf = bytearray([bg[0], bg[1], bg[2]] * (SW * SH))

def set_pixel(x, y, r, g, b):
    if 0 <= x < SW and 0 <= y < SH:
        idx = (y * SW + x) * 3
        buf[idx] = r
        buf[idx+1] = g
        buf[idx+2] = b

def draw_thick_line(x0, y0, x1, y1, width=6):
    dx = x1 - x0
    dy = y1 - y0
    dist = math.hypot(dx, dy)
    if dist < 1e-4:
        return
    steps = int(dist * 1.5)
    rad = width / 2.0
    for s in range(steps + 1):
        t = s / max(steps, 1)
        cx = x0 + t * dx
        cy = y0 + t * dy
        for oy in range(-int(rad + 0.5), int(rad + 1.5)):
            for ox in range(-int(rad + 0.5), int(rad + 1.5)):
                if ox*ox + oy*oy <= rad*rad:
                    px = int(cx + ox)
                    py = int(cy + oy)
                    set_pixel(px, py, line_color[0], line_color[1], line_color[2])

R_star_out = 66.0 * SS
R_star_in = 33.0 * SS
R_petal_tip = 146.0 * SS
R_petal_shoulder = 118.0 * SS

def star_pts(cx, cy, ro, ri, rot=0.0):
    pts = []
    for i in range(16):
        ang = rot + i * (math.pi / 8.0)
        r = ro if i % 2 == 0 else ri
        pts.append((cx + r * math.cos(ang), cy + r * math.sin(ang)))
    return pts

def draw_star_and_rosette(cx, cy):
    pts = star_pts(cx, cy, R_star_out, R_star_in, 0.0)
    for i in range(16):
        x0, y0 = pts[i]
        x1, y1 = pts[(i + 1) % 16]
        draw_thick_line(x0, y0, x1, y1, 6)
        
    for k in range(8):
        valley_ang = (k * math.pi / 4.0) + (math.pi / 8.0)
        t1_ang = k * math.pi / 4.0
        t2_ang = (k + 1) * math.pi / 4.0
        
        bx1 = cx + R_star_out * math.cos(t1_ang)
        by1 = cy + R_star_out * math.sin(t1_ang)
        bx2 = cx + R_star_out * math.cos(t2_ang)
        by2 = cy + R_star_out * math.sin(t2_ang)
        
        sx1 = cx + R_petal_shoulder * math.cos(valley_ang - 0.23)
        sy1 = cy + R_petal_shoulder * math.sin(valley_ang - 0.23)
        sx2 = cx + R_petal_shoulder * math.cos(valley_ang + 0.23)
        sy2 = cy + R_petal_shoulder * math.sin(valley_ang + 0.23)
        
        tx = cx + R_petal_tip * math.cos(valley_ang)
        ty = cy + R_petal_tip * math.sin(valley_ang)
        
        draw_thick_line(bx1, by1, sx1, sy1, 6)
        draw_thick_line(sx1, sy1, tx, ty, 6)
        draw_thick_line(tx, ty, sx2, sy2, 6)
        draw_thick_line(sx2, sy2, bx2, by2, 6)

for gx in [-1, 0, 1, 2, 3]:
    for gy in [-1, 0, 1, 2, 3]:
        cx = gx * D
        cy = gy * D
        draw_star_and_rosette(cx, cy)

with open('/tmp/exact_raw.ppm', 'wb') as f:
    f.write(f'P6\n{SW} {SH}\n255\n'.encode('latin1') + buf)

subprocess.run(['convert', '/tmp/exact_raw.ppm', '-resize', f'{W}x{H}', '-quality', '98', '/public/default-bg.jpg'])
subprocess.run(['convert', '/tmp/exact_raw.ppm', '-resize', f'{W}x{H}', '/public/default-bg.png'])
print("Successfully rasterized /public/default-bg.jpg and /public/default-bg.png!")
