# Mini Twitter CRUD

Este projeto simula um CRUD simples (Create, Read, Update, Delete) em JavaScript, operando como um mini Twitter. Ele permite criar, ler, atualizar e excluir posts de um usuário específico.

## Conteúdo

1. [Descrição](#descrição)
2. [Funcionalidades](#funcionalidades)
3. [Como Executar](#como-executar)
4. [Exemplos de Uso](#exemplos-de-uso)

## Descrição

Este código implementa um sistema básico de CRUD para gerenciar usuários e posts em uma estrutura chamada `miniTwitter`. Ele realiza as seguintes operações:

- **Create**: Adiciona novos posts.
- **Read**: Retorna a lista de posts existentes.
- **Update**: Atualiza o conteúdo de um post.
- **Delete**: Remove posts por ID.

## Funcionalidades

O projeto contém as seguintes funções:

- **criaPost(dados)**: Adiciona um novo post ao `miniTwitter`. Exige um objeto com os atributos `owner` (usuário que criou o post) e `content` (conteúdo do post).
- **pegaPosts()**: Retorna a lista completa de posts atualmente armazenados.
- **atualizaContentDoPost(id, novoConteudo)**: Atualiza o conteúdo de um post existente, identificando-o pelo `id`.
- **apagaPost(id)**: Exclui um post do `miniTwitter` com base no `id`.

## Como Executar

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Salve o código em um arquivo `index.js`.
3. No terminal, navegue até o diretório do arquivo e execute o seguinte comando:

   ```bash
   node index.js
   ```

## Exemplos de Uso

### Criar posts

```javascript
criaPost({ owner: "danielfernandes", content: "hello world2" });
criaPost({ owner: "danielfernandes", content: "hello world3" });
```

### Ler posts

```javascript
console.log(pegaPosts());
```

### Atualizar post

```javascript
atualizaContentDoPost(1, "Novo conteúdo do post");
```

### Deletar post

```javascript
apagaPost(1);
```
