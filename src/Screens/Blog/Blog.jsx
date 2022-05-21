import React, { useState, useEffect } from "react";
import Card from "./../../Components/Card";
import axios from "axios";
import "./blog.css";

const url = `https://dev.to/api/articles?username=nataliedeweerd`;

const Blog = () => {
  const [articls, setArticls] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(url);
    console.log(res.data);
    setArticls(res.data);
  };

  const data = articls.map((item, index) => {
    return (
      <Card
        key={index}
        name={item.user.name}
        img={item.social_image}
        date={item.created_at}
        description={item.description}
        tagArr={item.tag_list}
        title={item.title}
        url={item.url}
      />
    );
  });

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="blog" id="blog">
      <div className="container">
        <h2 className="text-center">Our Blog</h2>
        <div className="row">{data}</div>
      </div>
    </section>
  );
};

export default Blog;
