const {__} = wp.i18n;
const {InspectorControls, InnerBlocks} = wp.blockEditor;
const {PanelBody, PanelRow, SelectControl} = wp.components;
const {Fragment} = wp.element;
export const edit = (props) => {
  const {
    attributes: {
      listType,
      classTypeName,
      TEMPLATE
    },
    setAttributes
  } = props;
  return (<Fragment>
    <Fragment>
      <InnerBlocks template={TEMPLATE}/>
    </Fragment>
    <InspectorControls>
      <PanelBody title={__('List Settings', 'bredecl-bootstrap-blocks')} initialOpen={true}>
        <PanelRow className="mt-0">
          <SelectControl label="List Container" value={listType} className="d-block w-100 mb-2" options={[
              {
                label: 'Div',
                value: 'div'
              }, {
                label: 'Orderer List',
                value: 'ol'
              }, {
                label: 'Unorderer List',
                value: 'ul'
              }
            ]} onChange={(listType) => {
              setAttributes({listType})
            }}/>
        </PanelRow>
          <PanelRow className="mt-0">
          <SelectControl label="List Kind" value={classTypeName} className="d-block w-100 mb-2" options={[

            {
              label: 'Group',
              value: 'list-group'
            },{
                  label: 'Inline',
                  value: 'list-inline'
                }
              ]} onChange={(classTypeName) => {
                setAttributes({classTypeName})
              }}/>
          </PanelRow>

      </PanelBody>
    </InspectorControls>
  </Fragment>);
}
