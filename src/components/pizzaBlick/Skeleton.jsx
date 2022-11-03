import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#c7c7c7"
    foregroundColor="#a8a8a8"
    {...props}>
    <circle cx="134" cy="129" r="116" />
    <rect x="555" y="533" rx="0" ry="0" width="37" height="10" />
    <rect x="0" y="252" rx="10" ry="10" width="280" height="32" />
    <rect x="0" y="299" rx="10" ry="10" width="280" height="100" />
    <rect x="1" y="420" rx="10" ry="10" width="95" height="30" />
    <rect x="35" y="485" rx="0" ry="0" width="1" height="0" />
    <rect x="126" y="413" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
