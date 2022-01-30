import React from 'react';
import Link from 'next/link';
import Icon from './Icon';

export default function Cards(props) {
  const {
    headline, subHeadline, cards, icons, prepend, ctaText, more,
  } = props;
  return (
    <section>
      <div className="content">
        <h2 className="is-size-4 has-text-weight-bold mt-2">{ headline }</h2>
        <p>{ subHeadline }</p>
        <div className="columns is-multiline">
          {cards && cards.map((card) => {
            const { slug, title, description } = card;
            return (
              <div
                key={slug}
                className="column is-one-third"
              >
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title">
                      { title }
                    </p>
                    {icons && <Icon name={title} />}
                  </header>
                  {description
            && (
            <div className="card-content">
              <div className="content">
                { description }
              </div>
            </div>
            )}
                  <footer className="card-footer">
                      <div className="card-footer-item">
                    <Link
                      href={`${prepend || ''}${slug}`}
                    >
                      {
                  `${
                    ctaText ? `${ctaText} ${title}` : 'Learn More'
                  }`
                }

                    </Link>
                    </div>
                  </footer>
                </div>
              </div>
            );
          })}
        </div>
        {more && (
            <div className="buttons is-right">
        <Link href={more.to} passHref>
          <button className={`button is-${more.is || 'black'}`} type="button">
            { more.text || 'See all' }
          </button>
        </Link>
        </div>
        )}
      </div>
    </section>
  );
}
