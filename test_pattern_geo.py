import math

# Let D be the distance between adjacent stars.
# In a square of size 400x400:
# If D = 200, we have stars at:
# x in [0, 200, 400], y in [0, 200, 400]
# That's exactly a 3x3 grid of stars in the tile, matching image.png!
# In image.png:
# Center: 1 star.
# Top, Bottom, Left, Right: 4 stars.
# 4 Corners: 4 stars.
# Exactly 3x3 stars!

D = 200.0
# Star outer radius R_out
# Distance between centers is 200.
# The petals meet halfway: distance = 100.
# So petal tip is at R_petal = 96.
# The star outer radius is around R_out = 46.
# Star inner radius (valleys) is around R_in = 24.

print(f"Grid: D={D}, R_petal={96}, R_out={46}, R_in={24}")
