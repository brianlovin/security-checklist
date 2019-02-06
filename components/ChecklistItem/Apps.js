// @flow
// $FlowIssue
import React from 'react';
import { AppsContainer, SectionHeading, ExpandContainer, ExpandContent } from './style';
import { Button } from '../Button';
import type { ChecklistResource } from '../../types';
import { AppRow } from './App';

type Props = {
  resource: ChecklistResource,
  handleAppsExpand: Function,
};

type State = {
  overflowExpanded: boolean,
  contentHeight: number,
};

export class Apps extends React.Component<Props, State> {
  state = { overflowExpanded: false, contentHeight: 2000, };
  expandContentContainer: { current: null | HTMLDivElement }

  constructor(props: Props) {
    super(props)
    if (!this.props.resource.apps) return null;
    
    this.expandContentContainer = React.createRef();
  }

  handleExpand = () => {
    let expandContentHeight =
      this.expandContentContainer.current
        ? this.expandContentContainer.current.scrollHeight
        : this.state.contentHeight;

    this.setState({
      contentHeight: expandContentHeight,
      overflowExpanded: !this.state.overflowExpanded,
    })

    this.props.handleAppsExpand(this.state.overflowExpanded ? -expandContentHeight : expandContentHeight);
  }

  render() {
    let appList = this.props.resource.apps;
    let overflowAppList;
    if (appList && appList.length > 3) {
      overflowAppList = appList.slice(3, appList.length);
      appList = appList.slice(0, 3);
    }

    const { overflowExpanded, contentHeight } = this.state;
    const { resource } = this.props;

    return (
      <AppsContainer overflowExpanded={overflowExpanded}>
        <SectionHeading>Apps</SectionHeading>
        {appList && appList.map(app => (
          <AppRow key={app.name} app={app} />
        ))}

        {overflowAppList && (
          <React.Fragment>
            <ExpandContent
              id={`apps_${resource.id}`}
              role="region"
              tabindex="-1"
              ref={this.expandContentContainer}
              style={{ '--maxHeight': `${contentHeight}px` }}
              aria-hidden={!overflowExpanded}
            >
              {overflowAppList.map(app => <AppRow key={app.name} app={app} />)}
            </ExpandContent>
          
            <ExpandContainer
              onClick={this.handleExpand}
              role="button"
              aria-expanded={overflowExpanded}
              aria-controls={`apps_${resource.id}`}
            >
              <Button type="button">Show {overflowExpanded ? "less" : "more"} choices</Button>
            </ExpandContainer>
          </React.Fragment>
        )}
      </AppsContainer>
    );
  }
}

