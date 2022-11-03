import React from 'react';
import { Card } from "../components/component/Card";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: "Card",
    component: Card
} as ComponentMeta<typeof Card>


export const Primary = () => <Card />