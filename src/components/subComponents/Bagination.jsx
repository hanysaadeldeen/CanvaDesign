import ReactPaginate from 'react-paginate';

const Bagination = () => {

    const handlePageClick = (page) => {
        console.log(page.selected + 1);
    }
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

    return (
        <div className="pb-10">
            <ReactPaginate
                breakLabel="..."
                nextLabel="next "
                pageCount={items.length}
                previousLabel="prev"
                onPageChange={handlePageClick}
                marginPagesDisplayed={1}
                pageRangeDisplayed={1}
                containerClassName={"pagination flex justify-center p-3"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                nextClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />
        </div>
    )
}

export default Bagination