const {
  createHigherOrderComponent
} = wp.compose;

const {
  getBlockDefaultClassName
} = wp.blocks;

const defaultClassName = getBlockDefaultClassName("bredecl-bootstrap-blocks/div");

export const setBlockCustomClassName = ( blockName ) => {
	return blockName === defaultClassName ?
    [] :
		blockName;
}

export const modifyBlockListBlockDiv = createHigherOrderComponent( ( BlockListBlock ) => {
  return ( props ) => {
    if (props.block.name == "bredecl-bootstrap-blocks/div") {
      return <BlockListBlock {...props } className={ props.attributes.className } />;
    }
    return <BlockListBlock { ...props } />;
  };
}, 'modifyBlockListBlockDiv' );

export const modifyGetSaveElementDiv = (element, blockType, attributes ) => {
  if (!element) {
    return;
  }
  if (blockType.name == 'bredecl-bootstrap-blocks/div') {
    return (
      <div className={ element.props.className }>
        {element}
      </div>
    )
  }
  return element;
}
