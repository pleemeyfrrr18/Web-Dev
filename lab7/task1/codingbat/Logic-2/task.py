def make_bricks(small, big, goal):
  if small + big * 5 < goal:
    return False
    
  if goal % 5 > small:
    return False

  return True
    

def lone_sum(a, b, c):
  if a == b and a == c:
    return 0
  elif a == b:
    return c
  elif a == c:
    return b
  elif b == c:
    return a
  else:
    return a + b + c
  

def lucky_sum(a, b, c):
    if a == 13:
        return 0
    elif b == 13:
        return a
    elif c == 13:
        return a + b
    else:
        return a + b + c


def no_teen_sum(a, b, c):
  a = fix_teen(a)
  b = fix_teen(b)
  c = fix_teen(c)
  
  return a + b + c

def fix_teen(n):
  if (n != 15 and n != 16) and n in range(13, 20):
    return 0
  return n


def close_far(a, b, c):
    cond1 = abs(a - b) <= 1 and abs(a - c) >= 2 and abs(b - c) >= 2
    cond2 = abs(a - c) <= 1 and abs(a - b) >= 2 and abs(b - c) >= 2
    
    return cond1 or cond2


def make_chocolate(small, big, goal):
    used_big = min(big, goal // 5)
    remainder = goal - (used_big * 5)
    
    if remainder <= small:
        return remainder
    
    return -1
