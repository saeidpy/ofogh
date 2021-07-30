import React, { Component } from 'react';
import { isWidthUp, withWidth } from '@material-ui/core';

const withIsWeb = (WrappedComponent) => {
    class IsWeb extends Component {
        constructor(props) {
            super(props);
            this.state = {};
        }
        render() {
            const isWeb = isWidthUp('sm', this.props.width);
            return <WrappedComponent isWeb={isWeb} {...this.props} />;
        }
    }

    return withWidth()(IsWeb);
};
export { withIsWeb };
