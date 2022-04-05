import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className="blogs">
            <h3>What is the purpose of context API?</h3>
            <p>
                If a tree of React components has global data, we can use
                context API to share data between components at various levels
                of that tree instead of passing data as props from top to
                bottom.
            </p>
            <h3>What is semantic tag?</h3>
            <p>
                Semantic tags are HTML tags that have both representationg and
                meaning. Like h1 through h6 or blockquote etc. They represent an
                element in the page and also have meaning to user.
            </p>
            <h3>
                What is the difference among inline, block and inline-block
                elements?
            </h3>
            <p>
                Inline elements take the width of its content only. It cannot be
                set height, only left and right margin and padding. <br />A
                block element takes the full with available and can be set all
                types of margin and padding. <br />
                Inline-block elememts behaves like a block element while staying
                inline. It doesn't take full with of its container but margin
                and padding can be set.
            </p>
        </div>
    );
};

export default Blogs;
