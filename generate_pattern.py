import math

def make_pattern():
    # Width and height of one repeating tile
    # In this pattern, large stars are at corners and center, small stars at midpoints of edges
    # Tile size W x W
    W = 400
    
    lines = []
    
    def star_8(cx, cy, r_out, r_in):
        # returns list of (x,y) points for an 8-pointed star
        pts = []
        for i in range(16):
            angle = i * (math.pi / 8.0) - math.pi / 2.0
            r = r_out if i % 2 == 0 else r_in
            pts.append((cx + r * math.cos(angle), cy + r * math.sin(angle)))
        return pts
    
    # Let's inspect the proportions:
    # Large star outer radius ~ 52, inner radius ~ 26
    # Let's write an algorithm that produces the exact Alhambra 8-fold girih tile.
    
