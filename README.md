## Sobre

Este é um projeto desenvolvido em [Ionic](http://ionicframework.com/).

O aplicativo pode ser baixado pelo link interno do Git: [OWASP.apk](https://github.com/Wpdas/SecurityOWASP/blob/master/OWASP.apk).

## App Security OWASP - Instruções

Este é um projeto que visa utilizar práticas de segurança no desenvolvimento de uma aplicação. 
Os exemplos abordados são baseados no OWASP.

Todos os exemplos (exceto os casos que não precisam de código) 
possuem a classe principal contento o *código seguro* e o *código inseguro comentado*.
Eles estão separados pelos comentários *Recomendado* e *Não Recomendado*. 
Esta aplicação usa sempre a classe segura. As classes e toda a aplicação podem ser acessadas no github.

Observação 1: Os exemplos podem abordar mais de um caso num mesmo tópico. 
Pode ser que não tenha exemplos de alguns tópicos.

Observação 2: Alguns exemplos só funcionam quando o código está implementando 
numa aplicação instalada em um dispositivo iOS, Android ou Windows Phone.

#### Lista de Códigos e Prevenções:
| Exemplo no App | Código (TS) |
| --- | --- |
| Dados Inseguros (Simulador/Device) | [Abrir Código](https://github.com/Wpdas/SecurityOWASP/blob/master/src/pages/m2-unsafe-data/m2-unsafe-data.ts). |
| Comunicação Insegura (SSL) | [Abrir Código](https://github.com/Wpdas/SecurityOWASP/blob/master/src/pages/m3-unsafe-communication/m3-unsafe-communication.ts). |
| Criptografia Inadequada | [Abrir Código](https://github.com/Wpdas/SecurityOWASP/blob/master/src/pages/m5-no-encryption/m5-no-encryption.ts). |
| SQL Injection (Simulador/Device) | [Abrir Código](https://github.com/Wpdas/SecurityOWASP/blob/master/src/pages/m5-sql-injection/m5-sql-injection.ts). |
| Funcionalidade Estranha | [Abrir Código](https://github.com/Wpdas/SecurityOWASP/blob/master/src/pages/m10-extraneous-functionality/m10-extraneous-functionality.ts). |
| Qualidade de Código (Classes de Teste) | [Abrir Caso de Testes](https://github.com/Wpdas/JMeter-Node-using-TDD/tree/master/test). |
| Recursos Desatualizados | [Abrir Prevenção - Print](https://github.com/Wpdas/SecurityOWASP/blob/master/screenshots/RecursosDesatualizados.png). |
| Autorização Insegura | [Abrir Prevenção - Print](https://github.com/Wpdas/SecurityOWASP/blob/master/screenshots/AutorizacaoInsegura.png). |
| Qualidade de Código (Prevenção) | [Abrir Prevenção - Print](https://github.com/Wpdas/SecurityOWASP/blob/master/screenshots/QualidadeCodigo.png). |
| Alteração de Código | [Abrir Prevenção - Print](https://github.com/Wpdas/SecurityOWASP/blob/master/screenshots/AlteracaoCodigo.png). |
| Funcionalidade Externa | [Abrir Prevenção - Print](https://github.com/Wpdas/SecurityOWASP/blob/master/screenshots/FuncionalidadeExterna.png). |

Observação: Todo código do projeto pode ser explorado.