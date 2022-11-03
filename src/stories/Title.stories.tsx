import React from 'react';
import { Title } from "../components/component/Title";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: "Title",
    component: Title
} as ComponentMeta<typeof Title>


export const Primary = () => <Title title="addddd" />