class Animal:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def eat(self):
        return f"{self.name} is eating."

    def sleep(self):
        return f"{self.name} is sleeping."

    def make_sound(self):
        return f"{self.name} makes a sound."

    def __str__(self):
        return f"Animal(name={self.name}, age={self.age}, weight={self.weight})"
    

class Dog(Animal):
    def __init__(self, name, age, weight, breed):
        super().__init__(name, age, weight)
        self.breed = breed

    def fetch(self):
        return f"{self.name} is fetching the ball."

    def make_sound(self):
        return f"{self.name} says: Woof!"
    

class Cat(Animal):
    def __init__(self, name, age, weight, color):
        super().__init__(name, age, weight)
        self.color = color

    def climb(self):
        return f"{self.name} is climbing a tree."

    def make_sound(self):
        return f"{self.name} says: Meow!"