from math import sqrt


def numbersTotal(*args):
    total = sum(args)

    return sqrt(total)


print(numbersTotal(1))
