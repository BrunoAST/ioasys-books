import React, { Component } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import './modal-book.scss';

import Button from '../Button/Button';
import { ModalBookModel } from './models/ModalBookModel';
import ReactDOM from 'react-dom';
import { BookModel } from '../BooksList/models/BookModel';

export default class Modal extends Component<ModalBookModel> {
    constructor(props: ModalBookModel) {
        super(props);
    }

    componentDidUpdate() {
        if (this.props.show === true && window.innerWidth <= 959) {
            (document.querySelector('body') as any).classList.add('body-overflow-hidden');
        }
    }

    close() {
        (document.querySelector('body') as any).classList.remove('body-overflow-hidden');
        this.props.onClose();
    }

    get book(): BookModel {
        return this.props.book;
    }

    render() {
            return ReactDOM.createPortal(
            <>
                {
                    this.props.show == true ?
                        <div className="overlay">
                            <div className="container-modal">
                                <div className="close-btn-wrapper">
                                    <Button
                                        style={{ backgroundColor: 'white' }}
                                        click={() => this.close()} styleType="icon" type="button">
                                        <AiOutlineClose />
                                    </Button>
                                </div>

                                <section className="container-modal__book">
                                    <img src={this.book.imageUrl} alt={this.book.title} />

                                    <div className="container-modal__book-info">
                                        <h1 className="container-modal__book-title text-primary-fg">{this.book.title}</h1>
                                        <div className="container-modal__book-author mb-32">
                                            {
                                                this.book.authors.map((author: string, index: number) =>
                                                    index === this.book.authors.length - 1 ?
                                                        <h3 className="primary-fg" key={index}>{author}</h3> :
                                                        <h3 className="primary-fg" key={index}>{author}, &nbsp;</h3>
                                                )
                                            }
                                        </div>

                                        <div className="mb-32 container-modal__book-informations">
                                            <h1 className="text-primary-fg">Informações</h1>

                                            <div className="container-modal__book-informations-column">
                                                <span>Páginas</span>
                                                <span className="text-secondary-fg">{this.book.pageCount} páginas</span>
                                            </div>

                                            <div className="container-modal__book-informations-column">
                                                <span>Editora</span>
                                                <span className="text-secondary-fg">{this.book.publisher}</span>
                                            </div>

                                            <div className="container-modal__book-informations-column">
                                                <span>Publicação</span>
                                                <span className="text-secondary-fg">{this.book.published}</span>
                                            </div>

                                            <div className="container-modal__book-informations-column">
                                                <span>Idioma</span>
                                                <span className="text-secondary-fg">{this.book.language}</span>
                                            </div>

                                            <div className="container-modal__book-informations-column">
                                                <span>Título</span>
                                                <span className="text-secondary-fg">{this.book.title}</span>
                                            </div>

                                            <div className="container-modal__book-informations-column">
                                                <span>ISBN-10</span>
                                                <span className="text-secondary-fg">{this.book.isbn10}</span>
                                            </div>

                                            <div className="container-modal__book-informations-column">
                                                <span>ISBN-13</span>
                                                <span className="text-secondary-fg">{this.book.isbn13}</span>
                                            </div>

                                            {/* <span className="text-secondary-fg">{this.book.pageCount} páginas</span>
                                            <span className="text-secondary-fg">{this.book.publisher}</span>
                                            <span className="text-secondary-fg">Publicado em: {this.book.published}</span> */}
                                        </div>

                                        <div className="container-modal__book-informations">
                                            <h1 className="text-primary-fg">Resenha da editora</h1>
                                            <div className="container-modal__book-informations-description text-secondary-fg">
                                                <span>
                                                    {this.book.description}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                            </div>
                        </div> :
                        null
                }
            </>,
            document.getElementById('portal') as Element
        );
    }
}
