import React from 'react';
import useTitle from '../../Hooks/UseTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='w-3/4 mx-auto'>
            <div className='p-6 my-6'>
                <h1 className='text-2xl font-bold'>Q-1: Difference between SQL and NoSQL</h1>

                <p><b>Ans:</b><br />SQL:<br />
                    SQL databases are primarily called as Relational Databases (RDBMS).SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful
                </p>
                <p>NoSQL: <br />
                    NoSQL database are primarily called as non-relational or distributed database.A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store.
                </p>


            </div>
            <div className='p-6'>
                <h1 className='text-2xl font-bold'>Q-2: What is JWT, and how does it work?</h1>
                <p><b>Ans: </b><br />JWT:<br />
                    JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                    <br />
                    A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

                    Once decoded, you will get two JSON strings:

                    The header and the payload.
                    The signature.
                    The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.
                </p>
            </div>
            <div className='p-6'>
                <h1 className='text-2xl font-bold'>Q-3: What is the difference between javascript and NodeJS?
                </h1>
                <p><b>Ans:</b><br />JavaScript:<br />
                    Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
                </p>
                <p>NodeJS: <br />
                    NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
                </p>
            </div>
            <div className='p-6'>
                <h1 className='text-2xl font-bold'>Q-4: How does NodeJS handle multiple requests at the same time?

                </h1>
                <p><b>Ans:</b><br />
                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                </p>

            </div>
        </div>
    );
};

export default Blog;