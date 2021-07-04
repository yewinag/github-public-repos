import React from "react";
import Card from "../Card";
import Pagination from "../Pagination";
import SectionHeader from "../SectionHeader";
import '../../styles/table.scss';

function Table() {
  return (
    <article>
      <SectionHeader />
      <div className="table-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </article>
  );
}

export default Table;
