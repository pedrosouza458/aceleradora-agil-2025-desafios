## Desafios Aceleradora Ágil 2025
Resolução dos desafios da 2ª fase do processo seletivo, esse repositório contém os dois projetos da etapa: Loja Agilstore e Galera de Fotos.

## Tecnologias Utilizadas
Aqui estão listadas as principais tecnologias utilizadas em cada projeto.
##  Loja Agilstore

- **Typescript**: linguagem para tipagem do código, facilitando o desenvolvimento.
- **Node.js**: tecnologia para rodar javascript/typescript pelo lado do servidor.
- **npm**: gerenciador de pacotes do Node.
- **@types/node**: tipagem das bibliotecas nativas do Node.
- **tsx**: biblioteca para rodar Typescript no Node.
- **table**: biblioteca para gerar tabelas.
- **git**: controle de versão e disponibilização do código.

##  Galeria de Fotos

- **Typescript**: linguagem para tipagem do código, facilitando o desenvolvimento.
- **@types/react, @types/react-dom**: bibliotecas para tipagem.
- **npm**: gerenciador de pacotes do Node.
- **React**: framework para desenvolvimento de componentes reutilizáveis.
- **Vite**: servidor de desenvolvimento.
- **@vitejs/plugin-react-swc**: plugin do Vite para rodar React como SWC (Speedy Web Compiler)
- **Tailwind CSS**: framework CSS para estilização.
- **Phosphor Icons**: biblioteca de ícones.
- **Axios**: cliente HTTP para buscar dados da API.
- **git**: controle de versão e disponibilização do código.
- **Unsplash API**: API do site de fotos Unsplash para coleta do banco de imagens.

## Pré-requesitos para rodar o projeto

- **Node.js**: Versão 18 or maior.
- **npm**, **yarn** ou **pnpm**.

## Como rodar as aplicações
Clone o repositório para baixar os dois projetos:
```bash
git clone https://github.com/pedrosouza458/aceleradora-agil-2025-desafios
```
Após isso siga para o tutorial separado para cada projeto.

## Como rodar Loja Agilstore
Navegue para a pasta do projeto:
```bash
cd aceleradora-agil-2025-desafios
```
Navegue para a pasta loja-agilstore:
```bash
cd loja-agilstore
```
Instale as dependências com npm:
```bash
npm i
```
Rode a aplicação
```bash
npm run dev
```
### Informações Adicionais
- O projeto Loja Agilstore já possui um JSON com um conjunto de produtos pronto para testar junto com a criação de novos produtos. O arquivo está localizado na pasta **src/data/products.json**. Os dados padrão também pode ser atualizados e deletados.

## Como rodar Galeria de Fotos
Navegue para a pasta do projeto:
```bash
cd aceleradora-agil-2025-desafios
```
Navegue para a pasta galeria-de-fotos:
```bash
cd galeria-de-fotos
```
Instale as dependências com npm:
```bash
npm i
```
Rode a aplicação
```bash
npm run dev
```
## Informações Adicionais
- O termo padrão de pesquisa quando o projeto é aberto é "beautiful nature", sinta-se a vontade para pesquisar o que quiser.
- A api do Unsplash possui um limite de 50 requisições por hora.

