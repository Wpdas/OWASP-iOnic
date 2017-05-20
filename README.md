Este é um projeto desenvolvido em [Ionic](http://ionicframework.com/).

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

#### Códigos (Somente dos que tiveram exemplos na aplicação):
| Exemplo no App | Código (TS) |
| --- | --- |
| Dados Inseguros (Simulador/Device) | [m2-unsafe-data.ts](https://github.com/Wpdas/SecurityOWASP/blob/master/src/pages/m2-unsafe-data/m2-unsafe-data.ts). |
| Comunicação Insegura (SSL) | [m3-unsafe-communication.ts](https://github.com/Wpdas/SecurityOWASP/blob/master/src/pages/m3-unsafe-communication/m3-unsafe-communication.ts). |
| Criptografia Inadequada | [m5-no-encryption.ts](https://github.com/Wpdas/SecurityOWASP/blob/master/src/pages/m5-no-encryption/m5-no-encryption.ts). |
| SQL Injection (Simulador/Device) | [m5-sql-injection.ts](https://github.com/Wpdas/SecurityOWASP/blob/master/src/pages/m5-sql-injection/m5-sql-injection.ts). |
| Funcionalidade Estranha | [m10-extraneous-functionality.ts](https://github.com/Wpdas/SecurityOWASP/blob/master/src/pages/m10-extraneous-functionality/m10-extraneous-functionality.ts). |

Observação: Todo código do projeto pode ser explorado.