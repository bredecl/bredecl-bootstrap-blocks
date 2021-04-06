const {
  createHigherOrderComponent
} = wp.compose;

const {
  getBlockDefaultClassName
} = wp.blocks;

const defaultClassName = getBlockDefaultClassName("bredecl-bootstrap-blocks/card-image");

export const setBlockCustomClassName = ( blockName ) => {
	return blockName === defaultClassName ?
    [] :
		blockName;
}

export const modifyBlockListBlockCardImage = createHigherOrderComponent( ( BlockListBlock ) => {
  return ( props ) => {
    if (props.block.name == 'bredecl-bootstrap-blocks/card-image') {
      return <BlockListBlock {...props } className={ ["card-image", props.attributes.className].join(" ").trim() } />;
    }
    return <BlockListBlock { ...props } />;
  };
}, 'modifyBlockListBlockCardImage' );

export const modifyGetSaveElementCardImage = (element, blockType, attributes ) => {
  if (!element) {
    return;
  }
  if (blockType.name == 'bredecl-bootstrap-blocks/card-image') {
    return (
      <div className={ ["card-image", element.props.className].join(" ").trim() }>
        {element}
      </div>
    )
  }
  return element;
}
