import PageTitle from "../PageTitle";

export default function About() {
  return (
    <div>
      <PageTitle>About</PageTitle>

      <p className="about-text">
        Welcome to <strong>ActionMovies</strong> – a React-based web application
        built with Vite.
        <br />
        Our goal is to bring you the best action movies from around the world,
        all in one place. By integrating with{" "}
        <strong>The Movie Database (TMDB) API</strong>, we deliver up-to-date
        information on the most popular and top-rated action films.
        <br />
        <br />
        This project leverages modern tools and libraries such as{" "}
        <strong>React Router</strong> for seamless navigation,{" "}
        <strong>Ant Design</strong> for a clean and responsive UI, and{" "}
        <strong>Axios</strong> for efficient API requests.
        <br />
        <br />
        Whether you’re looking for your next adrenaline-filled blockbuster or
        exploring hidden action gems, ActionMovies makes movie discovery fast,
        simple, and engaging.
      </p>
    </div>
  );
}
