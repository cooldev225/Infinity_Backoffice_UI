/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Tree from 'react-d3-tree';
import './custom-tree.css';
import { RawNodeDatum } from 'react-d3-tree/lib/types/common';
import { renderNodeWithCustomEvents,handleNodeClick } from "./helpers";
interface Props{
  treeData?:RawNodeDatum;
}

export const BinaryTree: React.FC<Props> = (data) => {
  //const [translate, containerRef] = useCenteredTree();
  return (
    <div id="treeWrapper" style={{height: '700px' }}>
      <Tree 
        data={data?.treeData?data?.treeData:{name:'Empty'}} 
        orientation='vertical' 
        pathFunc={'step'} 
        collapsible={false} 
        translate={{x:550,y:70}}
        enableLegacyTransitions={true}
        zoomable={false}
        nodeSize={{x:200,y:130}}
        renderCustomNodeElement={(rd3tProps) =>
          renderNodeWithCustomEvents({ ...rd3tProps, handleNodeClick })
        }
        onNodeClick={()=>{alert()}}
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
      />
    </div>
  )
}
