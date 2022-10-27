import React from 'react';
import { InputBox } from "../components/InputBox";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: "InputBox",
    component: InputBox
} as ComponentMeta<typeof InputBox>

const Template: ComponentStory<typeof InputBox> = (args) => <InputBox {...args} />;

export const Primary = () => <InputBox title='dddd' />

export const Disabled = Template.bind({});
Disabled.args = {
    title:"굴착기감시",
    readOnly: true,
};