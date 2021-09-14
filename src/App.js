import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import "./App.css";

function App() {
  const { data, loading } = useFetch();
  const [page, setPage] = useState(0);
  const [artist, setArtist] = useState([]);
  useEffect(() => {
    if (loading) return;
    setArtist(data[page]);
  }, [loading, page]);

  const prevPage = () => {
    setPage((currentPage) => {
      let prevPage = currentPage - 1;
      if (prevPage < data.length - 1) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };
  const nextPage = (currentPage) => {
    setPage((currentPage) => {
      let nextPage = currentPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const changePage = (index) => {
    setPage(index);
  };

  if (loading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className="pagination-project-title">Picture Pagination</h1>

      <div className="pagination-clips-container">
        {artist.map((display, index) => {
          return (
            <div key={index} className="pagination-clips">
              <img
                src={display.download_url}
                alt={display.author}
                className="pagination-image"
              />
              <p className="pagination-author-name">{display.author}</p>
              <a
                href={display.url}
                target="_blank"
                rel="noreferrer"
                className="pagination-profile-link"
              >
                Profile
              </a>
            </div>
          );
        })}
      </div>
      <div className="pagination-btn-container">
        <button className="pagination-prev-btn" onClick={prevPage}>
          Previous
        </button>
        {data.map((data, index) => {
          return (
            <div key={index}>
              <button
                className={`pagination-page-btn ${
                  index === page ? "pagination-active-btn" : null
                }`}
                onClick={() => changePage(index)}
              >
                {index + 1}
                {console.log(index)}
              </button>
            </div>
          );
        })}
        <button className="pagination-next-btn" onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
