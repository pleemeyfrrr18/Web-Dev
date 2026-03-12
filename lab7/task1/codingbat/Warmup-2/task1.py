def string_times(str, n):
  result = ""
  for i in range(n):  # range(n) is [0, 1, 2, .... n-1]
    result = result + str  # could use += here
  return result

def front_times(str, n):
  front_len = 3
  if front_len > len(str):
    front_len = len(str)
  front = str[:front_len]
  
  result = ""
  for i in range(n):
    result = result + front
  return result

def string_bits(str):
  result = ""

  for i in range(len(str)):
    if i % 2 == 0:
      result = result + str[i]
  return result

def string_splosion(str):
  result = ""

  for i in range(len(str)):
    result = result + str[:i+1]
  return result