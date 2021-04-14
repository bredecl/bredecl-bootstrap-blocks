const {__} = wp.i18n;

const {Fragment} = wp.element;

const {
  SelectControl,
  RadioControl,
  BaseControl,
  PanelBody,
  PanelRow,
  FormToggle,
  TextControl
} = wp.components;

const {InspectorControls, URLInputButton} = wp.blockEditor;

import {buttonStyle, getCaretPosition, setCaretPosition} from './utils';

export const edit = (props) => {
  const {
    attributes: {
      anchor,
      text,
      link,
      style,
      outline,
      block,
      size,
      newWindow,
      databstoggle,
      databstarget,
      ariaexpanded,
      ariacontrols,
      htmlType
    },
    className,
    setAttributes
  } = props;

  const onChangeStyle = (value) => {
    setAttributes({style: value});
  }

  const onChangeOutline = () => {
    setAttributes({
      outline: !outline
    });
  }

  const onChangeBlock = () => {
    setAttributes({
      block: !block
    });
  }

  const onChangeHtmlType = (value) => {
    setAttributes({htmlType: value});
  }
  const onChangeSize = (value) => {
    setAttributes({size: value});
  }

  const onChangeNewWindow = () => {
    setAttributes({
      newWindow: !newWindow
    });
  }

  let onInputTimer;

  const onInput = (e) => {
    const target = e.target;
    const position = getCaretPosition(target);
    const newText = target.text;
    clearTimeout(onInputTimer);
    if (text != newText) {
      setAttributes({text: newText});
      onInputTimer = setTimeout(function() {
        setCaretPosition(target, position);
      }, 1);
    }
  }

  return (<Fragment>
    <div className={[
        block
          ? "d-flex"
          : "d-inline-flex",
        "align-items-center"
      ].join(" ")}>
      <a {...anchor ? { id: anchor } : null } className={[
          className,
          size,
          buttonStyle(props.attributes),
          "btn"
        ].join(" ")} href={link} target={newWindow && '_blank'} role="button" rel={newWindow && 'noopener noreferrer'} contentEditable="contentEditable" onInput={onInput} onClick={(e) => e.preventDefault()} style={{
          marginTop: '3px'
        }}>
        {text}
      </a>
      <URLInputButton label="Link picker" url={link} onChange={(link) => setAttributes({link})}/>
    </div>
    <InspectorControls>
      <PanelBody title={__('Button Settings', 'bredecl-bootstrap-blocks')}>
        <PanelRow>

          <TextControl value={text} onChange={(text) => setAttributes({text: text})} label={__('Text', 'bredecl-bootstrap-blocks')}/>
        </PanelRow>
        <PanelRow>
          <BaseControl className="w-100">
            <SelectControl label="Button Style" value={htmlType} options={[
                {
                  label: 'button',
                  value: 'button'
                }, {
                  label: 'a',
                  value: 'a'
                }, {
                  label: 'span',
                  value: 'span'
                }
              ]} onChange={onChangeHtmlType}/>
          </BaseControl>
        </PanelRow>
        <PanelRow>
          <BaseControl className="w-100">
            <SelectControl label="Button Style" value={style} options={[
                {
                  label: 'Primary',
                  value: 'btn-primary'
                }, {
                  label: 'Secondary',
                  value: 'btn-secondary'
                }, {
                  label: 'Success',
                  value: 'btn-success'
                }, {
                  label: 'Danger',
                  value: 'btn-danger'
                }, {
                  label: 'Warning',
                  value: 'btn-warning'
                }, {
                  label: 'Info',
                  value: 'btn-info'
                }, {
                  label: 'Light',
                  value: 'btn-light'
                }, {
                  label: 'Dark',
                  value: 'btn-dark'
                }, {
                  label: 'Link',
                  value: 'btn-link'
                }
              ]} onChange={onChangeStyle}/>
          </BaseControl>
        </PanelRow>
        <PanelRow>

          <FormToggle id="form-toggle-outline" label={__('Button Outline Setting', 'bredecl-bootstrap-blocks')} checked={outline} onChange={onChangeOutline}/>
        </PanelRow>
        <PanelRow>

          <FormToggle id="form-toggle-block" label={__('Button Block Setting', 'bredecl-bootstrap-blocks')} checked={block} onChange={onChangeBlock}/>
        </PanelRow>
        <PanelRow>
          <BaseControl className="w-100">
            <RadioControl label="Button size" help="" selected={size} options={[
                {
                  label: 'Default',
                  value: ''
                }, {
                  label: 'Large',
                  value: 'btn-lg'
                }, {
                  label: 'Small',
                  value: 'btn-sm'
                }
              ]} onChange={onChangeSize}/>
          </BaseControl>
        </PanelRow>
        <PanelRow>
          <FormToggle id="form-toggle-window" label={__('Open link in new window', 'bredecl-bootstrap-blocks')} checked={newWindow} onChange={onChangeNewWindow}/>
        </PanelRow>
        <PanelRow>
          <TextControl value={databstoggle} onChange={(databstoggle) => setAttributes({databstoggle: databstoggle})} label={__('data-bs-toggle', 'bredecl-bootstrap-blocks')}/>
        </PanelRow>
        <PanelRow>
          <TextControl value={databstarget} onChange={(databstarget) => setAttributes({databstarget: databstarget})} label={__('data-bs-target', 'bredecl-bootstrap-blocks')}/>
        </PanelRow>
        <PanelRow>
          <TextControl value={ariaexpanded} onChange={(ariaexpanded) => setAttributes({ariaexpanded: ariaexpanded})} label={__('aria-expanded', 'bredecl-bootstrap-blocks')}/>
        </PanelRow>
        <PanelRow>
          <TextControl value={ariacontrols} onChange={(ariacontrols) => setAttributes({ariacontrols: ariacontrols})} label={__('aria-controls', 'bredecl-bootstrap-blocks')}/>
        </PanelRow>
      </PanelBody>
    </InspectorControls>
  </Fragment>);
}
