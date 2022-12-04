import React from 'react';
import Card from 'react-bootstrap/Card';

const BlogPage = () => {
    return (
        <div>
            <div className='m-4 text-center'>
                <h1>Questions & Answers</h1>
            </div>
            <div className='m-4'>
                <div>
                    <Card>
                        <Card.Body>
                            <h4>Q1. Difference between SQL and NoSQL</h4>
                            <b>Answer:</b>
                            <p>There are a lot of databases used today in the industry. Some are SQL databases, some are NoSQL databases. The conventional database is SQL database system that uses tabular relational model to represent data and their relationship. The NoSQL database is the newer one database that provides a mechanism for storage and retrieval of data other than tabular relations model used in relational databases.</p>
                            <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                        </Card.Body>
                    </Card>
                </div>
                <div className='mt-4'>
                    <Card>
                        <Card.Body>
                            <h4>Q2. What is JWT, and how does it work?</h4>
                            <b>Answer:</b>
                            <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                            <p>JWT's differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
</p>
                        </Card.Body>
                    </Card>
                </div>
                <div className='mt-4'>
                    <Card>
                        <Card.Body>
                            <h4>Q3. What is the difference between javascript and NodeJS?</h4>
                            <b>Answer:</b>
                            <p>JavaScript is a programming language, which runs in web browsers. Whereas Node.js is an interpreter or running environment for JavaScript, which holds a lot of requiring libraries and all. JavaScript is basically one standard defining programming language; it can run any browser with a default browser running environment. It is a very strong language normally used for a web application on any verification or any specific business logic. We need to append in the screen without page refreshing. JavaScript also helps to use Ajax at any time, which helps us call any server-side script for given dynamic data based on the requirement. It also helps with generating dynamic HTML tables based on business requirement. JQuery is one of the popular libraries to make comfortable use of JavaScript by avoiding to write a lot of code.</p>
                        </Card.Body>
                    </Card>
                </div>
                <div className='mt-4'>
                    <Card>
                        <Card.Body>
                            <h4>Q4. How does NodeJS handle multiple requests at the same time?</h4>
                            <b>Answer:</b>
                            <p>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
</p>
                            <p>Given a NodeJS application, since Node is single threaded, say if processing involves a Promise.all that takes 8 seconds, does this mean that the client request that comes after this request would need to wait for eight seconds?
No. NodeJS event loop is single threaded. The entire server architecture for NodeJS is not single threaded.</p>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;