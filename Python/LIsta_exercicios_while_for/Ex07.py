# Faça um programa que leia 5 números e informe o maior número.

n1 = int(input("Digite o primeiro número: "))
n2 = int(input("Digite o segundo número: "))
n3 = int(input("Digite o terceiro número: "))
n4 = int(input("Digite o quarto número: "))
n5 = int(input("Digite o quinto número: "))


if(n1 == n2 and n1 == n3 and n1 == n4 and n1 == n5):
    print("Todos são iguais!")
else:
    if (n1 > n2 and n1 > n3 and n1 > n4 and n1 > n5):
        print(n1,"é o maior!")
    elif(n2 > n3 and n2 > n4 and n2 > n5):
        print(n2,"é o maior!")
    elif(n3 > n4 and n3 > n5):
        print(n3,"é o maior!")
    elif(n4 > n5):
        print(n4,"é o maior!")
    else:
        print(n5,"é o maior!")