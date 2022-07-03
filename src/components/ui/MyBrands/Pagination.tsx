export const Pagination = ({
  totalCount,
  tableTake,
  pageSelected,
  pagination,
}) => {
  const noOfPages = Math.ceil(totalCount / tableTake);
  const pagesArray = [...new Array(noOfPages).keys()];
  const endIndex = pagesArray.length === pageSelected;

  return (
    <div className="pagination">
      <ul className="float-right cursor-pointer">
        <li
          onClick={() => {
            if (pageSelected !== 1) pagination(pageSelected - 2);
          }}
        >
          <a>
            <img src="/images/left-arrow.svg" />
          </a>
        </li>

        {pagesArray.map((page) => (
          <li
            className={pageSelected === page + 1 ? 'active' : ''}
            onClick={() => pagination(page)}
          >
            <a>{page + 1}</a>
          </li>
        ))}

        <li
          onClick={() => {
            if (!endIndex) pagination(pageSelected);
          }}
        >
          <a>
            <img src="/images/right-arrow.svg" />
          </a>
        </li>
      </ul>
    </div>
  );
};
