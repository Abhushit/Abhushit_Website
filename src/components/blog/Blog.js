import React from "react";
import BlogItem from "../blogItem/BlogItem";
import HeaderCompo from "../headerCompo/HeaderCompo";
import "./Blog.css";

function Blog() {
  return (
    <div className="blog" id="blog">
      <div className="container__">
        <HeaderCompo name="BLOG" />
        <div className="blog__div" >
          <BlogItem
            title="Top 10 Leading Online Shopping Sites in Nepal"
            desc="Online shopping sites in Nepal are been increasing every year where you can buy goods."
            image="https://www.webtechy.net/wp-content/uploads/2020/06/leading-online-shopping-sites-in-nepal-513x385.jpg"
            link="https://www.webtechy.net/10-leading-online-shopping-sites-in-nepal-2020-updated/"
          />
          <BlogItem
            title="10 Best Websites in Nepal – Most Popular"
            desc="There are increasing number of Websites in Nepal every year. The number of internet users are increasing every day"
            image="https://www.webtechy.net/wp-content/uploads/2020/06/best-websites-in-nepal-513x385.jpg"
            link="https://www.webtechy.net/10-best-websites-in-nepal-most-popular/"
          />
          <BlogItem
            image="https://www.webtechy.net/wp-content/uploads/2020/06/kaspersky-internet-security-513x385.jpg"
            title="Kaspersky Internet Security Download Free"
            desc="You can Download Kaspersky Internet Security trial version here. You will get a 30 days trial of advanced PC protection"
            link="https://www.webtechy.net/kaspersky-internet-security-download-free-step-by-step/"
          />
          <BlogItem
            title="Top 10 Front-end Frameworks in Nepal"
            desc="Varieties of frontend frameworks in Nepal are used according to their project requirements."
            image="https://www.webtechy.net/wp-content/uploads/2020/06/top-frontend-frameworks-in-nepal-513x385.jpg"
            link="https://www.webtechy.net/top-7-front-end-frameworks-2020-in-nepal/"
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
