import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => (
  <div className="blog section__padding" id="blog">
    <div className="blog_heading">
      <h1 className="gradient__text">
        A lot is happening, We are blogging about it.
      </h1>
    </div>
    <div className="blog_container">
      <div className="blog_container_group_a">
        <Article
          url={blog01}
          date="Oct 20, 2022"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
      </div>
      <div className="blog_container_group_b">
        <Article
          url={blog02}
          date="Oct 20, 2022"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          url={blog03}
          date="Oct 20, 2022"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          url={blog04}
          date="Oct 20, 2022"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          url={blog05}
          date="Oct 20, 2022"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
      </div>
    </div>
  </div>
);

export default Blog;
