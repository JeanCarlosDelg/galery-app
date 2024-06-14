import { useState } from "react";
import fotos from "../components/Fotos";
import FotosCard from "../components/fotosPage/FotosCard";

const PhotoPages = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const fotosPerPage = 8;

  const indexOfLastFotos = currentPage * fotosPerPage;
  const indexOfFirstFotos = indexOfLastFotos - fotosPerPage;
  const currentFotos = fotos.slice(indexOfFirstFotos, indexOfLastFotos);
  const totalPages = Math.ceil(fotos.length / fotosPerPage);

  const handleNextPage = () => {
    setCurrentPage(currentPage === totalPages ? currentPage : currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage === 1 ? currentPage : currentPage - 1);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const startPage = Math.floor((currentPage - 1) / 5) * 5 + 1;
    const endPage = Math.min(startPage + 4, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <>
      <div className="pagination-buttons">
        <button className="btn__prev" onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <div className="btn__mid-container">
          {getPageNumbers().map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`btn__mid ${currentPage === number ? "active" : ""}`}
            >
              {number}
            </button>
          ))}
        </div>
        <button className="btn__next" onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
      <div className="fotopages__container">
        {currentFotos.map((fotos) => (
          <div key={fotos.id}>
            <FotosCard fotos={fotos} />
          </div>
        ))}
      </div>
    </>
  );
};

export default PhotoPages;
