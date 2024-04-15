"""Faça um programa, com uma função que necessite de um argumento.
A função retorna o valor de caractere ‘P’, se seu argumento for positivo,
e ‘N’, se seu argumento for zero ou negativo."""

n = int(input("Digite um número: "))

def validador(x):
    if(x > 0):
        return "P"
    else:
        return "N"
print(validador(n))