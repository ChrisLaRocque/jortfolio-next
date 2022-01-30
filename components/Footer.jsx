import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>
            &copy;
            {`${new Date().getFullYear()}`}
          </strong>
          {' '}
          Chris LaRocque
        </p>
      </div>
    </footer>
  );
}

