const { 
  createHigherOrderComponent 
} = wp.compose;

const {
  getBlockDefaultClassName
} = wp.blocks;

const defaultClassName = getBlockDefaultClassName("bredecl-bootstrap-blocks/card-body");

export const setBlockCustomClassName = ( blockName ) => {
	return blockName === defaultClassName ?
    [] :
		blockName;
}

export const modifyBlockListBlockCardBody = createHigherOrderComponent( ( BlockListBlock ) => {
  return ( props ) => {
    if (props.block.name == 'bredecl-bootstrap-blocks/card-body') {
      return <BlockListBlock { ...props } className={ ["card-body", props.attributes.className].join(" ").trim() } />;
    }
    return <BlockListBlock { ...props } />;
  };
}, 'modifyBlockListBlockCardBody' );

export const modifyGetSaveElementCardBody = (element, blockType, attributes ) => {
  if (!element) {
    return;
  }
  if (blockType.name == 'bredecl-bootstrap-blocks/card-body') {
    return (
      <div className={ ["card-body", element.props.className].join(" ").trim() }>
        {element}
      </div>
    )
  }
  return element;
}