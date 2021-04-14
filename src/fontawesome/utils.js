const {createHigherOrderComponent} = wp.compose;

const {getBlockDefaultClassName} = wp.blocks;

const defaultClassName = getBlockDefaultClassName("bredecl-bootstrap-blocks/fontawesome");

export const setBlockCustomClassName = (blockName) => {
  return blockName === defaultClassName
    ? []
    : blockName;
}

export const setBlockAttributes = (attributes) => {
  if (typeof attributes.className !== "undefined")
    attributes.className = attributes.className.replace(`${defaultClassName} `, "");
  return attributes;
}

export const modifyBlockListBlockFAIcon = createHigherOrderComponent((BlockListBlock) => {
  return(props) => {
    if (props.block.name == "bredecl-bootstrap-blocks/fontawesome") {
      return (<BlockListBlock { ...props } className={[props.attributes.iconSize,props.attributes.iconType,props.attributes.classTypeName].join(" ").trim()}/>);
    }
    return <BlockListBlock { ...props }/>;
  };
}, 'modifyBlockListBlockFAIcon');

export const modifyGetSaveElementFAIcon = (element, blockType, attributes) => {

  if (!element) {
    return;
  }
  if (blockType.name === 'bredecl-bootstrap-blocks/fontawesome') {
  console.log("attributes.className");
  console.log(attributes);
  console.log("!attributes.className");
      return (<i className={[attributes.iconSize,attributes.iconType,attributes.classTypeName].join(" ").trim()}></i>)

  }
  return element;
}
