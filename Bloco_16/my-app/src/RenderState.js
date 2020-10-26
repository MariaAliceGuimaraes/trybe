import React from 'react';
import { connect } from 'react-redux';

class RenderState extends React.Component {
  render() {
    return(
      <div>
        {this.props.forms.map(element => (
          <p>{element}</p>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  forms: state.formReducer
});

export default connect(mapStateToProps)(RenderState);
