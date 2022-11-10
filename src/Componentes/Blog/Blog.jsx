import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className="container mx-auto grid gap-6 md:grid-cols-2 sm:grid-cols-1">
        <div className="card bg-base-100 shadow-md my-4 py-4">
          <div className="card-body px-4">
            <h3 className='font-bold py-2'>Difference between SQL and NoSQL?</h3>
          <p className="">Lectures: <small>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON..</small></p>
          <div className="my-2">
              <Link to='/'><button className="px-8 py-1 bg-gray-600 text-white">Back Now</button></Link>
          </div>
          </div>

        </div>
        <div className="card bg-base-100 shadow-md my-4 py-4 ">
          <div className="card-body px-4">
            <h3 className='font-bold py-2'>What is JWT, and how does it work??</h3>
          <p className="">JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP)</p>
          <div className="my-2">
              <Link to='/'><button className="px-8 py-1 bg-gray-600 text-white">Back Now</button></Link>
          </div>
          </div>

        </div>
        <div className="card bg-base-100 shadow-md my-4 py-4 ">
          <div className="card-body px-4">
            <h3 className='font-bold py-2'>What is the difference between javascript and NodeJS?</h3>
          <p className="">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</p>
          <div className="my-2">
              <Link to='/'><button className="px-8 py-1 bg-gray-600 text-white">Back Now</button></Link>
          </div>
          </div>

        </div>
        <div className="card bg-base-100 shadow-md my-4 py-4 ">
          <div className="card-body px-4">
            <h3 className='font-bold py-2'>How does NodeJS handle multiple requests at the same time??</h3>
          <p className="">NodeJS receives multiple client requests and places them into eventQueue NodeJS is built with the concept of event-driven architecture NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them .</p>
          <div className="my-2">
              <Link to='/'><button className="px-8 py-1 bg-gray-600 text-white">Back Now</button></Link>
          </div>
          </div>

        </div>
      </div>
    );
};

export default Blog;