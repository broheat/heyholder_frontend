import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";

export default function Breadcrumbs({ pages, title }) {
  return (
    <div className="page-breadcrumb">
      <Breadcrumb>
        <Link to="/">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Link>
        {pages &&
          pages.map((page, i) => (
            <Link to={page.link} key={i}>
              <Breadcrumb.Item>{page.name}</Breadcrumb.Item>
            </Link>
          ))}
        <Breadcrumb.Item active>{title}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}
