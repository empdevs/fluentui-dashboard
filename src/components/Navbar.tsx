import { ActionButton } from '@fluentui/react';
import * as React from 'react';

export const Navbar: React.FunctionComponent = () => {
    return (
        <div className='navbar'>
            <ActionButton
                iconProps={{ iconName: "ChevronLeft" }}
                styles={{
                    icon: {
                        fontWeight: 'bold'
                    }
                }}
            />
        </div>
    );
};
