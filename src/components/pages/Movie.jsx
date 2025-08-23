import { useLocation } from "react-router-dom";
import { Card, Typography, Rate } from "antd";
import { useEffect } from "react";
import PageTitle from "../PageTitle";
const { Meta } = Card;
const { Title, Paragraph } = Typography;

export default function Movie() {
  const { state } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="movie">
      <PageTitle>{`${state.title}`}</PageTitle>

      <div style={{ width: "400px" }}>
        <Title level={3}>Overview</Title>
        <Paragraph className="hidden-scroll">{state.overview}</Paragraph>
        <strong>Rating:</strong>
        <Rate
          allowHalf
          disabled
          defaultValue={state.vote_average / 2}
          style={{ marginLeft: 10 }}
        />
      </div>

      <Card
        hoverable
        style={{ maxWidth: 300, margin: "30px 0" }}
        cover={
          <img
            alt={state.title}
            src={`https://image.tmdb.org/t/p/w500${state.poster_path}`}
          />
        }
      >
        <Meta
          title={state.title}
          description={state.release_date.split("-")[0]}
        />
      </Card>
    </div>
  );
}
