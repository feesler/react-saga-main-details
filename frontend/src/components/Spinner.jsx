import React from 'react';
import classNames from 'classnames'

function Spinner(props) {
  const { className, ...rest } = props;

  return (
    <div className={classNames('spinner-border', className)} {...rest}>
      <span className="visually-hidden">Loading...</span>
    </div>
  )
}

export default Spinner;
