import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as lotusIcon } from './images/lotus.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={lotusIcon} viewBox="0 0 150 58" {...props} />;
}
