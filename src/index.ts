import createBlock, {
    createClassName,
    createNode,
    ClassNameData,
    NodeSchema,
    Elements
} from 'calamari';

const classNameApplyer = ({style, ...rest}: ClassNameData) => ({
    className: createClassName(rest),
    style,
});

const nodeCreator = ({component, ...rest}: {component: any}) => createNode({...rest, component: component || 'div'}, classNameApplyer);

export default function createCalamari(block: NodeSchema, elements: Elements) {
    return createBlock(block, elements, nodeCreator);
};
