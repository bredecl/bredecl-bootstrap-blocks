const {
  createHigherOrderComponent
} = wp.compose;

const {
  getBlockDefaultClassName
} = wp.blocks;

const defaultClassName = getBlockDefaultClassName("bredecl-bootstrap-blocks/card-image-overlay");

export const setBlockCustomClassName = ( blockName ) => {
	return blockName === defaultClassName ?
    [] :
		blockName;
}

export const modifyBlockListBlockImageOverlay = createHigherOrderComponent( ( BlockListBlock ) => {
  return ( props ) => {
    if (props.block.name == 'bredecl-bootstrap-blocks/card-image-overlay') {
      return <BlockListBlock {...props } className={ ["card-image-overlay", props.attributes.className].join(" ").trim() } />;
    }
    return <BlockListBlock { ...props } />;
  };
}, 'modifyBlockListBlockImageOverlay' );

export const modifyGetSaveElementImageOverlay = (element, blockType, attributes ) => {
  if (!element) {
    return;
  }
  if (blockType.name == 'bredecl-bootstrap-blocks/card-image-overlay') {
    return (
      <div className={ ["card-image-overlay", element.props.className].join(" ").trim() }>
        {element}
      </div>
    )
  }
  return element;
}
