const {
  createHigherOrderComponent
} = wp.compose;

const {
  getBlockDefaultClassName
} = wp.blocks;

const defaultClassName = getBlockDefaultClassName("bredecl-bootstrap-blocks/card-image-overlay-header");

export const setBlockCustomClassName = ( blockName ) => {
	return blockName === defaultClassName ?
    [] :
		blockName;
}

export const modifyBlockListBlockCardImageOverlayHeader = createHigherOrderComponent( ( BlockListBlock ) => {
  return ( props ) => {
    if (props.block.name == "bredecl-bootstrap-blocks/card-image-overlay-header") {
      return <BlockListBlock {...props } className={ ["card-img", props.attributes.className].join(" ").trim() } />;
    }
    return <BlockListBlock { ...props } />;
  };
}, 'modifyBlockListBlockCardImageOverlayHeader' );

export const modifyGetSaveElementCardImageOverlayHeader = (element, blockType, attributes ) => {
  if (!element) {
    return;
  }
  if (blockType.name == 'bredecl-bootstrap-blocks/card-image-overlay-header') {
    return (
      <div className={ ["card-img", element.props.className].join(" ").trim() }>
        {element}
      </div>
    )
  }
  return element;
}
