import BigOVisualizer from "../components/for-posts/BigOVisualizer"

import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    component: BigOVisualizer,
    title: 'Big O Visualizer'
} as ComponentMeta<typeof BigOVisualizer>;

const Template: ComponentStory<typeof BigOVisualizer> = args => <BigOVisualizer {...args} />;

export const Default = Template.bind({});