import "../Pagination/Pagination.css";

const Pagination = ({
  postsPerPage,
  totalPosts,
  setCurrentPage,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const handlePrevious = (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <nav className="pagination-container">
      <button
        className="page-arrow"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        ◀ Prev
      </button>

      <span className="page-info">
        {currentPage} / {totalPages}
      </span>

      <button
        className="page-arrow"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next ▶
      </button>
    </nav>
  );
};

export default Pagination;
