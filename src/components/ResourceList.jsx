import React from 'react';
import useResources from './useResources';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);
  return (
    <ul>
      {resources.map(r => (
        <li key={r.id}>{r.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
