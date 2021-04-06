const { 
  createHigherOrderComponent 
} = wp.compose;

const {
  getBlockDefaultClassName
} = wp.blocks;

const defaultClassName = getBlockDefaultClassName("bredecl-bootstrap-blocks/card-header");

export const setBlockCustomClassName = ( blockName ) => {
	return blockName === defaultClassName ?
    [] :
		blockName;
}

export const modifyBlockListBlockCardHeader = createHigherOrderComponent( ( BlockListBlock ) => {
  return ( props ) => {
    if (props.block.name == 'bredecl-bootstrap-blocks/card-header') {
      return <BlockListBlock {...props } className={ ["card-header", props.attributes.className].join(" ").trim() } />;
    }
    return <BlockListBlock { ...props } />;
  };
}, 'modifyBlockListBlockCardHeader' );

export const modifyGetSaveElementCardHeader = (element, blockType, attributes ) => {
  if (!element) {
    return;
  }
  if (blockType.name == 'bredecl-bootstrap-blocks/card-header') {
    return (
      <div className={ ["card-header", element.props.className].join(" ").trim() }>
        {element}
      </div>
    )
  }
  return element;
}