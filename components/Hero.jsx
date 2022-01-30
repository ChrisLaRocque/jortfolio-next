import React from 'react';

export default function Hero(props) {
  const { headline, subHeadline, colorIs } = props;
  return (
    <div className={`hero is-${colorIs || 'primary'} is-medium`}>
      <div className="hero-body">
        <h1 className="is-size-2 has-text-weight-bold">{headline}</h1>
        <p className="is-size-5">{subHeadline}</p>
      </div>
    </div>
  );
}

