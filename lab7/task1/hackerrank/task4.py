from math import atan, degrees

ab = int(input())
bc = int(input())

angle = degrees(atan(ab / bc))

print(round(angle), "°", sep="")