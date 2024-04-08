'''Escreva um programa que, dada uma string representando um texto,
imprima o número de palavras existentes. Observação: você deve
remover os sinais de pontuação (“.”, “,”, “:”, “;”, “!” e “?”)
antes de realizar a contagem das palavras.'''

texto = input("Digite uma frase: ")
print("-"*50)

texto = texto.replace("!","")
texto = texto.replace("?","")
texto = texto.replace(".","")
texto = texto.replace(",","")
texto = texto.replace(":","")
texto = texto.replace(";","")

print("Total de palavras: ",len(texto.split()))