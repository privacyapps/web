import React, { FC } from 'react';
import * as Icons from 'react-feather';
import { IconName } from '@/types';

// FIX: The 'name' property is omitted from `React.SVGAttributes` to avoid a type
// conflict with the component's 'name' prop, which is used to select the icon.
interface IconProps extends Omit<React.SVGAttributes<SVGElement>, 'name'> {
  name: IconName;
  size?: string | number;
  color?: string;
}

export const Icon: FC<IconProps> = ({ name, ...props }) => {
  const IconComponent = Icons[name] || Icons['HelpCircle'];
  return <IconComponent {...props} />;
};
