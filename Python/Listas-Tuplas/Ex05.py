# Faça um Programa que leia 20 números inteiros e armazene-os num vetor.
# Armazene os números pares no vetor PAR e os números IMPARES no vetor impar. Imprima os três vetores.

par = []
impar = []

for i in range(20):
    n = int(input(f"Digite o {i+1}º número: "))
    if (n % 2 == 0):
        par.append(n)
    else:
        impar.append(n)
print("Pares: ",par)
print("Impares: ",impar)