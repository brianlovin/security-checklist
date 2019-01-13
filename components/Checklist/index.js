// @flow
import React from 'react';
import data from '../../config/data';
import ChecklistItem from '../ChecklistItem';
import { Grid } from './style';

class Checklist extends React.Component<{}> {
  render() {
    const keys = Object.keys(data);
    const resources = keys.map(k => data[k]);
    return (
      <Grid>
        {resources.map(resource => (
          <ChecklistItem key={resource.id} resource={resource} />
        ))}
      </Grid>
    );
  }
}

export default Checklist;
