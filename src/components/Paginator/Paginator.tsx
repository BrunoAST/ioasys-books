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
            <div className="counter">
                Página <span>{page}</span> de <span>{Math.ceil(totalPages)}</span>

                <div className="pagintaion-actions">
                    <Button disabled={page === 1} click={() => previousPage()} type="button" styleType="icon">
                        <FiChevronLeft />
                    </Button>

                    <Button disabled={page === Math.ceil(totalPages)} click={() => nextPage()} type="button" styleType="icon">
                        <FiChevronRight />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Paginator;
