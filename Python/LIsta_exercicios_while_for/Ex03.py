# Faça um programa que leia e valide as seguintes informações:
#
# Nome: maior que 3 caracteres;
# Idade: entre 0 e 150;
# Salário: maior que zero;
# Sexo: 'f' ou 'm';
# Estado Civil: 's', 'c', 'v', 'd';

nome = str(input("Digite o seu nome: "))
if(len(nome) < 3):
    print("Este nome é muito pequeno!")
else:
    idade = int(input("Digite a sua idade: "))
    if(idade < 0 or idade > 150):
        print("Idade inválida!")
    else:
        salario = float(input("Digite o valor de seu salário: "))
        if(salario < 0):
            print("Valor do salário incorreto!")
        else:
            sexo = str(input("Digite o seu sexo (m) Masculino ou (f) Feminino: "))
            if(sexo == "m" or sexo == "f"):
                est_civil = str(input("Informe seu estado civil (s)solteiro, (c)casado, (v)viúvo, (d)divorciado: "))
                if(est_civil == "s" or est_civil == "c" or est_civil == "v" or est_civil == "d"):
                    print("DADOS VÁLIDADOS COM SUCESSO!")
                else:
                    print("Estado civil informado incorretamente!")
            else:
                print("Foi informado incorreto a opção do sexo!")