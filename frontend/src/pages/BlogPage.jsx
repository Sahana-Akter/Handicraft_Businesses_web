// src/pages/BlogPage.jsx
import React from 'react';

const BlogPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <article className="mb-6">
        <h2 className="text-xl font-semibold">Controlled vs Uncontrolled Components</h2>
        <p>
          Controlled components are those where the form data is handled by the state of the component,
          while uncontrolled components store their own state internally.
        </p>
      </article>
      <article className="mb-6">
        <h2 className="text-xl font-semibold">PropTypes in React</h2>
        <p>
          PropTypes are used to validate the types of props passed to a component to ensure the component
          receives the correct data.
        </p>
      </article>
    </div>
  );
};

export default BlogPage;
