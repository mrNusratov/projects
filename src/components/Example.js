import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Example = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);


    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle>
                <img className='drop-img' src="images/OvalCopy17.png" alt=""/>


                <span>John</span>

                <img className='path' src="images/Path.png" alt=""/>
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>Header</DropdownItem>
                <DropdownItem>Some Action</DropdownItem>
                <DropdownItem>Dropdown Item</DropdownItem>

            </DropdownMenu>
        </Dropdown>
    );
};

export default Example;