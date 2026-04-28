// This shows examples related with React.

import { Component } from 'react';
import ReactDOM from 'react-dom';

export class ReactApiTypo extends Component {
  check() {
  }

  componentDidMount() {
    this.check();
  }

  componentDidUpate() {
    this.check();
  }

  render() {
    return null;
  }
}

export class MissingReturnValue extends Component {
  recordFieldFocus(fieldId) {
    console.log('Focused on field', fieldId);
  }

  render() {
    return (
      <RoleSelect onFocus={ this.recordFieldFocus('roles') } />
    );
  }
}

export class BadUnknownProp extends Component {
  render() {
    return (
      <div>
        <iframe src={url} frameborder="0" scrolling="no"></iframe>
      </div>
    );
  }
}

export class AsyncRenderReturnValue extends Component {
  onLocationChange(location, action) {
    let appInstance = ReactDOM.render(
      <App context={context}>{route.component}</App>,
      container
    );
    if (appInstance) {
      deepForceUpdate(appInstance);
    }
  }
}

export class BadEventHandlerReturnFalse extends Component {
  onMaximizeClick(e) {
    if (isFullScreen()) {
      return false;
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.onMaximizeClick}></button>
      </div>
    );
  }
}

export class BadJsxComment extends Component {
  render() {
    return (
      <div>
        //onUpdate should not be called for valueLink
        <h3>ValueLink</h3>
      </div>
    );
  }
}

export class BadLengthCheck extends Component {
  render() {
    return (
      <div>
        <span className="methodType">
          {this.props.params && this.props.params.length && this.props.params.map((param) => {
            return param.name;
          }).join(', ')}
        </span>
      </div>
    );
  }
}

export class BadEventHandler extends Component {
  handleClick() {
  }

  render() {
    return (
      <div onClick="not a function">
        Hello
      </div>
    );
  }
}

export class EventHandlerInvalidThis extends Component {
  trackUpgradeClick() {
    this.props.recordTracksEvent();
  }

  render() {
    return (
      <div>
        <a href={ '/domains/add/' + site.slug } onClick={ this.trackUpgradeClick } />
      </div>
    );
  }
}

export class BadStyleProp extends Component {
  render() {
    return (
      <div style={1} />
    );
  }
}

export class MissingKeyProp extends Component {
  render() {
    return (
      <div>
        {[(<div className={`fcol fg bullet-info ${(index % 2) ? '' : 'bullet-info-reversed'}`} />)]}
      </div>
    );
  }
}
