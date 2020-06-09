import React from 'react';

const Filters = props => {
  const {
    numFinished,
    numUnfinished,
    filter,
    onSwitch 
  } = props;
    
  return (
    <div className='Filters'>
      <button 
        className={ filter === 'all' ? 'active' : '' }
        onClick={() => onSwitch('all')}
      >
        All ({numUnfinished + numFinished})
      </button>
      <button 
        className={ filter === 'finished' ? 'active' : '' }
        onClick={() => onSwitch('finished')}
      >
        Finished ({numFinished})
      </button>
      <button 
        className={ filter === 'unfinished' ? 'active' : '' }
        onClick={() => onSwitch('unfinished')}
      >
        Unfinished ({numUnfinished})
      </button>
    </div>
  )
};

export default Filters;