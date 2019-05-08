import React from 'react';
import PropTypes from 'prop-types';
import Div from 'components/Base/Div';
import Radio from 'components/Library/Radio';
import * as appActions from 'containers/App/actions';

import './style.css';

class CustomRadio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainValue: this.props.mainValue,
      dependentValue: this.props.dependentValue,
    };
  }

  handleMainClick = (value) => {
    const options = {
      name: 'mainValue',
      value,
    };
    this.setState({
      mainValue: value,
    });
    this.props.dispatch(appActions.updateMainValue(value));
    this.props.onChangeTracker(options);
  };

  handleDependentClick = (value) => {
    const options = {
      name: 'dependentValue',
      value,
    };
    this.setState({
      dependentValue: value,
    });
    this.props.dispatch(appActions.updateDependentValue(value));
    this.props.onChangeTracker(options);
  };

  render() {
    const {
      mainOptions,
      dependentOptions,
      mainQuestion,
      dependentQuestion
    } = this.props;

    const mainOptionsList = mainOptions.map((val, i) => (
      <Radio
        id={`main_item_${i}`}
        value={val.value}
        selectedValue={this.state.mainValue}
        label={val.label}
        noImage
        index={i}
        key={`main_item_${i}`}
        handleClick={this.handleMainClick}
      />
    ));
    const dependentOptionsList = dependentOptions.map((val, i) => (
      <Radio
        id={`dependent_item_${i}`}
        value={val.value}
        selectedValue={this.state.dependentValue}
        label={val.label}
        noImage
        index={i}
        key={`dependent_item_${i}`}
        handleClick={this.handleDependentClick}
      />
    ));
    return (
      <Div className={'CustomRadioWrap'}>
        <Div className={'QuestionText'}>
          {window.gettext(mainQuestion)}
        </Div>
        {mainOptionsList}
        {this.state.mainValue === 'Yes' ? (
          <Div className={'DependentWrap'}>
            <Div className={'QuestionText'}>
              {window.gettext(dependentQuestion)}
            </Div>
            <Div className={'DependentOptions'}>{dependentOptionsList}</Div>
          </Div>
        ) : null}
      </Div>
    );
  }
}

CustomRadio.propTypes = {
  mainValue: PropTypes.string,
  dependentValue: PropTypes.string,
  dispatch: PropTypes.func,
  onChangeTracker: PropTypes.func,
  mainOptions: PropTypes.object,
  dependentOptions: PropTypes.object,
  mainQuestion: PropTypes.string,
  dependentQuestion: PropTypes.string,
};

export default CustomRadio;
