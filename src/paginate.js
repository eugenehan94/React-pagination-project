const paginate = (data) => {
  const dataPerPage = 5;
  const numberOfPages = Math.ceil(data.length / dataPerPage);

  const newData = Array.from({ length: numberOfPages }, (i, index) => {
    const start = index * dataPerPage;
    return data.slice(start, start + dataPerPage);
  });
  return newData;
};

export default paginate;
