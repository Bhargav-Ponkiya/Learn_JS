const paginate = (followers) => {
  const itemsPerPage = 19;
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);

  // i need to explore Array.from() method with parameters
  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });

  return newFollowers;
};

export default paginate;
