import {buttonStyle} from './utils';

export const save = (props) => {

  if (props.attributes.htmlType == "a") {
    return (<a {...props.attributes.anchor ? { id: props.attributes.anchor } : { } } className={[
        "btn", typeof props.className !== "undefined" && props.className.length
          ? props.className
          : [],
        props.attributes.size.length
          ? props.attributes.size
          : [],
        buttonStyle(props.attributes)
      ].join(" ").replace(/\s\s+/g, ' ')} href={props.attributes.link} target={props.attributes.newWindow && "_blank"} role="button" rel={props.attributes.newWindow && 'noopener noreferrer'} data-bs-toggle={props.attributes.databstoggle} data-bs-target={["#", props.attributes.databstarget].join("").trim()} aria-expanded={props.attributes.ariaexpanded} aria-controls={props.attributes.ariacontrols}>
      {props.attributes.text}

    </a>);
  }else if (props.attributes.htmlType == "span") {
    return (<span {...props.attributes.anchor ? { id: props.attributes.anchor } : { } } className={[
        "btn", typeof props.className !== "undefined" && props.className.length
          ? props.className
          : [],
        props.attributes.size.length
          ? props.attributes.size
          : [],
        buttonStyle(props.attributes)
      ].join(" ").replace(/\s\s+/g, ' ')} href={props.attributes.link} target={props.attributes.newWindow && "_blank"} role="button" rel={props.attributes.newWindow && 'noopener noreferrer'} data-bs-toggle={props.attributes.databstoggle} data-bs-target={["#", props.attributes.databstarget].join("").trim()} aria-expanded={props.attributes.ariaexpanded} aria-controls={props.attributes.ariacontrols}>
      {props.attributes.text}

    </span>);
  }else if (props.attributes.htmlType == "button") {
    return (<button {...props.attributes.anchor ? { id: props.attributes.anchor } : { } } className={[
        "btn", typeof props.className !== "undefined" && props.className.length
          ? props.className
          : [],
        props.attributes.size.length
          ? props.attributes.size
          : [],
        buttonStyle(props.attributes)
      ].join(" ").replace(/\s\s+/g, ' ')} role="button"  data-bs-toggle={props.attributes.databstoggle} data-bs-target={["#", props.attributes.databstarget].join("").trim()} aria-expanded={props.attributes.ariaexpanded} aria-controls={props.attributes.ariacontrols}>
      {props.attributes.text}

    </button>);
  }
}
