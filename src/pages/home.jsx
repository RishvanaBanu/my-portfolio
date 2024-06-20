const Home = () => {
  return (
    <div className='flex flex-row gap-3 justify-between items-center m-14 '>
      <div className='basis-1/2'>
        <h1 className='text-3xl font-extrabold text-firstGrey  decoration-fourthGrey underline-offset-1 '>
          <span className='text-'>Hai! </span>I'm Rishvana Banu
        </h1>
        <p className='text-sixthGrey my-5  underline'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem quod architecto quibusdam iusto, veniam nisi dolor
          debitis sed repellendus. Reiciendis in eum iusto ex ea ducimus totam
          rem aut repellendus?
        </p>
      </div>
      <div className='basis-1/2'>
        <img
          className='h-900 w-500'
          src='https://cdn4.sharechat.com/img_366490_641df9b_1665671363612_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=612_sc.jpg'
          alt='image'
        />
      </div>
    </div>
  );
};
export default Home;
