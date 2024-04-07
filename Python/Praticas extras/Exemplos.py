texto = input("Entre com uma sequência de números: ")
numeros = texto.split()
soma = 0

for n in numeros:
    soma = soma + int(n)
    media = soma / len(numeros)

print("A média é: ", format(media, ".2f"))