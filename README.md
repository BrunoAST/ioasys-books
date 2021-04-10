# ioasys-books
Desafio do camp realizado pela ioasys

## Tecnologias utilizadas
---
- `SCSS`: Usado pra realizar estilizações reutilizávies com mixins e também para contruir um sistema de media query.

- `Redux, Immer:` Para realizar a persistência do token de autentição do usuário.

- `History, react-router-dom:` Para realizar a navegação entre as telas.

## Componentes criados
---

### Button

Para utilizá-lo é necessário informar os seguintes inputs: 

- styleTypes => (`text` ou `icon`): representa o tipo de visual que o component terá.

- type => (`button` ou `submit`)

- `click?: () => void` => emite um callback ao clicar no botão.

- `title?:` string => opcionais.

- `disabled?: boolean` => opcionais.

- `style?: any` => opcionais.

### Exemplo de botão de texto
```ruby
<Button
    styleTypes="text"
    title="Título"
    type="submit"
    disabled={false}
    style={{ color: red }}
    click={() => console.log('Hello')}
><Button>
```

### Exemplo de botão de ícone
```ruby
<Button
    styleTypes="icon"
    type="button"
    disabled={false}
    click={() => console.log('Hello')}
>
    <FiLogOut />
<Button>
```
---

### Paginator

Utilizado na paginação da lista de livros.

- `next: (page: number) => void` => emite a página atual + 1.

- `previous: (page: number) => void` => emite a página atual - 1.

- `page: number` => paágina atual.

- `totalPages: number` => paágina atual.

### Exemplo

```ruby
<Paginator
    page={state.page}
    totalItems={state.totalItems}
    totalPages={state.totalPages}
    next={(page) => searchBooks(page)}
    previous={(page) => searchBooks(page)}
></Paginator>
```

### Paginator

Utilizado para exibir os detalhes de um livro.

- `onClose: () => void` => callback emito quando o botão de fechar do modal é clicado.

- `show: boolean` => página atual.

- `book: BookModel,` => página atual.

BookModel
===

```ruby
export class BookModel {
    constructor(
        public authors: string[],
        public title: string,
        public description: string,
        public pageCount: number,
        public category: string,
        public imageUrl: string,
        public language: string,
        public isbn10: string,
        public isbn13: string,
        public publisher: string,
        public published: number,
        public id: string
    ) { }
}
```

### Exemplo

```ruby
<Paginator
    page={state.page}
    totalItems={state.totalItems}
    totalPages={state.totalPages}
    next={(page) => searchBooks(page)}
    previous={(page) => searchBooks(page)}
></Paginator>
```