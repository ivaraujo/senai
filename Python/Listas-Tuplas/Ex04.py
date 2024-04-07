consoantes = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','w','x','y','z']
lista = []
conso_achadas = []

for i in range(10):
 letra = str(input(f"Diginte {i}º caracter: ").lower())
 lista.append(letra)
cont = 0
for j in lista:
 if j.isalpha() and j not in ['a','e','i','o','u']:
    cont += 1
    conso_achadas.append(j)    
print(cont)
print(conso_achadas)