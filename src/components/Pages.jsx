// import { useFetch } from "../Hooks/useFetch";

export const Pages = ({ prev, next, onPrevious, onNext }) => {
  const handleonPrevious = () => {
    // makeHTTPRequest(info.prev)
    onPrevious();
  };

  const handleonNext = () => {
    // makeHTTPRequest(info.prev)54
    onNext();
  };

  return (
    <div className="page">
      {prev ? (
        <button className="btn btn-pagination" onClick={handleonPrevious}>
          Previous Page
        </button>
      ) : null}
      {next ? (
        <button className="btn btn-pagination" onClick={handleonNext}>
          Next Page
        </button>
      ) : null}
    </div>
  );
};
