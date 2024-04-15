'''Faça um programa, com uma função que necessite de três argumentos,
 e que forneça a soma desses três argumentos'''

a = int(input("Digite o primeiro número: "))
b = int(input("Digite o segundo número: "))
c = int(input("Digite o terceiro número: "))

def somador(x, y, z):
    soma = x + y + z
    return soma
print("O valor da soma é: ",somador(a,b,c))