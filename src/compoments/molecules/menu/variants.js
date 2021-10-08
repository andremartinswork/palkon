const variantContent = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      type: 'spring',
      bounce: 0
    }
  },
  close: {
    opacity: 0,
    x: '100%',
    transition: {
      duration: 0.8,
      type: 'spring',
      bounce: 0
    }
  }
};

const variantOverlay = {
  open: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    transition: {
      duration: 0.8,
      type: 'spring',
      bounce: 0
    }
  },
  close: {
    backgroundColor: 'rgba(0,0,0,0)',
    transition: {
      duration: 0.8,
      type: 'spring',
      bounce: 0
    }
  }
};

const variantClose = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: 'spring',
      bounce: 0
    }
  },
  close: {
    x: 20,
    opacity: 0,
    transition: {
      duration: 1,
      type: 'spring',
      bounce: 0
    }
  }
};

export { variantContent, variantOverlay, variantClose };
