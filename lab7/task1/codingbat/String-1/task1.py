def hello_name(name):
  return "Hello, " + name

def make_abba(a, b):
  return a + b + b + a

def make_tags(tag, word):
  return f"<{tag}>{word}<{tag}>"

def first_two(str):
  end = 2 if len(str) >= 2 else len(str)

  return str[:end]

def left2(str):
    return str[2:] + str[:2]
