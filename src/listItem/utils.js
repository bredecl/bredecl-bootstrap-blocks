const {createHigherOrderComponent} = wp.compose;

const {getBlockDefaultClassName} = wp.blocks;

const defaultClassName = getBlockDefaultClassName("bredecl-bootstrap-blocks/list-item");

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

export const modifyBlockListBlockListItem = createHigherOrderComponent((BlockListBlock) => {
  return(props) => {
    if (props.block.name == "bredecl-bootstrap-blocks/list-item") {
      const isDropTarget = typeof props.className !== "undefined"
        ? !props.className.indexOf('is-drop-target')
        : false;
      return (<BlockListBlock { ...props } className={props.attributes.isWrapped
          ? props.attributes.className
          : isDropTarget
            ? "is-drop-target"
            : null}/>);
    }
    return <BlockListBlock { ...props }/>;
  };
}, 'modifyBlockListBlockListItem');

export const modifyGetSaveElementListItem = (element, blockType, attributes) => {

  if (!element) {
    return;
  }

  if (blockType.name === 'bredecl-bootstrap-blocks/list-item') {
  console.log(attributes);
      return (<li className={attributes.className}>{element}</li>)

  }
  return element;
}
