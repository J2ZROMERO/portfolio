const fetchVideo = async (url,img) => {
    const response = await fetch(url);
    if (response.ok) {
      console.log(url); // You can parse the response data here if needed
    } else {
       document.querySelector('.video-container__son').style.display = 'none';
       const imgCard = document.querySelector('.video-container');
       console.log(img)
       imgCard.style.backgroundImage = `url(${img})`;
       imgCard.style.backgroundPosition = 'center';
       imgCard.style.backgroundRepeat = 'no-repeat';
       imgCard.style.backgroundSize =  '95%';
    }
  };

  export default fetchVideo;