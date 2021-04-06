const { 
  createHigherOrderComponent 
} = wp.compose;

const {
  getBlockDefaultClassName
} = wp.blocks;

const defaultClassName = getBlockDefaultClassName("bredecl-bootstrap-blocks/card");

export const setBlockCustomClassName = ( blockName ) => {
	return blockName === defaultClassName ?
    [] :
		blockName;
}

export const modifyBlockListBlockCard = createHigherOrderComponent( ( BlockListBlock ) => {
  return ( props ) => {
    if (props.block.name == "bredecl-bootstrap-blocks/card") {
      return <BlockListBlock {...props } className={ ["card", props.attributes.className].join(" ").trim() } />;
    }
    return <BlockListBlock { ...props } />;
  };
}, 'modifyBlockListBlockCard' );

export const modifyGetSaveElementCard = (element, blockType, attributes ) => {
  if (!element) {
    return;
  }
  if (blockType.name == 'bredecl-bootstrap-blocks/card') {
    return (
      <div className={ ["card", element.props.className].join(" ").trim() }>
        {element}
      </div>
    )
  }
  return element;
}