import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';

import './paginator.scss';

import Button from '../Button/Button';
import { PaginatorModel } from './models/PaginatorModel';

const Paginator: React.FC<PaginatorModel> = ({ page, totalPages, next, previous }) => {
    function nextPage() {
        let pageCopy = page + 1;
        next(pageCopy);
    }

    function previousPage() {
        let pageCopy = page - 1;
        previous(pageCopy);
    }

    return (
        <div className="paginator-container">
            {
                window.innerWidth <= 599 ?
                    <div className="pagination-actions__mobile">
                        <Button disabled={page === 1} click={() => previousPage()} type="button" styleType="icon">
                            <FiChevronLeft />
                        </Button>
                            <span>
                                Página <span className="bold"> {page}</span> de <span className="bold"> {Math.ceil(totalPages)}</span>
                            </span>
                        <Button disabled={page === Math.ceil(totalPages)} click={() => nextPage()} type="button" styleType="icon">
                            <FiChevronRight />
                        </Button>
                    </div>
                    :
                    <div className="counter">
                        Página <span className="bold">{page}</span> de <span className="bold">{Math.ceil(totalPages)}</span>

                        <div className="pagination-actions">
                            <Button disabled={page === 1} click={() => previousPage()} type="button" styleType="icon">
                                <FiChevronLeft />
                            </Button>

                            <Button disabled={page === Math.ceil(totalPages)} click={() => nextPage()} type="button" styleType="icon">
                                <FiChevronRight />
                            </Button>
                        </div>
                    </div>
            }

            {/* <div className="counter">
                Página <span>{page}</span> de <span>{Math.ceil(totalPages)}</span>

                <div className="pagintaion-actions">
                    <Button disabled={page === 1} click={() => previousPage()} type="button" styleType="icon">
                        <FiChevronLeft />
                    </Button>

                    <Button disabled={page === Math.ceil(totalPages)} click={() => nextPage()} type="button" styleType="icon">
                        <FiChevronRight />
                    </Button>
                </div>
            </div> */}
        </div >
    );
}

export default Paginator;
