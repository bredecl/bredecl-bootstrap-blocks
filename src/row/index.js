const { __ } = wp.i18n;

const { 
  createHigherOrderComponent 
} = wp.compose;

const { 
  registerBlockType,
  getBlockDefaultClassName
} = wp.blocks;

const {
  Toolbar,
  Button,
  Tooltip,
  Panel,
  PanelBody,
  PanelRow,
  FormToggle,
  RangeControl
} = wp.components;

const {
  Fragment
} = wp.element; 

const {
  RichText,
  AlignmentToolbar,
  BlockControls,
  BlockAlignmentToolbar,
  InspectorControls,
  InnerBlocks
} = wp.blockEditor;

import icon from '../core/icon-bootstrap.svg'; 

registerBlockType('bredecl-bootstrap-blocks/row', {
  title: __('Row (BS4)', 'bredecl-bootstrap-blocks'),
  description: __(''),
  icon: icon,
  category: 'bredecl-bootstrap-blocks',
  keywords: [
      __('bredecl-bootstrap-blocks'),
      __('row'),
  ],
  supports: {
    anchor: true,
  },
  attributes: {
      customClassName: true,
      content: {
          type: 'array',
          source: 'children',
      },
      allowedBlocks: ['bredecl-bootstrap-blocks/column'],
      TEMPLATE: {
        type: 'array',
        default: [
          ['bredecl-bootstrap-blocks/column', {} ,[]],
          ['bredecl-bootstrap-blocks/column', {} ,[]],
          ['bredecl-bootstrap-blocks/column', {} ,[]]
        ]
      },
  },
  edit: function( props ) {
    const {
      className,
      attributes: {
        anchor,
        TEMPLATE,
      },
      setAttributes
    } = props;

    return (
      <div 
        {...anchor ? { id: anchor } : null }
        className={props.className}
      >
        <InnerBlocks 
          template={ TEMPLATE }
          allowedBlocks={['bredecl-bootstrap-blocks/column']}
        /> 
      </div>
    );
  },
  save: function( props ) {
    return (
      <Fragment>
          <InnerBlocks.Content />
      </Fragment>
    );  
  }
});

const defaultClassName = getBlockDefaultClassName("bredecl-bootstrap-blocks/row");

const setBlockCustomClassName = ( blockName ) => {
	return blockName === defaultClassName ?
    [] :
		blockName;
}

wp.hooks.addFilter(
	'blocks.getBlockDefaultClassName',
	'bredecl-bootstrap-blocks/row/set-block-custom-class-name',
	setBlockCustomClassName
);

const modifyBlockListBlockRow = createHigherOrderComponent( ( BlockListBlock ) => {
    return ( props ) => {
      if (props.block.name == "bredecl-bootstrap-blocks/row") {
        return <BlockListBlock {...props } className="row" />;
      }
      return <BlockListBlock { ...props } />;
    };
}, 'modifyBlockListBlockRow' );

wp.hooks.addFilter( 
  'editor.BlockListBlock', 
  'bredecl-bootstrap-blocks/row/modify-element-edit', 
  modifyBlockListBlockRow 
);

const modifyGetSaveElementRow = (element, blockType, attributes ) => {
	if (!element) {
		return;
	}

  if (blockType.name == 'bredecl-bootstrap-blocks/row') {
    return (
      <div 
        {...attributes.anchor ? { id: attributes.anchor } : null } 
        className={ ["row", element.props.className].join(" ").trim() }
      >
        {element}
      </div>
    )
  }

	return element;
}

wp.hooks.addFilter(
  'blocks.getSaveElement', 
  'bredecl-bootstrap-blocks/row/modify-element-save', 
  modifyGetSaveElementRow
);
