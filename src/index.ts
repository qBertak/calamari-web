import createBlock, {
    createClassName,
    createNode,
    classNameData,
    NodeSchema,
    Elements
} from 'calamari';

const classNameApplyer = (className_data: classNameData) => ({
    className: createClassName(className_data),
});

const nodeCreator = ({component, ...rest}: {component: any}) => createNode({...rest, component: component || 'div'}, classNameApplyer);

export default function createCalamari(block: NodeSchema, elements: Elements) {
    return createBlock(block, elements, nodeCreator);
};
