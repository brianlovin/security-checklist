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
  Checkbox,
  CardContent,
  ResourceContent,
  Divider,
} from './style';

type Props = {
  resource: ChecklistResource,
};

type State = {
  isChecked: boolean,
  isLoading: boolean,
};

class ChecklistItem extends React.Component<Props, State> {
  state = { isChecked: false, isLoading: true };

  componentDidMount() {
    const { resource } = this.props;
    const isChecked = getCheckedStatusById(resource.id);
    return this.setState({ isChecked, isLoading: false });
  }

  handleSetChecked = () => {
    const { isChecked } = this.state;
    const { resource } = this.props;
    setCheckedStatusById(resource.id, !isChecked);
    return this.setState({ isChecked: !isChecked });
  };

  render() {
    const { isChecked, isLoading } = this.state;
    const { resource } = this.props;

    if (isLoading) return <LoadingChecklistItem />;

    return (
      <Container>
        <Card isChecked={isChecked}>
          <CardContent>
            <CheckboxContainer onClick={this.handleSetChecked}>
              <Checkbox isChecked={isChecked} />
            </CheckboxContainer>

            <ResourceContent isChecked={isChecked}>
              <Heading resource={resource} />
              {resource.apps && (
                <React.Fragment>
                  <Divider />
                  <Apps resource={resource} />
                </React.Fragment>
              )}

              {resource.resources && (
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
