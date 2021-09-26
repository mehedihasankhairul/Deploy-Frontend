import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export default function Navigator() {
  const params = useParams();
  const slugs = Object.keys(params).map((item) => params[item]);
  // const history = useHistory()
  // const pushHistory = h => {
  //     history.push('/' + h)
  // }
  return (
    <div className="navigator">
      <span className="navigator">
        <Link to="/">Home</Link>
        {slugs.slice(0, slugs.length - 1).map((item, index) => (
          <>
            {' '}
            {'>'}{' '}
            <Link key={index} to={'/' + item}>
              {item}
            </Link>{' '}
          </>
        ))}
        <>
          {' '}
          {'>'} <span>{slugs[slugs.length - 1]}</span>{' '}
        </>
      </span>
      {/* <span onClick={() => pushHistory(slugs[0])}>{slugs[0]}</span> */}
    </div>
  );
}
