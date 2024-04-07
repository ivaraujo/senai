'''Escreva um programa que, dada uma sequência de números inteiros
(todos fornecidos na mesma linha, separados por espaços), imprima
a média desses números.'''

texto = input("Digite os números para somar: ")
numeros = texto.split()
soma = 0

for i in numeros:
    soma = soma + int(i)
media = soma/len(numeros)
print(media)