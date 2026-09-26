import subprocess

svg_code = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <defs>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDB813" />
      <stop offset="50%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#D97706" />
    </linearGradient>
    <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#D97706" flood-opacity="0.25" />
    </filter>
  </defs>

  <g fill="url(#goldGrad)" stroke="url(#goldGrad)">
    <!-- Top Crescent Moon -->
    <path d="M 250,5 C 243,5 237,11 237,19 C 237,28 245,35 255,34 C 248,32 243,26 244,20 C 244,14 247,8 250,5 Z" />

    <!-- Outer Arch Canopy Wings -->
    <path d="M 250,22 
             C 252,22 360,140 460,250 
             C 495,290 495,340 455,365 
             C 453,366 450,364 452,360 
             C 485,315 470,275 435,235 
             C 345,135 255,42 250,38 
             C 245,42 155,135 65,235 
             C 30,275 15,315 48,360 
             C 50,364 47,366 45,365 
             C 5,340 5,290 40,250 
             C 140,140 248,22 250,22 Z" />

    <!-- Hanging Center Lantern and Chain -->
    <path d="M 249,38 L 251,38 L 251,110 L 249,110 Z" stroke-width="2" />
    <circle cx="250" cy="55" r="2.5" />
    <circle cx="250" cy="72" r="2.5" />
    <circle cx="250" cy="90" r="3" />

    <!-- Center Lantern Dome & Body -->
    <path d="M 250,105 
             C 240,120 220,135 220,165 
             C 220,205 240,230 250,245 
             C 260,230 280,205 280,165 
             C 280,135 260,120 250,105 Z" fill="url(#goldGrad)" stroke="none" />
    <!-- Lantern Windows (Cutouts) -->
    <path d="M 230,175 L 245,175 L 245,200 L 230,200 Z 
             M 237,165 L 245,175 L 230,175 Z 
             M 255,175 L 270,175 L 270,200 L 255,200 Z 
             M 262,165 L 270,175 L 255,175 Z" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="1.5" />

    <!-- Left Hanging Lantern -->
    <path d="M 140,150 L 140,165" stroke-width="1.5" />
    <path d="M 140,165 L 155,190 L 140,215 L 125,190 Z" fill="none" stroke="url(#goldGrad)" stroke-width="3" />
    <path d="M 140,215 L 140,225" stroke-width="1.5" />

    <!-- Right Hanging Lantern -->
    <path d="M 360,150 L 360,165" stroke-width="1.5" />
    <path d="M 360,165 L 375,190 L 360,215 L 345,190 Z" fill="none" stroke="url(#goldGrad)" stroke-width="3" />
    <path d="M 360,215 L 360,225" stroke-width="1.5" />

    <!-- Stars (5-pointed stars floating) -->
    <!-- Star 1: Upper Left -->
    <polygon points="175,135 178,144 187,144 180,149 182,158 175,153 168,158 170,149 163,144 172,144" stroke="none" />
    <!-- Star 2: Upper Right Small -->
    <polygon points="305,130 307,136 313,136 308,140 310,146 305,142 300,146 302,140 297,136 303,136" stroke="none" />
    <!-- Star 3: Right Prominent -->
    <polygon points="315,185 320,200 336,200 323,209 328,224 315,215 302,224 307,209 294,200 310,200" stroke="none" />
    <!-- Star 4: Mid Left -->
    <polygon points="185,230 188,238 197,238 190,243 193,251 185,246 177,251 180,243 173,238 182,238" stroke="none" />
    <!-- Star 5: Far Left Tiny -->
    <polygon points="65,240 67,246 73,246 68,250 70,256 65,252 60,256 62,250 57,246 63,246" stroke="none" />
    <!-- Star 6: Far Right Tiny -->
    <polygon points="415,225 417,231 423,231 418,235 420,241 415,237 410,241 412,235 407,231 413,231" stroke="none" />
    <!-- Star 7: Center Near Chain -->
    <polygon points="235,98 236,102 240,102 237,105 238,109 235,106 232,109 233,105 230,102 234,102" stroke="none" />

    <!-- Open Quran (Central Book on Rehal) -->
    <!-- Left Open Book Pages -->
    <path d="M 248,310 
             C 210,285 170,265 140,255 
             L 70,305 
             C 120,335 190,380 245,420 
             L 248,420 Z" fill="url(#goldGrad)" stroke="none" />
    <!-- Left Page Outer Highlights / Border -->
    <path d="M 70,305 L 105,245 C 135,260 175,275 220,290" fill="none" stroke="url(#goldGrad)" stroke-width="12" stroke-linejoin="round" stroke-linecap="round" />

    <!-- Right Open Book Pages -->
    <path d="M 252,310 
             C 290,285 330,265 360,255 
             L 430,305 
             C 380,335 310,380 255,420 
             L 252,420 Z" fill="url(#goldGrad)" stroke="none" />
    <!-- Right Page Outer Highlights / Border -->
    <path d="M 430,305 L 395,245 C 365,260 325,275 280,290" fill="none" stroke="url(#goldGrad)" stroke-width="12" stroke-linejoin="round" stroke-linecap="round" />

    <!-- Rehal (Wooden Book Stand) Lower Legs with Calligraphic Feet -->
    <path d="M 248,424 L 205,390 L 160,440 L 180,455 C 190,448 200,440 215,448 L 190,490 L 248,440 Z" fill="url(#goldGrad)" stroke="none" />
    <path d="M 252,424 L 295,390 L 340,440 L 320,455 C 310,448 300,440 285,448 L 310,490 L 252,440 Z" fill="url(#goldGrad)" stroke="none" />
  </g>
</svg>
'''

with open('/public/logo.svg', 'w') as f:
    f.write(svg_code)

# Convert to PNG as well
subprocess.run(['convert', '-background', 'none', '/public/logo.svg', '-resize', '512x512', '/public/logo.png'], check=True)
print("Logo SVG and PNG successfully generated!")
