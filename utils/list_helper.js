const _ = require("lodash");

const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0);
};

const favoriteBlog = (blogs) => {
  const maxLikes = Math.max(...blogs.map((blog) => blog.likes));
  const { title, author, likes } = blogs.find(
    (blog) => blog.likes === maxLikes
  );
  return { title, author, likes };
};

const mostBlogs = (blogs) => {
  const authors = _.countBy(blogs, "author");
  const arrayAuthors = _.map(authors, (blogs, author) => ({ author, blogs }));

  return _.maxBy(arrayAuthors, "blogs");
};

const mostLikes = (blogs) => {
  const groupedByAuthor = _.groupBy(blogs, "author");
  const likesByAuthor = _.map(groupedByAuthor, (blogs, author) => ({
    author,
    likes: _.sumBy(blogs, "likes"),
  }));

  return _.maxBy(likesByAuthor, "likes");
};

module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes };
