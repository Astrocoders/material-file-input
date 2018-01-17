import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormControl, InputLabel, Input, IconButton, FormHelperText } from 'material-ui'
import { FileUpload } from 'material-ui-icons'

class FileInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: '',
    }
  }

  handleClickUploadButton() {
    this.fileInputRef.click()
  }

  getFileName(file) {
    return file && file.name
  }

  render() {
    return (
      <FormControl fullWidth {...this.props.formControlProps}>
        <InputLabel
          htmlFor={this.props.name}
          shrink={true}
          {...this.props.inputLabelProps}
        >
          {this.props.label}
        </InputLabel>
        <Input
          type="text"
          onChange={this.props.onChange}
          endAdornment={
            <IconButton onClick={() => this.handleClickUploadButton()}>
              <FileUpload />
            </IconButton>
          }
          value={this.getFileName(this.state.file)}
          onClick={() => this.handleClickUploadButton()}
          {...this.props.inputProps}
        />
        <input
          ref={input => {
            this.fileInputRef = input
          }}
          type="file"
          style={{ display: 'none' }}
          onChange={e => this.setState({ file: e.target.files[0] })}
        />
        {this.props.helperText && (
          <FormHelperText>{this.props.helperText}</FormHelperText>
        )}
      </FormControl>
    )
  }
}

FileInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  helperText: PropTypes.string,
  formControlProps: PropTypes.object,
  inputLabelProps: PropTypes.object,
  inputProps: PropTypes.object,
}

export default FileInput
