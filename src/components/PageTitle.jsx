import { Helmet } from "react-helmet-async";

export default function PageTitle({ children }) {
  return (
    <Helmet>
      <title>{children} | ActionMovies</title>
    </Helmet>
  );
}
