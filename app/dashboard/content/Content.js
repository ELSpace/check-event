import React from 'react';
import ContentItem from './ContentItem';

const Content = ({children}) => (

      <div className="page-content-wrapper">
        {children}
      </div>
    );

Content.Item = ContentItem;

 export default Content;