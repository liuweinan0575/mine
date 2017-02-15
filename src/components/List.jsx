import React from 'react';

const List = ({data, onClick}) =>
<ul className="mdl-list" style={{position: 'absolute', overflowX: 'hidden', bottom: 0,paddingLeft: '5%', width: '90%'}}>
  { (!data || data.length===0)?'no post':data.map((item, i)=>{
    const { title } = item;
    return <li key={i} style={{cursor: 'pointer', height: 40, borderTop: '1px solid #f3f3f3', padding: '10px 10px 0px 10px'}} onClick={()=>onClick(item)} className="mdl-list__item mdl-list__item--three-line">
      <span className="mdl-list__item-primary-content" style={{height: 30}}>
        {title}
      </span>
      <span className="mdl-list__item-secondary-content">
        <a className="mdl-list__item-secondary-action" href="#"><i className="material-icons">star</i></a>
      </span>
    </li>
  })}
</ul>

export default List;
