# A
def A(a, b):
    return (a**2+b**2)**0.5

# B
def B(num):
    print(f"The next number for the number {num} is {num+1}.")
    print(f"The previous number for the number {num} is {num-1}.")

# C
def C(n, k):
    return k // n

# D
def D(n, k):
    return k % n

# E
def E(v, t):
    vt = v * t % 109
    e = (vt + 109) % 109
    return e

