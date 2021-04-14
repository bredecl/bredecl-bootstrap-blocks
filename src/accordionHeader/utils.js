const {
  createHigherOrderComponent
} = wp.compose;

const {
  getBlockDefaultClassName
} = wp.blocks;

const defaultClassName = getBlockDefaultClassName("bredecl-bootstrap-blocks/accordion-header");

export const setBlockCustomClassName = ( blockName ) => {
	return blockName === defaultClassName ?
    [] :
		blockName;
}

export const modifyBlockListBlockAccordionHeader = createHigherOrderComponent( ( BlockListBlock ) => {
  return ( props ) => {
    if (props.block.name == "bredecl-bootstrap-blocks/accordion-header") {
      return <BlockListBlock {...props } className={ ["accordion-header", props.attributes.className].join(" ").trim() } />;
    }
    return <BlockListBlock { ...props } />;
  };
}, 'modifyBlockListBlockAccordionHeader' );

export const modifyGetSaveElementAccordionHeader = (element, blockType, attributes ) => {
  if (!element) {
    return;
  }
  if (blockType.name == 'bredecl-bootstrap-blocks/accordion-header') {
    return (
      <div className={ ["accordion-header", attributes.className].join(" ").trim() } id={["head",attributes.itemID].join("-")}>
         {element}
      </div>
    )
  }
  return element;
}
