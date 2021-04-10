import React, { Component } from 'react';

import './books.scss';
import Loader from '../Loader/Loader';
import { BookModel } from './models/BookModel';
import { BookPaginated } from './models/BookPaginated';
import BooksListHttp from './services/BooksList';
import Paginator from '../Paginator/Paginator';
import Modal from '../ModalBook/ModalBook';

export default class BooksList extends Component {
    state = {
        books: [],
        page: 0,
        isSearching: true,
        totalItems: 0,
        totalPages: 0,
        isModalVisible: false,
        book: {} as BookModel
    }

    componentDidMount() {
        this.searchBooks();
    }

    async searchBooks(page = 1) {
        this.setState({ isSearching: true });

        await BooksListHttp.getBooks(page)
            .then(res => this.addState(res.data))
            .finally(() => this.setState({ isSearching: false }));
    }

    addState = (book: BookPaginated) => {
        this.setState({
            books: book.data,
            page: book.page,
            totalItems: book.totalItems,
            totalPages: book.totalPages,
        });
    }

    async openModal(bookId: string) {
        await BooksListHttp.getBookById(bookId)
            .then(res => {
                this.setState({ book: res.data });
                this.setState({ isModalVisible: true });
            });
    }

    render() {
        return (
            <div className="container-list">
                <Modal
                    onClose={() => this.setState({ isModalVisible: false })}
                    book={this.state.book}
                    show={this.state.isModalVisible}
                />
                
                <Loader show={this.state.isSearching && this.state.books.length === 0} />
                
                <ul className="list">
                    {this.state.books.map((book: BookModel) =>
                        <li onClick={() => this.openModal(book.id)} className="item-container" key={book.id}>
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

                {
                    this.state.isSearching ? null :
                        <Paginator
                            page={this.state.page}
                            totalItems={this.state.totalItems}
                            totalPages={this.state.totalPages}
                            next={(page) => this.searchBooks(page)}
                            previous={(page) => this.searchBooks(page)}
                        />
                }
            </div>
        );
    }
}
