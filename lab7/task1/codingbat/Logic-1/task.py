def cigar_party(cigars, is_weekend):
  if cigars in range(40, 61):
    return True
  else:
    if is_weekend and cigars > 60:
      return True
  return False


def date_fashion(you, date):
  if you <= 2 or date <= 2:
    return 0
  elif you >= 8 or date >= 8:
    return 2
  else:
    return 1
  

def squirrel_play(temp, is_summer):
  if temp in range(60, 91):
    return True
  else:
    if is_summer and temp in range(60, 101):
      return True
      
  return False


def caught_speeding(speed, is_birthday):
  if is_birthday:
    if speed in range(66, 86):
      return 1
    elif speed in range(0, 66):
      return 0
    else:
      return 2
  else:
    if speed in range(61, 81):
      return 1
    elif speed in range(0, 61):
      return 0
    else:
      return 2
    

def sorta_sum(a, b):
  sum = a + b
  if sum in range(10, 20):
    return 20
  else:
    return sum
  

def alarm_clock(day, vacation):
  if vacation:
    if day == 0 or day == 6:
      return 'off' 
    else:
      return '10:00'
  else:
    if day == 0 or day == 6:
      return "10:00" 
    else:
      return '7:00'