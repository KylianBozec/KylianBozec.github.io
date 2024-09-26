onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);

    setTimeout(() => {
        const message = document.getElementById('love-message');
        message.classList.add('show-message');
    }, 5000);
    }, 1000);
  };
