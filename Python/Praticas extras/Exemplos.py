txt = input("Entre com uma palavra ou frase: ")
txt = txt.lower()
txt = txt.replace(" ", "")

i = 0
j = len(txt) - 1

palindromo = True
while i < j:
    if txt[i] != txt[j]:
        palindromo = False
        break
    else:
        i = i + 1
        j = j - 1

if palindromo:
    print("Palíndromo")
else:
    print("Não palíndromo")