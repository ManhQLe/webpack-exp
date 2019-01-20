import React from 'react';
import ReactDOM from 'react-dom';
import { Nav } from 'office-ui-fabric-react/lib';

function onLinkClick(ev, item) {
    if (item && item.name === 'News') {
        alert('News link clicked');
    }
    return false;
};

ReactDOM.render(
    <Nav
        groups={[
            {
                links: [
                    {
                        name: 'Home',
                        url: 'http://example.com',
                        links: [
                            {
                                name: 'Activity',
                                url: 'http://msn.com',
                                key: 'key1'
                            },
                            {
                                name: 'MSN',
                                url: 'http://msn.com',
                                key: 'key2'
                            }
                        ],
                        isExpanded: true
                    },
                    { name: 'Documents', url: 'http://example.com', key: 'key3', isExpanded: true },
                    { name: 'Pages', url: 'http://msn.com', key: 'key4' },
                    { name: 'Notebook', url: 'http://msn.com', key: 'key5' },
                    { name: 'Long Name Test for ellipse', url: 'http://msn.com', key: 'key6' },
                    {
                        name: 'News',
                        icon: 'News',
                        key: 'key8'
                    }
                ]
            }
        ]}
        onLinkClick={onLinkClick}
        expandedStateText={'expanded'}
        collapsedStateText={'collapsed'}
        selectedKey={'key3'}
        expandButtonAriaLabel={'Expand or collapse'}
    />
    , document.getElementById("nav"))