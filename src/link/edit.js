const {__} = wp.i18n;
const {InspectorControls, InnerBlocks} = wp.blockEditor;
const {PanelBody, PanelRow, TextControl, FormToggle, SelectControl} = wp.components;
const {Fragment} = wp.element;
export const edit = (props) => {
  const {
    attributes: {
      whereToLink,
      target,
      className,
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
      <PanelBody title={__('Accordion Item Settings', 'bredecl-bootstrap-blocks')} initialOpen={true}>
        <PanelRow>

          <TextControl value={whereToLink} onChange={(whereToLink) => setAttributes({whereToLink: whereToLink})} label={__('Where To Link (href)', 'bredecl-bootstrap-blocks')}/>
        </PanelRow>
        <PanelRow className="mt-0">
          <SelectControl label="Link Class" value={className}  options={[
              {
                label: '',
                value: ''
              }, {
                label: 'link-primary',
                value: 'link-primary'
              }, {
                label: 'link-secondary',
                value: 'link-secondary'
              }, {
                label: 'link-success',
                value: 'link-success'
              }, {
                label: 'link-danger',
                value: 'link-danger'
              }, {
                label: 'link-warning',
                value: 'link-warning'
              }, {
                label: 'link-info',
                value: 'link-info'
              }, {
                label: 'link-light',
                value: 'link-light'
              }, {
                label: 'link-dark',
                value: 'link-dark'
              }
            ]} onChange={(className) => {
              setAttributes({className})
            }}/>
        </PanelRow>
        <PanelRow className="mt-0">
          <SelectControl label="Target" value={target}  options={[
              {
                label: 'Same Page',
                value: ''
              }, {
                label: 'New Page',
                value: '_blank'
              }
            ]} onChange={(target) => {
              setAttributes({target})
            }}/>
        </PanelRow>
      </PanelBody>
    </InspectorControls>
  </Fragment>);
}
