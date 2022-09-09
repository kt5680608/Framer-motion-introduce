import React from 'react';
import { MenuButton, ButtonText, MenuIcon } from './style';
import { Reorder } from 'framer-motion';

interface IItemProps {
    item: string;
}
function Item({ item }: IItemProps) {
    return (
        <Reorder.Item value={item} id={item}>
            <MenuButton whileTap={{ scale: 0.9 }}>
                <MenuIcon src={`${item}.png`} />
                <ButtonText>{item}</ButtonText>
            </MenuButton>
        </Reorder.Item>
    );
}

export default Item;
