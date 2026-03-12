def double_char(str):
    new_str = ""
    for i in range(len(str)):
      new_str += str[i]*2

    return new_str

def count_hi(str):
    count = 0
    for i in range(len(str)-1):
       if str[i] == 'h' and str[i+1] == 'i':
          count += 1

    return count

def cat_dog(str):
   return True if str.count('cat') == str.count('dog') else False

def count_code(str_val):
    count = 0

    for i in range(len(str_val) - 3):
        if str_val[i:i+2] == 'co':
            if str_val[i+3] == 'e':
                count += 1
    return count