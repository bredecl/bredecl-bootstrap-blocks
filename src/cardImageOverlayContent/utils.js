const {
  createHigherOrderComponent
} = wp.compose;

const {
  getBlockDefaultClassName
} = wp.blocks;

const defaultClassName = getBlockDefaultClassName("bredecl-bootstrap-blocks/card-image-overlay-content");

export const setBlockCustomClassName = ( blockName ) => {
	return blockName === defaultClassName ?
    [] :
		blockName;
}

export const modifyBlockListBlockCardImageOverlayContent = createHigherOrderComponent( ( BlockListBlock ) => {
  return ( props ) => {
    if (props.block.name == "bredecl-bootstrap-blocks/card-image-overlay-content") {
      return <BlockListBlock {...props } className={ ["card-img-overlay", props.attributes.className].join(" ").trim() } />;
    }
    return <BlockListBlock { ...props } />;
  };
}, 'modifyBlockListBlockCardImageOverlayContent' );

export const modifyGetSaveElementCardImageOverlayContent = (element, blockType, attributes ) => {
  if (!element) {
    return;
  }
  if (blockType.name == 'bredecl-bootstrap-blocks/card-image-overlay-content') {
    return (
      <div className={ ["card-img-overlay", element.props.className].join(" ").trim() }>
        {element}
      </div>
    )
  }
  return element;
}
