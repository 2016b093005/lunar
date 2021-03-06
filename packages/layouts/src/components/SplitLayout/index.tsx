import React from 'react';
import { Omit } from 'utility-types';
import withStyles, { css, WithStylesProps } from '@airbnb/lunar/lib/composers/withStyles';
import Layout, { Props as LayoutProps, AsideProps } from '../Layout';

export type Props = Required<AsideProps> &
  Omit<LayoutProps, 'children' | 'fluid' | 'noBackground' | 'noPadding'>;

/** A symmetrical two-column layout with optional top and side navigation. */
export class SplitLayout extends React.Component<Props & WithStylesProps> {
  render() {
    const { before, after, styles, ...props } = this.props;

    return (
      <Layout {...props} noBackground noPadding>
        <div {...css(styles.wrapper)}>
          <div {...css(styles.column)}>{before}</div>
          <div {...css(styles.column, styles.column_after)}>{after}</div>
        </div>
      </Layout>
    );
  }
}

export default withStyles(({ unit }) => ({
  wrapper: {
    display: 'flex',
    height: '100%',
  },

  column: {
    width: '50%',
    flexGrow: 0,
    flexShrink: 0,
    padding: unit * 2,
  },

  column_after: {
    // borderLeft: ui.border,
  },
}))(SplitLayout);
