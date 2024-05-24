# What is Streams in Node.Js?

Em Node.js, streams são uma forma eficiente de lidar com dados de entrada e saída, ou seja, operacoes de I/O (Input/Output), especialmente quando se trata de operações que envolvem grandes volumes de dados. Uma stream é basicamente uma sequência de dados que é processada por pedaços, o que permite o processamento parcial dos dados antes de todo o conjunto ser carregado na memória.

## Types of Streams:

Existe quatro tipos de stream, sendo eles:

- **Readbles (Streams de leitura)**: Usados para *Ler* dados de um fonte, a fonte pode ser um arquivo, uma solicitação HTTP, uma resposta de banco de dados, etc...

	- Metodos principais:
		```javascript
		read() // Le os dados
		.pipe() // Conecta(Segue um logica de encadeamento) um stream de leitura a um stream de escrita ou de transformacao
		```

- **Writable (Streams de escrita)**: Usados para *Escrever* dados em um destino. O destino pode ser um arquivo, uma resposta HTTP, uma conexão de rede, etc..

	- Metodos principais:

		```javascript
		write() // Escreve dados da stream
		end() // Finaliza a stream, indicando que nao ha mais dados a seram escritos
		```

- **Duplex (Streams hibridas)**: Sao streams *Simultaneamente* legiveis e gravaveis.



## Eventos de Streams:


## Beneficios

1. **Eficiencia de memoria**:
2. **Baixa latencia**:
3. **Manipulacao Simplificada de dados**:
