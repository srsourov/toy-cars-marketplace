import { useEffect } from "react";

const Blog = () => {
    useEffect(() => {
        document.title = 'Blog';
      }, []);
    return (
        <div>
            <h1 className="text-xl font-bold">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
            <p>Ans. Using the refresh token we can generate a new access token to re-validate user without them having to re-enter their login credentials multiple times. we should store them in httponly cookies. They work like first a user validates and then the refresh token redesh the validation everytime to keep the user validated</p>

            <h1 className="text-xl font-bold">2. Compare SQL and NoSQL databases?</h1>
            <p>Ans. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document based</p>

            <h1 className="text-xl font-bold">3. What is express js? What is Nest JS </h1>
            <p>Ans. Express is a nodejs web framework which we use in serverside. Nest. js is one of the fastest-growing Nodejs frameworks for building efficient, scalable, and enterprise-grade backend applications</p>

            <h1 className="text-xl font-bold">4. What is MongoDB aggregate and how does it work ?</h1>
            <p>Ans. MongoDB aggregate is way to handle large number of data in a collectons and use them by passing them in a different types stages </p>
        </div>
    );
};

export default Blog;