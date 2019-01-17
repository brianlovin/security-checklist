// @flow
import React from 'react';
import { AppsContainer, SectionHeading, ExpandContainer } from './style';
import { Button } from '../Button';
import type { ChecklistResource } from '../../types';
import { AppRow } from './App';

type Props = {
  resource: ChecklistResource,
};

type State = {
  overflowExpanded: boolean,
};

export class Apps extends React.Component<Props, State> {
  state = { overflowExpanded: false };

  expand = () => this.setState({ overflowExpanded: true });

  render() {
    const { resource } = this.props;
    const { overflowExpanded } = this.state;

    if (!resource.apps) return null;

    let appList = resource.apps;
    let overflowAppList;
    if (appList.length > 3) {
      overflowAppList = appList.slice(3, appList.length);
      appList = appList.slice(0, 3);
    }

    return (
      <AppsContainer overflowExpanded={overflowExpanded}>
        <SectionHeading>Apps</SectionHeading>
        {appList.map(app => (
          <AppRow key={app.name} app={app} />
        ))}

        {overflowAppList && !overflowExpanded && (
          <ExpandContainer onClick={this.expand}>
            <Button>Show more choices</Button>
          </ExpandContainer>
        )}

        {overflowAppList &&
          overflowExpanded &&
          overflowAppList.map(app => <AppRow key={app.name} app={app} />)}
      </AppsContainer>
    );
  }
}
