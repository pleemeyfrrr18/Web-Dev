def A(a, b):
    return a if a > b else b

def B(year):
    if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
        print(f"{year} is a leap year.")
    else:
        print(f"{year} is not a leap year.")

def C(answer, test):
    if (str(answer)[::-1] == str(answer)):
        if test == -1:
            print('Yes')
        else:
            print('No')

def D(num):
    if num < 0:
        return -1
    elif num > 0:
        return 1
    else:
        return 0