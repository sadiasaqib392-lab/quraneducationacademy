import math

def generate_svg():
    # Unit cell size
    # Let unit period be L = 200
    L = 200.0
    
    # We want a seamless tile.
    # Centers of major 8-star rosettes:
    # (0, 0), (L, 0), (0, L), (L, L), and (L/2, L/2)
    # Centers of minor 8-stars:
    # (L/2, 0), (0, L/2), (L, L/2), (L/2, L)
    
    # Let's define the radius of major star and minor star
    # In standard Alhambra 8-girih:
    # Distance between major star center (0,0) and minor star center (L/2, 0) is L/2 = 100
    # Major star outer radius R1 ≈ 34.0, inner radius r1 ≈ R1 * 0.4142 ≈ 14.1
    # Minor star outer radius R2 ≈ 20.0, inner radius r2 ≈ R2 * 0.4142 ≈ 8.3
    # Petal tips extend to R_petal ≈ 58.0
    
    # Let's write the SVG with precise paths for the rosettes and interlacing petals
    svg_parts = []
    svg_parts.append(f'<svg xmlns="http://www.w3.org/2000/svg" width="{int(L*2)}" height="{int(L)}" viewBox="0 0 {int(L*2)} {int(L)}">')
    svg_parts.append('<defs>')
    svg_parts.append('<style>')
    # Exactly matching user image colors:
    # Background: clean soft white / ivory #fbfbfb
    # Line stroke: light warm grey #cfcfcf with delicate 1.8px stroke
    svg_parts.append('.bg { fill: #fcfcfc; }')
    svg_parts.append('.girih { stroke: #d0d0d0; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; fill: none; }')
    svg_parts.append('</style>')
    svg_parts.append('</defs>')
    svg_parts.append(f'<rect width="{int(L*2)}" height="{int(L)}" class="bg"/>')
    
    # We will generate across a 2x1 cell (400 x 200) to match the exact 2:1 aspect ratio of the user image!
    
    print("Script template ready")

generate_svg()
