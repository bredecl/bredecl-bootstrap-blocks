const { 
  createHigherOrderComponent 
} = wp.compose;

const {
  getBlockDefaultClassName
} = wp.blocks;

const defaultClassName = getBlockDefaultClassName("bredecl-bootstrap-blocks/card-footer");

export const setBlockCustomClassName = ( blockName ) => {
	return blockName === defaultClassName ?
    [] :
		blockName;
}

export const modifyBlockListBlockCardFooter = createHigherOrderComponent( ( BlockListBlock ) => {
  return ( props ) => {
    if (props.block.name == 'bredecl-bootstrap-blocks/card-footer') {
      return <BlockListBlock {...props } className={ ["card-footer", props.attributes.className].join(" ").trim() } />;
    }
    return <BlockListBlock { ...props } />;
  };
}, 'modifyBlockListBlockCardFooter' );

export const modifyGetSaveElementCardFooter = (element, blockType, attributes ) => {
  if (!element) {
    return;
  }
  if (blockType.name == 'bredecl-bootstrap-blocks/card-footer') {
    return (
      <div className={ ["card-footer", element.props.className].join(" ").trim() }>
        {element}
      </div>
    )
  }
  return element;
}