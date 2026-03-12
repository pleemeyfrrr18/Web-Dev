from models import Dog, Cat, Animal

def main():
    dog = Dog("Rex", 5, 30, "German Shepherd")
    cat = Cat("Misty", 3, 5, "White")
    animal = Animal("Generic", 2, 10)

    animals = [dog, cat, animal]

    for a in animals:
        print(a)
        print(a.eat())
        print(a.sleep())
        print(a.make_sound())   
        print()


main()