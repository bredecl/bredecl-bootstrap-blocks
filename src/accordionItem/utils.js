const {createHigherOrderComponent} = wp.compose;

const {getBlockDefaultClassName} = wp.blocks;

const defaultClassName = getBlockDefaultClassName("bredecl-bootstrap-blocks/accordion-item");

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

export const modifyBlockListBlockAccordionItem = createHigherOrderComponent((BlockListBlock) => {
  return(props) => {
    if (props.block.name == "bredecl-bootstrap-blocks/accordion-item") {
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
}, 'modifyBlockListBlockAccordionItem');

export const modifyGetSaveElementAccordionItem = (element, blockType, attributes) => {
  if (!element) {
    return;
  }
  if (blockType.name === 'bredecl-bootstrap-blocks/accordion-item') {
    return (<div
      className={["accordion-item", attributes.className].join(" ").trim()}
      id={["#item",attributes.itemID].join("").trim()}>
      {element}
    </div>)
  }
  return element;
}
