// @ts-ignore
import createBlock, {createClassName, createNode} from 'calamari';

import {
    ClassNameData,
    NodeSchema,
    Elements,
} from 'calamari/types';

const classNameApplyer = ({style, ...rest}: ClassNameData) => ({
    className: createClassName(rest),
    style,
});

const nodeCreator = ({component, ...rest}: {component: any}) => createNode({...rest, component: component || 'div'}, classNameApplyer);

export default function createCalamari(block: NodeSchema, elements: Elements) {
    return createBlock(block, elements, nodeCreator);
};
