/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useEffect, useState} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import { Table } from '../../components/table';
import { getOrderTableData } from '../actions';
interface pagination{
  page:number,
  page_size:number,
  pages:number,
  total_count:number
}
interface TableModel{
  data:[];
  pagination:pagination;
}
const HistoryWrapper: FC = () => {
  const [tableData,setTableData]=useState<TableModel>({
    data:[],
    pagination:{
      page:1,
      page_size:10,
      pages:0,
      total_count:0
    }
  });
  const pages=[1,2,3,4,5,6];
  useEffect(()=>{
    initTable();
  },[tableData.pagination.page]);
  function initTable(){
    getOrderTableData(tableData.pagination)
    .then(({data}) => {
      setTableData(data)
    })
    .catch(() => {
      //error
    })
  }
  function setPage(i:number){
    tableData.pagination.page=i;
    setTableData({
      data:tableData.data,
      pagination:tableData.pagination
    })
  }
  function movePage(i:number){
    tableData.pagination.page=tableData.pagination.page+i;
    if(tableData.pagination.page<1)tableData.pagination.page=1;
    if(tableData.pagination.page>tableData.pagination.pages)tableData.pagination.page=tableData.pagination.pages;
    setTableData({
      data:tableData.data,
      pagination:tableData.pagination
    })
  }
  return (
    <>
      <PageTitle breadcrumbs={[]}>Binary Volume History</PageTitle>
      {/* begin::Row */}
        <div className='row gy-5 g-xl-8'>
          <div className='col-12'>
            <Table column={["","User Name","Volume","Date"]} data={tableData.data}/>
            {tableData.pagination.pages&&(
              <ul className="pagination">
                <li className={"page-item previous"+(tableData.pagination.page===1?' disabled':'')}>
                  <a onClick={()=>movePage(-1)} className="page-link">
                    <i className="previous"></i>
                  </a>
                </li>
                {pages.map((v)=>(
                  tableData.pagination.pages>v-1&&(
                    <li className={"page-item"+(tableData.pagination.page===v?' active':'')}>
                      <a onClick={()=>setPage(v)} className="page-link">
                        {v}
                      </a>
                    </li>
                  )
                ))}
                <li className={"page-item next"+(tableData.pagination.page===tableData.pagination.pages?' disabled':'')}>
                  <a onClick={()=>movePage(1)} className="page-link">
                    <i className="next"></i>
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
        {/* end::Row */}
    </>
  )
}

export {HistoryWrapper}
