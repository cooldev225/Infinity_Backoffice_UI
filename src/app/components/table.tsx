/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { get_date, get_time } from './helpers'
interface OrderModel{
    user_name?:string;
    volume?:string;
    date?:string;
  }
interface Props{
  column?:string[];
  data?:OrderModel[];
}
export const Table: React.FC<Props> = (data) => {
  return (
    <table className="table table-hover table-rounded table-striped border gy-6 gs-7">
        <thead>
            <tr className="fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200">
                {data.column?.map((c,i)=>(
                    <th key={i}>{c}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {data.data?.map((r,i)=>(
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>{r.user_name}</td>
                    <td>{r.volume}</td>
                    <td>{get_date(r.date)+' '+get_time(r.date)}</td>
                </tr>
            ))}
        </tbody>
        </table>
  )
}
