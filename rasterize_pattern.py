import math
import subprocess

W = 800
H = 400
SS = 2
SW = W * SS
SH = H * SS

# Grid of pixels (RGB)
bg = (250, 250, 250)
line_color = (205, 205, 205)

# Initialize buffer with background color
buf = bytearray([bg[0], bg[1], bg[2]] * (SW * SH))

def set_pixel(x, y, r, g, b):
    if 0 <= x < SW and 0 <= y < SH:
        idx = (y * SW + x) * 3
        buf[idx] = r
        buf[idx+1] = g
        buf[idx+2] = b

def draw_thick_line(x0, y0, x1, y1, width=3):
    dx = x1 - x0
    dy = y1 - y0
    dist = math.hypot(dx, dy)
    if dist < 1e-4:
        return
    steps = int(dist * 1.5)
    for s in range(steps + 1):
        t = s / max(steps, 1)
        cx = x0 + t * dx
        cy = y0 + t * dy
        # brush circle
        rad = width / 2.0
        for oy in range(-int(rad + 0.5), int(rad + 1.5)):
            for ox in range(-int(rad + 0.5), int(rad + 1.5)):
                if ox*ox + oy*oy <= rad*rad:
                    px = int(cx + ox)
                    py = int(cy + oy)
                    set_pixel(px, py, line_color[0], line_color[1], line_color[2])

L = 400.0 * SS
R_out = 58.0 * SS
R_in = 31.0 * SS
R_tip = 118.0 * SS
R_shoulder = 98.0 * SS
r_min_out = 32.0 * SS
r_min_in = 17.0 * SS

def draw_star(cx, cy, ro, ri, rot=0.0):
    pts = []
    for i in range(16):
        ang = rot + i * (math.pi / 8.0)
        r = ro if i % 2 == 0 else ri
        pts.append((cx + r * math.cos(ang), cy + r * math.sin(ang)))
    for i in range(16):
        x0, y0 = pts[i]
        x1, y1 = pts[(i + 1) % 16]
        draw_thick_line(x0, y0, x1, y1, 4)

def draw_rosette(cx, cy):
    draw_star(cx, cy, R_out, R_in, 0.0)
    for k in range(8):
        mid_ang = k * (math.pi / 4.0) + (math.pi / 8.0)
        tx = cx + R_tip * math.cos(mid_ang)
        ty = cy + R_tip * math.sin(mid_ang)
        sx1 = cx + R_shoulder * math.cos(mid_ang - 0.22)
        sy1 = cy + R_shoulder * math.sin(mid_ang - 0.22)
        sx2 = cx + R_shoulder * math.cos(mid_ang + 0.22)
        sy2 = cy + R_shoulder * math.sin(mid_ang + 0.22)
        bx1 = cx + R_out * math.cos(k * math.pi / 4.0)
        by1 = cy + R_out * math.sin(k * math.pi / 4.0)
        bx2 = cx + R_out * math.cos((k + 1) * math.pi / 4.0)
        by2 = cy + R_out * math.sin((k + 1) * math.pi / 4.0)
        
        draw_thick_line(bx1, by1, sx1, sy1, 4)
        draw_thick_line(sx1, sy1, tx, ty, 4)
        draw_thick_line(tx, ty, sx2, sy2, 4)
        draw_thick_line(sx2, sy2, bx2, by2, 4)
        
        nx = cx + (R_tip + 22.0 * SS) * math.cos(mid_ang)
        ny = cy + (R_tip + 22.0 * SS) * math.sin(mid_ang)
        draw_thick_line(tx, ty, nx, ny, 4)

for gx in [-0.5, 0, 0.5, 1.0, 1.5, 2.0, 2.5]:
    for gy in [-0.5, 0, 0.5, 1.0, 1.5]:
        cx = gx * L
        cy = gy * L
        step_x = int(round(gx * 2))
        step_y = int(round(gy * 2))
        if (step_x + step_y) % 2 == 0:
            draw_rosette(cx, cy)
        else:
            draw_star(cx, cy, r_min_out, r_min_in, math.pi / 8.0)
            for k in range(8):
                ang = k * (math.pi / 4.0) + (math.pi / 8.0)
                x1 = cx + r_min_out * math.cos(ang)
                y1 = cy + r_min_out * math.sin(ang)
                x2 = cx + (r_min_out + 20.0 * SS) * math.cos(ang)
                y2 = cy + (r_min_out + 20.0 * SS) * math.sin(ang)
                draw_thick_line(x1, y1, x2, y2, 4)

# Write PPM
with open('/tmp/pattern_raw.ppm', 'wb') as f:
    f.write(f'P6\n{SW} {SH}\n255\n'.encode('latin1') + buf)

# Downsample using ImageMagick for pristine anti-aliasing
subprocess.run(['convert', '/tmp/pattern_raw.ppm', '-resize', f'{W}x{H}', '-quality', '95', '/public/default-bg.jpg'])
print("Successfully created /public/default-bg.jpg with pristine anti-aliased Islamic arabesque pattern!")
