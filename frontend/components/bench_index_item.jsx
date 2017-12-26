import React from 'react';

const BenchIndexItem = ({bench}) => {
  return (
    <li>{bench.id}, {bench.description},
        located at: {bench.lat}, {bench.lng}</li>
  );
};

export default BenchIndexItem;
