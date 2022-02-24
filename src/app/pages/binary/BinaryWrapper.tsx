/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useEffect, useState} from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import {PageTitle} from '../../../_metronic/layout/core'
import { BinaryTree } from '../../components/BinaryTree'
import { getBinary } from '../actions';
import { RootState } from '../../../setup';
import { UserModel } from '../../modules/auth/models/UserModel';
const BinaryWrapper: FC = () => {
  const user: UserModel = useSelector<RootState>(({auth}) => auth.user, shallowEqual) as UserModel
  const [treeData,setTreeData]=useState<any>({});
  useEffect(()=>{
    getBinary(user?.id)
    .then(({data}) => {
      setTreeData(data)
    })
    .catch(() => {
      //error
    })
  },[]);
  
  return (
    <>
      <PageTitle breadcrumbs={[]}>Binary Compensation</PageTitle>
      {/* begin::Row */}
      <div className='row gy-5 g-xl-8'>
        <div className='col-12'>
          <BinaryTree treeData={treeData}/>
        </div>
      </div>
      {/* end::Row */}
    </>
  )
}

export {BinaryWrapper}
