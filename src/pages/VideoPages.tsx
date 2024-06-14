import { useState } from "react";
import videos from "../components/Videos";
import VideosCard from "../components/videosPage/VideosCard";

const VideoPages = () => {

  const [currentPage, setCurrentPage] = useState<number>(1);
  const videosPerPage = 8

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);
  const totalPages = Math.ceil(videos.length / videosPerPage);

  const handleNextPage = () => {
    setCurrentPage(
      currentPage === totalPages
        ? currentPage
        : currentPage + 1
    );
  };

  const handlePrevPage = () => {
    setCurrentPage(
      currentPage === 1
        ? currentPage
        : currentPage - 1
    );
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
    <div className="video-pages-container">
      <div className="pagination-buttons">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
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
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
      <div className="video-gallery">
        {currentVideos.map((video) => (
          <div key={video.id} className="video-item">
            <VideosCard video={video} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPages;
