const getScroll = () => {
  return {
    left: document.documentElement.scrollLeft || document.body.scrollLeft || 0,
    top: document.documentElement.scrollTop || document.body.scrollTop || 0
  }
}

export default getScroll