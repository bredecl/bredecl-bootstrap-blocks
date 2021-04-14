const {createHigherOrderComponent} = wp.compose;

const {getBlockDefaultClassName} = wp.blocks;

const defaultClassName = getBlockDefaultClassName("bredecl-bootstrap-blocks/list");

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

export const modifyBlockListBlockList = createHigherOrderComponent((BlockListBlock) => {
  return(props) => {
    if (props.block.name == "bredecl-bootstrap-blocks/list") {
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
}, 'modifyBlockListBlockList');

export const modifyGetSaveElementList = (element, blockType, attributes) => {

  if (!element) {
    return;
  }
  if (blockType.name === 'bredecl-bootstrap-blocks/list') {
  console.log("attributes.className");

  console.log(attributes);
  console.log("!attributes.className");

    if (attributes.listType == "ul") {
      return (<ul className={[attributes.classTypeName, attributes.className].join(" ").trim()}>{element}</ul>)
    }
    else if(attributes.listType == "ol") {
      return (<ol className={[attributes.classTypeName, attributes.className].join(" ").trim()}>{element}</ol>)
    }
    else if(attributes.listType == "div") {
      return (<div className={[attributes.classTypeName, attributes.className].join(" ").trim()}>{element}</div>)
    }
  }
  return element;
}
