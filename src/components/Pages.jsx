export const Pages = ({ prev, next, onPrevious, onNext }) => {
  return (
    <div className="page">
      {prev ? (
        <button className="btn btn-pagination" onClick={onPrevious}>
          Previous Page
        </button>
      ) : null}

      {next ? (
        <button className="btn btn-pagination" onClick={onNext}>
          Next Page
        </button>
      ) : null}
    </div>
  );
};
