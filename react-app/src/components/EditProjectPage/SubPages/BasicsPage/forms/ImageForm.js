import React, { useState, useEffect } from "react";
import FormWrapper from "../../FormWrapper";

const ImageForm = ({ image_src, handleChange, project_id }) => {
  const infoArr = [
    'Add an image that clearly represents your project. Choose one that looks good at different sizes—it’ll appear on your project page, across the Kickstarter website and mobile apps, and (when shared) on social channels.',
    'Your image should be at least 1024x576 pixels. It will be cropped to a 16:9 ratio.',
    'Avoid images with banners, badges, or text—they are illegible at smaller sizes, can be penalized by the Facebook algorithm, and decrease your chances of getting Kickstarter homepage and newsletter features.'
  ]
  return (
    <FormWrapper header='Project Image' infoArr={infoArr}>
      <div className='edit-form-container'>
        <div className='edit-form-title-container'>
          <div className='edit-form-header'>Image</div>
          <textarea
            name='image_src'
            value={image_src}
            onChange={handleChange}
            placeholder='www.image.com'
            className='edit-form-text-area edit-page-text-area'
            maxLength={200}
          />
          <div className='edit-form-character-count'>{image_src?.length}/200</div>
        </div>
      </div>
    </FormWrapper>
  )
}

export default ImageForm;
