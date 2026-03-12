def sum_double(a, b):
  sum = a + b
  
  if a == b:
    sum = sum * 2
  return sum

def diff21(n):
  if n <= 21:
    return 21 - n
  else:
    return (n - 21) * 2
  
def parrot_trouble(talking, hour):
  return (talking and (hour < 7 or hour > 20))

def makes10(a, b):
  return (a == 10 or b == 10 or a+b == 10)