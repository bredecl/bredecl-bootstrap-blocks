const {createHigherOrderComponent} = wp.compose;

const {getBlockDefaultClassName} = wp.blocks;

const defaultClassName = getBlockDefaultClassName("bredecl-bootstrap-blocks/accordion");

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

export const modifyBlockListBlockAccordion = createHigherOrderComponent((BlockListBlock) => {
  return(props) => {
    if (props.block.name == "bredecl-bootstrap-blocks/accordion") {
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
}, 'modifyBlockListBlockAccordion');

export const modifyGetSaveElementAccordion = (element, blockType, attributes) => {
  if (!element) {
    return;
  }
  if (blockType.name === 'bredecl-bootstrap-blocks/accordion') {
    return (<div className={["accordion", attributes.className].join(" ").trim()} id={attributes.accordionID}>
      {element}
    </div>)
  }
  return element;
}
