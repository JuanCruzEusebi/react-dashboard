import React from "react";

const ContentWrapper = (props) => {
  return (
    <div id='content-wrapper' className='d-flex flex-column'>
      <div id="content">
        {props.top}
        {props.main}
      </div>
      {props.footer}
    </div>
  )
}

export default ContentWrapper;