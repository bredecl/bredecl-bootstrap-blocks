const {createHigherOrderComponent} = wp.compose;

const {getBlockDefaultClassName} = wp.blocks;

const defaultClassName = getBlockDefaultClassName("bredecl-bootstrap-blocks/link");

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

export const modifyBlockListBlockLink = createHigherOrderComponent((BlockListBlock) => {
  return(props) => {
    if (props.block.name == "bredecl-bootstrap-blocks/link") {
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
}, 'modifyBlockListBlockLink');

export const modifyGetSaveElementLink = (element, blockType, attributes) => {
  if (!element) {
    return;
  }
  if (blockType.name === 'bredecl-bootstrap-blocks/link') {
    return (<a
      className={attributes.className}
      target={attributes.target}
      href={attributes.whereToLink}
      rel="noopener"
      >
      {element}
    </a>)
  }
  return element;
}
