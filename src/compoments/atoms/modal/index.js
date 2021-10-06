import { useEffect } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';

const customStyles = {
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: '1000',
    background: 'transparent'
  },
  content: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 0,
    margin: 0,
    border: 0,
    borderRadius: 0,
    zIndex: '100000000001',
    background: 'transparent'
  }
};

function Modal(props) {
  const { isOpen, onAfterOpen, onRequestClose, children } = props;

  useEffect(() => {
    ReactModal.setAppElement('#__next');
  }, []);

  return (
    <>
      <ReactModal isOpen={isOpen} onAfterOpen={onAfterOpen} onRequestClose={onRequestClose} style={customStyles} ariaHideApp={true}>
        {children}
      </ReactModal>
      {isOpen && <ToogleScroll />}
    </>
  );
}

const ToogleScroll = createGlobalStyle`
  html, body {
    overflow: hidden;
  }
`;

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onAfterOpen: PropTypes.func,
  onRequestClose: PropTypes.func,
  children: PropTypes.element
};

export default Modal;
