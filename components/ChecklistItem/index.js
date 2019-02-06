// @flow
import React from 'react';
import type { ChecklistResource } from '../../types';
import { getCheckedStatusById, setCheckedStatusById } from './utils';
import Card from '../Card';
import LoadingChecklistItem from '../LoadingChecklistItem';
import { Heading } from './Heading';
import { Apps } from './Apps';
import { Resources } from './Resources';
import {
  Container,
  CheckboxContainer,
  CardContent,
  ResourceContent,
  Divider,
  Description,
  Content,
} from './style';

type Props = {
  resource: ChecklistResource,
};

type State = {
  isChecked: boolean,
  isLoading: boolean,
  isCollapsed: boolean,
  contentHeight: number,
};

class ChecklistItem extends React.Component<Props, State> {
  state = { isChecked: false, isLoading: true, isCollapsed: true, contentHeight: 2000, };

  constructor(props) {
    super(props);

    this.contentContainer = React.createRef();
  }

  componentDidMount() {
    const { resource } = this.props;
    const isChecked = getCheckedStatusById(resource.id);
    return this.setState({
      isChecked,
      isLoading: false,
      isCollapsed: isChecked,
    });
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.isLoading && !this.state.isLoading) {
      return this.setState({
        contentHeight: this.contentContainer.current.scrollHeight,
      })
    }
  }

  handleSetChecked = () => {
    const { isChecked } = this.state;
    const { resource } = this.props;
    setCheckedStatusById(resource.id, !isChecked);
    return this.setState({ isChecked: !isChecked, isCollapsed: !isChecked });
  };

  uncollapse = () => {
      this.setState(state => ({ isCollapsed: !state.isCollapsed }));
      this.contentContainer.current.focus();
  };

  handleAppsExpand = appsContainerHeight => {
    return this.setState({
        contentHeight: this.contentContainer.current.scrollHeight + appsContainerHeight,
    })
  }

  render() {
    const { isChecked, isLoading, isCollapsed, contentHeight } = this.state;
    const { resource } = this.props;

    if (isLoading) return <LoadingChecklistItem />;

    return (
      <Container>
        <Card isChecked={isChecked}>
          <CardContent isCollapsed={isCollapsed}>
            <CheckboxContainer>
              <input
                aria-expanded={!isCollapsed}
                type="checkbox"
                checked={isChecked}
                id={`checkbox_${resource.id}`}
                onChange={this.handleSetChecked}
                aria-controls={`content_${resource.id}`}
              />
              <label htmlFor={`checkbox_${resource.id}`}>
                {resource.title}
              </label>
            </CheckboxContainer>

            <ResourceContent
              isChecked={isChecked}
              isCollapsed={isCollapsed}
            >
              <Heading
                resource={resource}
                isCollapsed={isCollapsed}
                handleCollapse={this.uncollapse}
              />

              {!isCollapsed && resource.apps && (
                <React.Fragment>
                  <Divider />
                  <Apps resource={resource} />
                </React.Fragment>
              )}

              {!isCollapsed && resource.resources && (
                <React.Fragment>
                  <Divider />
                  <Resources resource={resource} />
                </React.Fragment>
              )}
            </ResourceContent>
          </CardContent>
        </Card>
      </Container>
    );
  }
}

export default ChecklistItem;
