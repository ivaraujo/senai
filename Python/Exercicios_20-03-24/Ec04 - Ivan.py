# Escreva uma programa que calcule as raizes de uma equação de segundo grau. O seu programa deve receber
# três números a, b e c, sendo que a equação é definida como ax²+bx+c=0. O seu programa também deve
# tratar o caso em que a=0.
# 
#   FÓRMULA 1º
# x = -c/b
# 
#   FÓRMULA 2º
# x1 = -b+((b**2-4*a*c)**1/2)/(2*a)
# x2 = -b-((b**2-4*a*c)**1/2)/(2*a)
#

a = int(input("Digite o valor da coordenada A: "))
b = int(input("Digite o valor da coordenada B: "))
c = int(input("Digite o valor da coordenada C: "))

if a == 0:
    if b == 0:
        print("Não é possivel calcular a raiz!")
    else:
        x = -c/b
        print("A raiz de X: ",x)
else:
    delta = (b**2-4*a*c)
    if delta < 0:
        print("Não existem raizes reais!")
    elif delta > 0:
        x1 = (-b+(delta**1/2))/(2*a)
        x2 = (-b-(delta**1/2))/(2*a)
        print("As raízes são: ",x1,"e",x2)
    else:
        raiz = -b/(2*a)
        print("A raiz é: ",raiz)