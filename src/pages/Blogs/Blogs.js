import React from "react";

const Blogs = () => {
  return (
    <section>
      <div className="container">
        <h3 className="text-center mb-4">Blogs</h3>
        <div className="row">
          <div className="col-12">
            <div className="blog shadow rounded p-3 mb-4">
              <h5>
                01. What are the different ways to manage a state in a React
                application?
              </h5>
              <p>
                useReducer is another option that can be used for either local
                or global state. It is similar in many ways to useState under
                the hood, although instead of just an initial state it accepts a
                reducer.
              </p>
              <p>
                The benefit of useReducer is that it provides a built-in way to
                perform a number of different state operations with the help of
                the reducer function, which makes it more dynamic overall than
                useState.
              </p>
            </div>
            <div className="blog shadow rounded p-3 mb-4">
              <h5>02. How does prototypical inheritance work?</h5>
              <p>
                The Prototypal Inheritance is a feature in javascript used to
                add methods and properties in objects. It is a method by which
                an object can inherit the properties and methods of another
                object.
              </p>
            </div>
            <div className="blog shadow rounded p-3 mb-4">
              <h5>03. What is a unit test? Why should we write unit tests?</h5>
              <p>
                The main objective of unit testing is to isolate written code to
                test and determine if it works as intended. Unit testing is an
                important step in the development process, because if done
                correctly, it can help detect early flaws in code which may be
                more difficult to find in later testing stages.
              </p>
            </div>
            <div className="blog shadow rounded p-3 mb-4">
              <h5>04. React vs. Angular vs. Vue?</h5>
              <p>
                React is considered a UI library. They define themselves as: “A
                JavaScript library for building user interfaces” Facebook
                developers are behind the development and maintenance of this
                library. And, in this case, most of Facebook’s products are made
                with React.
              </p>
              <p>
                Angular is a front-end framework with lots of components,
                services, and tools. On Angular’s site, you can see that they
                define Angular as: “The modern web developer’s platform” It is
                developed and maintained by Google developers, but curiously it
                is not used to implement any of their most common products such
                as Search or YouTube.
              </p>
              <p>
                Last but not least, Vue.js is, according to its site: “A
                progressive JavaScript framework” Vue.js is developed and led by
                Evan You, but also it counts on a huge open-source community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
