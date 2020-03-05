import React from 'react';
import css from "../styles/main.scss";
import Link from "next/link";

function BonusRecordItem({subject, detail, status}) {
  return (
    <div className={css.itemContainer} style={{padding: 0}}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%'
        }}
      >

        <div style={{
          textAlign: 'center',
          flexBasis: '50%',
          fontSize: '.875rem',
          color: 'black',
          padding: '15px 0'
        }}>{subject}</div>
        <Link href={detail}>
          <a style={{
            textAlign: 'center',
            flexBasis: '25%',
            fontSize: '.75rem',
            color: 'black',
            padding: '15px',
            borderRight: '1px solid #ccc',
            borderLeft: '1px solid #ccc'
          }}>詳細內容</a>
        </Link>
        <div
          style={{
            position: 'relative',
            textAlign: 'center',
            flexBasis: '25%',
            fontSize: '.75rem',
            color: 'black',
            padding: '15px 0'
          }}>
          {status ? <span style={{
            padding: '2px 5px',
            color: 'white',
            backgroundColor: '#23d823',
            borderRadius: 3
          }}>已領取</span> : '前往領取'}
          {status ? null : <span style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            borderRadius: 50,
            left: 10,
            height: 10,
            width: 10,
            backgroundColor: 'red'
          }}/>}
        </div>
      </div>

    </div>
  );
}

export default BonusRecordItem;