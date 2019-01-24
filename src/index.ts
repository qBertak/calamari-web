import createBlock, {
    createClassName,
    createNode,
    ClassNameData,
    NodeSchema,
    Elements
} from 'calamari';

const classNameApplyer = (classNameData: ClassNameData) => ({
    className: createClassName(classNameData),
});

const nodeCreator = ({component, ...rest}: {component: any}) => createNode({...rest, component: component || 'div'}, classNameApplyer);

export default function createCalamari(block: NodeSchema, elements: Elements) {
    return createBlock(block, elements, nodeCreator);
};
