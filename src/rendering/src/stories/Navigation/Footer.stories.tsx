import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Default as Footer } from '../../components/Navigation/FooterPlay';
import { mockFooterProps } from '../Pages/PageStoriesCommon';

export default {
  title: 'Components/Navigation/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => {
  return (
    <footer>
      <Footer {...args} />
    </footer>
  );
};

export const Default = Template.bind({});
Default.args = mockFooterProps;
