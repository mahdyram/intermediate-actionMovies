import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Row, Button } from "antd";
import PageTitle from "../PageTitle";
const { Meta } = Card;

export default function Movies() {
  const [popularMovies, setPopularMovies] = useState([]);

  const [pageNum, setPageNum] = useState(() => {
    const savedPage = localStorage.getItem("pageNum");
    return savedPage ? parseInt(savedPage) : 1;
  });

  const handleChangePage = (x) => {
    setPageNum((n) => {
      const newPage = x === "prev" ? n - 1 : n + 1;
      localStorage.setItem("pageNum", newPage);
      return newPage;
    });
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://api.themoviedb.org/3/discover/movie",
          {
            params: {
              api_key: "21fc2482aa83b37cee190acef671137a",
              language: "en-US",
              with_genres: 28,
              page: pageNum,
            },
          }
        );
        setPopularMovies([...data.results].slice(0, 18));
      } catch (err) {
        console.error("Axios request failed:", err);
      }
    })();
  }, [pageNum]);

  return (
    <div>
      <PageTitle>{`Movies - Page ${pageNum}`}</PageTitle>

      <h3>Best Action Movies</h3>

      <Button
        type="primary"
        onClick={() => handleChangePage("prev")}
        disabled={pageNum === 1}
      >
        Prev page
      </Button>
      <Button type="primary" onClick={() => handleChangePage("next")}>
        Next page
      </Button>

      <Row gutter={[14, 14]} style={{ padding: 20, marginTop: 10 }}>
        {popularMovies.map(
          ({
            id,
            title,
            poster_path,
            vote_average,
            overview,
            release_date,
          }) => (
            <Col key={id} xs={12} sm={12} md={6} lg={4}>
              <Link
                to={`${id}`}
                state={{
                  id,
                  title,
                  poster_path,
                  vote_average,
                  overview,
                  release_date,
                }}
              >
                <Card
                  hoverable
                  cover={
                    <img
                      alt={title}
                      src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    />
                  }
                >
                  <Meta title={title} description={vote_average.toFixed(1)} />
                </Card>
              </Link>
            </Col>
          )
        )}
      </Row>
    </div>
  );
}
