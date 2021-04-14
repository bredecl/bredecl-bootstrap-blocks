const {
  createHigherOrderComponent
} = wp.compose;

const {
  getBlockDefaultClassName
} = wp.blocks;

const defaultClassName = getBlockDefaultClassName("bredecl-bootstrap-blocks/accordion-collapse");

export const setBlockCustomClassName = ( blockName ) => {
	return blockName === defaultClassName ?
    [] :
		blockName;
}

export const modifyBlockListBlockAccordionCollapse = createHigherOrderComponent( ( BlockListBlock ) => {
  return ( props ) => {
    if (props.block.name == "bredecl-bootstrap-blocks/accordion-collapse") {
      return <BlockListBlock {...props } className={ ["accordion-collapse", props.attributes.className].join(" ").trim() } />;
    }
    return <BlockListBlock { ...props } />;
  };
}, 'modifyBlockListBlockAccordionCollapse' );

export const modifyGetSaveElementAccordionCollapse = (element, blockType, attributes ) => {
  if (!element) {
    return;
  }
  if (blockType.name == 'bredecl-bootstrap-blocks/accordion-collapse') {
    console.log("collapse");
    console.log(attributes);
    console.log("!collapse");
    return (

      <div
      id={["collapse",attributes.itemID].join("-").trim()}
      className={
        ["accordion-collapse",(attributes.isActive ? "show" : ""),(attributes.isCollapsed ? "collapse" : ""), attributes.className].join(" ").trim()
      }
      aria-labelledby={ ["head",attributes.itemID].join("-").trim() }
      data-bs-parent={ ["#", attributes.accordionID].join("").trim() }>
      <div className={ "accordion-body"}>
        {element}
      </div>
      </div>
    )
  }
  return element;
}
