import axios from 'axios'
const API_URL = process.env.REACT_APP_API_URL
export const TREEDATA_URL = `${API_URL}/users/getTreeData`
export const ORDERDATA_URL = `${API_URL}/orders/getOrderTableData`
export function getBinary(user_id: number) {
  return axios.post(TREEDATA_URL, {
    user_id
  })
}
export function getOrderTableData(pagination:any) {
  return axios.post(ORDERDATA_URL, {pagination:pagination})
}