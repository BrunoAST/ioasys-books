import React, { Component } from 'react';

import './books.scss';
import { BookModel } from './models/BookModel';
import { BookPaginated } from './models/BookPaginated';
import BooksListHttp from './services/BooksList';

export default class BooksList extends Component {
    state = {
        books: [],
        page: 0,
        amount: 0
    }

    constructor(props: any) {
        super(props);
    }

    async componentDidMount() {
        await BooksListHttp.getBooks()
            .then(res => this.addState(res.data));
    }

    addState = (book: BookPaginated) => {
        this.setState({
            books: book.data,
            page: book.page,
            amount: book.amount
        });
    }

    render() {
        return (
            <div className="container-list">
                <ul className="list">
                    {this.state.books.map((book: BookModel) =>
                        <li className="item-container" key={book.id}>
                            <img src={book.imageUrl} alt={book.title} height="120" />

                            <div className="book-info">
                                <section>
                                    <h1 className="book-title text-primary-fg">{book.title}</h1>
                                    {
                                        book.authors.map((author: string, index: number) =>
                                            <h3 className="book-author primary-fg" key={index}>{author}</h3>)
                                    }
                                </section>

                                <div className="book-numbers">
                                    <span className="text-secondary-fg">{book.pageCount} páginas</span>
                                    <span className="text-secondary-fg">{book.publisher}</span>
                                    <span className="text-secondary-fg">Publicado em: {book.published}</span>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}
