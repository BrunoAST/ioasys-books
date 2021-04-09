import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button from '../components/Button/Button';
import { ButtonModel } from '../components/Button/models/ButtonModel';
import icon from '../assets/Close.svg';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonModel> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Texto',
  styleType: 'text'
};

export const Secondary = Template.bind({});
Secondary.args = {
  icon: icon,
  styleType: 'icon'
};
