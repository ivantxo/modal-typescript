import * as React from 'react';
import * as _ from 'lodash';
import {
  StyledButton,
  StyledFooter,
  StyledModal,
  StyledModalHeader,
  StyledModalOverLay,
} from './styles';

export interface ModalProps {
  onClose: Function;
  show: boolean;
}

class Modal extends React.Component<ModalProps> {
  private modal: HTMLDivElement;

  onClose = (e: any) => {
    return this.props.onClose && this.props.onClose(e);
  }

  onKeyUp = (e: any) => {
    // Lookout for event key (27)
    if (e.which === 27 && this.props.show) {
      this.onClose(e);
    }
  }

  onOutsideClick = (e: any) => {
    if (!_.isNil(this.modal)) {
      if (!this.modal.contains(e.target)) {
        this.onClose(e);
      }
    }
  }

  componentDidMount() {
    document.addEventListener('keyup', this.onKeyUp);
    document.addEventListener('mousedown', this.onOutsideClick, false);
  }

  componentWillMount() {
    document.removeEventListener('keyup', this.onKeyUp);
    document.removeEventListener('mousedown', this.onOutsideClick, false);
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <StyledModalOverLay>
        <StyledModal innerRef={(node: any) => { this.modal = node; }}>
          <div>
            {this.props.children}
          </div>
          <StyledModalHeader>
            Modal Window
            <a href="#" onClick={(e) => { this.onClose(e); }}>X</a>
          </StyledModalHeader>
          <StyledFooter>
            <StyledButton>
              Close modal
            </StyledButton>
          </StyledFooter>
        </StyledModal>
      </StyledModalOverLay>
    );
  }
}

export default Modal;
