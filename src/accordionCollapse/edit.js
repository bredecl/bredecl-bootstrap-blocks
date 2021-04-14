const {__} = wp.i18n;
const {InspectorControls, InnerBlocks} = wp.blockEditor;
const {PanelBody, PanelRow, TextControl, FormToggle} = wp.components;
const {Fragment} = wp.element;
export const edit = (props) => {
  const {
    attributes: {
      itemID,
      accordionID,
      className,
      isActive,
      isCollapsed,
      TEMPLATE
    },
    setAttributes
  } = props;

  const onChangeToggleActive = () => {
    setAttributes({
      isActive: !isActive
    });
  }
  const onChangeToggleActiveCollapsed = () => {
    setAttributes({
      isCollapsed: !isCollapsed
    });
  }
  return (<Fragment>
    <Fragment>
      <InnerBlocks template={TEMPLATE}/>
    </Fragment>
    <InspectorControls>
      <PanelBody title={__('Accordion Item Collapse Settings', 'bredecl-bootstrap-blocks')} initialOpen={true}>
        <PanelRow>

          <TextControl value={accordionID} onChange={(accordionID) => setAttributes({accordionID: accordionID})} label={__('Accordion ID', 'bredecl-bootstrap-blocks')}/>
        </PanelRow>
          <PanelRow>

            <TextControl value={itemID} onChange={(itemID) => setAttributes({itemID: itemID})} label={__('Item ID', 'bredecl-bootstrap-blocks')}/>
          </PanelRow>
        <PanelRow>

          <FormToggle id="form-toggle-fluid" label={__('Show', 'bredecl-bootstrap-blocks')} checked={isActive} onClick={onChangeToggleActive} label=  {__('Show?', 'bredecl-bootstrap-blocks')}/>
        </PanelRow>
        <PanelRow>

          <FormToggle id="form-toggle-fluid" label={__('Is Collapsed', 'bredecl-bootstrap-blocks')} checked={isCollapsed} onClick={onChangeToggleActiveCollapsed} label=  {__('Is Collapsed?', 'bredecl-bootstrap-blocks')}/>
        </PanelRow>
      </PanelBody>
    </InspectorControls>
  </Fragment>);
}
