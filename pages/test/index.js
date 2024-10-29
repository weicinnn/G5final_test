import React from 'react';
import Pagination from '@/components/pagination/pagination';

export default function test() {
  return (
    <>
      <div className="row choose-page">
        <p className="howmaney col me-3 mt-2">
          顯示第1-12筆 / 共60筆 這裡會是元件
        </p>
        <select
          name="perpage"
          id="perpage"
          className="col selectpd form-select rwd-none me-3"
        >
          <option value="5">這會是元件</option>
          <option value="5">每頁5筆</option>
          <option value="10">每頁10筆</option>
          <option value="15">每頁15筆</option>
          <option value="20">每頁20筆</option>
        </select>
        <select
          name="sort"
          id="sort"
          className="col rwd-none form-select selectpd"
        >
          <option value="新到舊">這會是元件</option>
          <option value="新到舊">新到舊</option>
          <option value="舊到新">舊到新</option>
          <option value="價格:高到低">價格:高到低</option>
          <option value="價格:低到高">價格:低到高</option>
        </select>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-5">
        這會是元件
        <Pagination />
      </div>
    </>
  );
}
